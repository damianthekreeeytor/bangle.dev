import { useEffect, useState } from 'react';
import { objUid } from '@bangle.dev/core/utils/object-uid';
import { saveRenderHandlers } from '@bangle.dev/core/node-view';

const LOG = false;

let log = LOG ? console.log.bind(console, 'node-view-helpers') : () => {};

export const nodeViewUpdateStore = new WeakMap();

export const nodeViewRenderHandlers = (updateNodeViews) => ({
  create: (nodeView, nodeViewProps) => {
    log('create', objUid.get(nodeView));
    updateNodeViews((nodeViews) => [...nodeViews, nodeView]);
  },
  update: (nodeView, nodeViewProps) => {
    log('update', objUid.get(nodeView));
    const updateCallback = nodeViewUpdateStore.get(nodeView);
    // If updateCallback is undefined (which can happen if react took long to mount),
    // we are still okay, as the latest nodeViewProps will be accessed whenever it mounts.
    if (updateCallback) {
      updateCallback();
    }
  },
  destroy: (nodeView) => {
    log('destroy', objUid.get(nodeView));
    updateNodeViews((nodeViews) => nodeViews.filter((n) => n !== nodeView));
  },
});

export function useNodeViews(ref) {
  const [nodeViews, setNodeViews] = useState([]);
  useEffect(() => {
    // save the renderHandlers in the dom to decouple nodeView instantiating code
    // from the editor. Since PM passing view when nodeView is created, the author
    // of the component can get the handler reference from `getRenderHandlers(view)`.
    // Note: this assumes that the pm's dom is the direct child of `editorRenderTarget`.
    let destroyed = false;
    saveRenderHandlers(
      ref.current,
      nodeViewRenderHandlers((cb) => {
        if (!destroyed) {
          // use callback variant of setState to
          // always get freshest nodeViews.
          setNodeViews((nodeViews) => cb(nodeViews));
        }
      }),
    );
    return () => {
      destroyed = true;
    };
  }, [ref]);

  return nodeViews;
}
