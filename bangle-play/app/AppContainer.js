import './style/tailwind.src.css';
import './style/style.css';
import './style/prosemirror.css';
import 'prosemirror-gapcursor/style/gapcursor.css';
import PropTypes from 'prop-types';
import React from 'react';
import { EditorContextProvider } from 'bangle-core/helper-react/editor-context';
import { Editor } from './components/Editor';
import { FileBrowser } from './components/Aside/FileBrowser';
import { WorkspaceContext } from './store/WorkspaceContext';
import { EditorManager } from './components/EditorManager';
import { UIContext, UIContextProvider } from './store/UIContext';
import { Aside } from './components/Aside/Aside';

export class AppContainer extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <div className="h-screen main-wrapper">
        <div className="editor-wrapper">
          <div className="flex justify-center flex-row">
            <EditorManager>
              {(manager, openedDocuments) =>
                openedDocuments.map((openedDocument, i) => (
                  <div
                    key={openedDocument.key}
                    className="flex-1 max-w-screen-md ml-6 mr-6"
                    style={{ height: '100vh', overflowY: 'scroll' }}
                  >
                    <EditorContextProvider>
                      <Editor
                        isFirst={i === 0}
                        docName={openedDocument.docName}
                        manager={manager}
                      />
                    </EditorContextProvider>
                    {/* adds white space at bottoms */}
                    <div
                      style={{
                        display: 'flex',
                        flexGrow: 1,
                        height: '20vh',
                        backgroundColor: 'transparent',
                      }}
                    >
                      &nbsp;
                    </div>
                  </div>
                ))
              }
            </EditorManager>
          </div>
        </div>
        <UIContextProvider>
          <Aside />
        </UIContextProvider>
      </div>
    );
  }
}
