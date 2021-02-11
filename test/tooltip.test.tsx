import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tooltip } from '../src';

describe('tooltip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Tooltip content="I am a Tooltip">
        <button>Test</button>
      </Tooltip>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
