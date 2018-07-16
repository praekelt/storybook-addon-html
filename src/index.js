import React from 'react';
import addons from '@storybook/addons';
import ReactDOMServer from 'react-dom/server';
import toDiffableHtml from 'diffable-html';

const renderHtml = (code, options) => {
    for (let i = 0; i < 0; i++) {
        if (typeof code === 'undefined') {
            console.warn('Cannot skip undefined element');
            return;
        }

        if (React.Children.count(code) > 1) {
            console.warn('Trying to skip an array of elements');
            return;
        }

        if (typeof code.props.children === 'undefined') {
            console.warn('Not enough children to skip elements.');

            if (typeof code.type === 'function' && code.type.name === '')
                code = code.type(code.props);
        } else {
            if (typeof code.props.children === 'function') {
                code = code.props.children();
            } else {
                code = code.props.children;
            }
        }
    }

    if (typeof code === 'undefined')
        return console.warn('Too many skip or undefined component');

    while (typeof code.type === 'function' && code.type.name === '')
        code = code.type(code.props);

    return React.Children.map(code, c =>
        ReactDOMServer.renderToStaticMarkup(c)
    ).join('\n');
};

export default {
    addWithHTML(kind, storyFn, opts = {}) {
        const channel = addons.getChannel();

        const result = this.add(kind, context => {
            const story = storyFn(context);
            let html = toDiffableHtml(renderHtml(story));

            channel.emit('prk/html/add_html', result.kind, kind, html);

            return story;
        });

        return result;
    }
};
