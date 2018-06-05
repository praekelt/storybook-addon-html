import React from 'react'
import { storiesOf } from '@storybook/react'

const Component = () => <div />
const Simple = props => (
  <div>
    <span>Hello</span>
    {props.children}
  </div>
)

export default () =>
  storiesOf('Children Array', module)
    .addWithHTML(
      'Simple Array',
      () => (
        <div>
          <div />
          <div />
        </div>
      ),
      { skip: 1 },
    )
    .addWithHTML(
      'Array with function',
      () => (
        <div>
          <div />
          <div />
          {Component()}
        </div>
      ),
      { skip: 1 },
    )
    .addWithHTML(
      'Array with nested component',
      () => (
        <div>
          <div />
          <Simple>
            <span>hello</span>
          </Simple>
        </div>
      ),
      { skip: 1 },
    )
