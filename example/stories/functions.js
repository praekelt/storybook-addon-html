import React from 'react';
import { storiesOf } from '@storybook/react';

class Simple extends React.Component {
  render() {
    return (
      <div>
        {typeof this.props.children === 'function'
          ? this.props.children()
          : this.props.children}
      </div>
    );
  }
}
const withErrors = BaseComponent => props => {
  const style = { color: 'red' };
  return <BaseComponent {...props} style={style} />;
};

const SimpleWithErrors = withErrors(Simple);

export default () =>
  storiesOf('Function as a children', module)
    .addWithHTML('No options', () => <Simple>{() => <span>World</span>}</Simple>)
    .addWithHTML('Skip', () => <Simple>{() => <span>World</span>}</Simple>, {
      skip: 1,
    })
    .addWithHTML(
      'Skip and Rename',
      () => <Simple>{() => <span>World</span>}</Simple>,
      { skip: 1, displayName: () => 'Renamed' },
    )
    .addWithHTML('Deep function - No options', () => (
      <Simple>
        {() => (
          <SimpleWithErrors>
            <span>World</span>
          </SimpleWithErrors>
        )}
      </Simple>
    ))
    .addWithHTML(
      'Deep function - Skip',
      () => (
        <Simple>
          {() => (
            <SimpleWithErrors>
              <span>World</span>
            </SimpleWithErrors>
          )}
        </Simple>
      ),
      { skip: 2 },
    );
