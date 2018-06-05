import React from 'react'
import { storiesOf } from '@storybook/react'

const Deep = ({ children }) => (
  <div>
    <div>
      <div>
        <div>
          <span>Hello</span>
          {children ? children : null}
        </div>
      </div>
    </div>
  </div>
)

export default () =>
  storiesOf('Deep Test', module)
    .addWithHTML('No children - No options', () => (
      <div>
        <div>
          <ul>
            <li>Deeper</li>
          </ul>
          <div>
            <div>
              <span>Hello</span>
              <Deep />
            </div>
          </div>
        </div>
      </div>
    ))
    .addWithHTML(
      'No children - Rename',
      () => (
        <div>
          <div>
            <div>
              <div>
                <span>Hello</span>
                <Deep />
              </div>
            </div>
          </div>
        </div>
      ),
      {
        displayName: () => 'Renamed',
      },
    )
    .addWithHTML('With children - No options', () => (
      <div>
        <div>
          <div>
            <div>
              <span>Hello</span>
              <Deep />
            </div>
          </div>
        </div>
      </div>
    ))
    .addWithHTML(
      'With children - Skip',
      () => (
        <div>
          <div>
            <div>
              <div>
                <span>Hello</span>
                <Deep />
              </div>
            </div>
          </div>
        </div>
      ),
      { skip: 1 },
    )
    .addWithHTML(
      'With children - Skip and rename',
      () => (
        <div>
          <div>
            <ul>
              <li>Deeper</li>
            </ul>
            <div>
              <div>
                <span>Hello</span>
                <Deep />
              </div>
            </div>
          </div>
        </div>
      ),
      { skip: 1, displayName: () => 'Renamed' },
    )
