import React from 'react';
import { storiesOf } from '@storybook/react';

const Simple = ({ children }) => (
  <div>
    <span>Hello</span>
    {children}
  </div>
);

export default () =>
  storiesOf('With Props', module)
    .addWithHTML('No children - No options', () => (
      <Simple test="test" value={true} />
    ))
    .addWithHTML(
      'No children - Rename',
      () => <Simple test="test" value={true} />,
      {
        displayName: 'Renamed',
      },
    )
    .addWithHTML('With children - No options', () => (
      <Simple test="test" value={true}>
        <span>World</span>
      </Simple>
    ))
    .addWithHTML(
      'With children - Skip',
      () => (
        <Simple>
          <Simple test="test" value={true}>
            <div />
          </Simple>
        </Simple>
      ),
      { skip: 1 },
    )
    .addWithHTML(
      'With children - Skip and rename',
      () => (
        <Simple>
          <Simple test="test" value={true}>
            <span>World</span>
          </Simple>
        </Simple>
      ),
      { skip: 1, displayName: () => 'Renamed' },
    );
