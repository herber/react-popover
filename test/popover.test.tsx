import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Popover } from '../src';

describe('popover', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Popover popover={() => <div>I am a Popover</div>}>
        <button>Test</button>
      </Popover>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
