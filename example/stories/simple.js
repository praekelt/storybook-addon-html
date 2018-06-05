import React from 'react';
import { storiesOf } from '@storybook/react';

const Simple = ({ children }) => (
    <div>
        <span>Hello</span>
        {children}
    </div>
);

export default () =>
    storiesOf('Simple Test', module)
        .addWithHTML('No children - No options', () => <Simple />)
        .addWithHTML('No children - Rename', () => <Simple />, {
            displayName: 'Renamed'
        })
        .addWithHTML('With children - No options', () => (
            <Simple>
                <span>World</span>
            </Simple>
        ))
        .addWithHTML(
            'With children - Skip',
            () => (
                <Simple>
                    <span>World</span>
                </Simple>
            ),
            { skip: 1 }
        )
        .addWithHTML(
            'With children - Skip and rename',
            () => (
                <Simple>
                    <span>World</span>
                </Simple>
            ),
            { skip: 1, displayName: 'Renamed' }
        );
