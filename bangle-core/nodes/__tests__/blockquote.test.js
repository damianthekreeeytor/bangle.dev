/**
 * @jest-environment jsdom
 */

/** @jsx psx */
import { psx, renderTestEditor, sendKeyToPm } from 'bangle-core/test-helpers';

import { OrderedList } from '../ordered-list';
import { BulletList } from '../bullet-list';
import { ListItem } from '../list-item/list-item';

import { Underline } from '../../marks';

import { CodeBlock } from '../code-block';
import { Heading } from '../heading';
import { HardBreak } from '../hard-break';
import { Blockquote } from '../blockquote';
import { TodoList } from '../todo-list';
import { TodoItem } from '../todo-item';
import { typeText } from 'bangle-core/test-helpers/index';

const extensions = [
  new BulletList(),
  new ListItem(),
  new OrderedList(),
  new HardBreak(),
  new Heading(),
  new Underline(),
  new TodoList(),
  new TodoItem(),
  new Blockquote(),
  new CodeBlock(),
];

const testEditor = renderTestEditor({ extensions });

describe('Markdown shorthand works', () => {
  it('pressing > on empty paragraph works', async () => {
    const { editor } = await testEditor(
      <doc>
        <para>[]</para>
      </doc>,
    );

    typeText(editor.view, '> kj');
    expect(editor.state).toEqualDocAndSelection(
      <doc>
        <blockquote>
          <para>kj[]</para>
        </blockquote>
      </doc>,
    );
  });

  it('pressing > on empty heading works', async () => {
    const { editor } = await testEditor(
      <doc>
        <heading>[]</heading>
      </doc>,
    );

    typeText(editor.view, '> kj');
    expect(editor.state).toEqualDocAndSelection(
      <doc>
        <blockquote>
          <heading>kj[]</heading>
        </blockquote>
      </doc>,
    );
  });

  it('pressing > on empty bullet list doesnt not work', async () => {
    const { editor } = await testEditor(
      <doc>
        <ul>
          <li>
            <para>[]</para>
          </li>
        </ul>
      </doc>,
    );

    typeText(editor.view, '> kj');
    expect(editor.state).toEqualDocAndSelection(
      <doc>
        <ul>
          <li>
            <para>{'> kj'}[]</para>
          </li>
        </ul>
      </doc>,
    );
  });
});

describe('Keyboard shortcut', () => {
  it('works on empty para', async () => {
    const { editor } = await testEditor(
      <doc>
        <para>[]</para>
      </doc>,
    );

    sendKeyToPm(editor.view, 'Ctrl-ArrowRight');

    expect(editor.state).toEqualDocAndSelection(
      <doc>
        <blockquote>
          <para>[]</para>
        </blockquote>
      </doc>,
    );
  });

  it('works with content in the para', async () => {
    const { editor } = await testEditor(
      <doc>
        <para>kj[]</para>
      </doc>,
    );

    sendKeyToPm(editor.view, 'Ctrl-ArrowRight');

    expect(editor.state).toEqualDocAndSelection(
      <doc>
        <blockquote>
          <para>kj[]</para>
        </blockquote>
      </doc>,
    );
  });
});

describe('Insert empty paragraph above and below', () => {
  test.each([
    [
      <doc>
        <blockquote>
          <para>foo[]bar</para>
        </blockquote>
      </doc>,
      <doc>
        <para>[]</para>
        <blockquote>
          <para>foobar</para>
        </blockquote>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>[]foobar</para>
        </blockquote>
      </doc>,
      <doc>
        <para>[]</para>
        <blockquote>
          <para>foobar</para>
        </blockquote>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>[]</para>
        </blockquote>
      </doc>,
      <doc>
        <para>[]</para>
        <blockquote>
          <para></para>
        </blockquote>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>hello</para>
          <para>[]</para>
        </blockquote>
      </doc>,
      <doc>
        <para>[]</para>
        <blockquote>
          <para>hello</para>
          <para></para>
        </blockquote>
      </doc>,
    ],
    [
      <doc>
        <para>other paragraph</para>
        <blockquote>
          <para>hello</para>
          <para>[]</para>
        </blockquote>
      </doc>,
      <doc>
        <para>other paragraph</para>
        <para>[]</para>
        <blockquote>
          <para>hello</para>
          <para></para>
        </blockquote>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>top</para>
        </blockquote>
        <blockquote>
          <para>hello[]</para>
        </blockquote>
      </doc>,
      <doc>
        <blockquote>
          <para>top</para>
        </blockquote>
        <para>[]</para>
        <blockquote>
          <para>hello</para>
        </blockquote>
      </doc>,
    ],
    [
      <doc>
        <ul>
          <li>
            <para>top</para>
          </li>
        </ul>
        <blockquote>
          <para>hello[]</para>
        </blockquote>
      </doc>,
      <doc>
        <ul>
          <li>
            <para>top</para>
          </li>
        </ul>
        <para>[]</para>
        <blockquote>
          <para>hello</para>
        </blockquote>
      </doc>,
    ],
  ])('Case %# insert empty paragraph above', async (input, expected) => {
    const { editor } = await testEditor(input);

    sendKeyToPm(editor.view, 'Cmd-Shift-Enter');

    expect(editor.state).toEqualDocAndSelection(expected);
  });

  test.each([
    [
      <doc>
        <blockquote>
          <para>foo[]bar</para>
        </blockquote>
      </doc>,
      <doc>
        <blockquote>
          <para>foobar</para>
        </blockquote>
        <para>[]</para>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>[]foobar</para>
        </blockquote>
      </doc>,
      <doc>
        <blockquote>
          <para>foobar</para>
        </blockquote>
        <para>[]</para>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>[]</para>
        </blockquote>
      </doc>,
      <doc>
        <blockquote>
          <para></para>
        </blockquote>
        <para>[]</para>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>hello</para>
          <para>[]</para>
        </blockquote>
      </doc>,
      <doc>
        <blockquote>
          <para>hello</para>
          <para></para>
        </blockquote>
        <para>[]</para>
      </doc>,
    ],
    [
      <doc>
        <para>other paragraph</para>
        <blockquote>
          <para>hello</para>
          <para>[]</para>
        </blockquote>
      </doc>,
      <doc>
        <para>other paragraph</para>
        <blockquote>
          <para>hello</para>
          <para></para>
        </blockquote>
        <para>[]</para>
      </doc>,
    ],
    [
      <doc>
        <blockquote>
          <para>top</para>
        </blockquote>
        <blockquote>
          <para>hello[]</para>
        </blockquote>
      </doc>,
      <doc>
        <blockquote>
          <para>top</para>
        </blockquote>
        <blockquote>
          <para>hello</para>
        </blockquote>
        <para>[]</para>
      </doc>,
    ],
    [
      <doc>
        <ul>
          <li>
            <para>top</para>
          </li>
        </ul>
        <blockquote>
          <para>[]hello</para>
        </blockquote>
      </doc>,
      <doc>
        <ul>
          <li>
            <para>top</para>
          </li>
        </ul>
        <blockquote>
          <para>hello</para>
        </blockquote>
        <para>[]</para>
      </doc>,
    ],
  ])('Case %# insert empty paragraph below', async (input, expected) => {
    const { editor } = await testEditor(input);

    sendKeyToPm(editor.view, 'Cmd-Enter');

    expect(editor.state).toEqualDocAndSelection(expected);
  });
});