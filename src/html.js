import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import Prism from './prism'

import globalStyle from './css'

const prismStyle = document.createElement('style')
prismStyle.innerHTML = globalStyle
document.body.appendChild(prismStyle)

export default class HTML extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    props.ob({
      next: type => (type === 'html' ? this.onAddHTML.bind(this) : this.setCurrent.bind(this)),
    })

    this.state = {}
    this.stopListeningOnStory = () => this.setState({})
  }

  setCurrent(kind, story) {
    this.setState({ current: { kind, story } })
  }

  onAddHTML(kind, story, html) {
    const state = this.state

    if (typeof state[kind] === 'undefined') {
      state[kind] = {}
    }
    state[kind][story] = html
    this.setState(state)
  }

  render() {
    if (
      typeof this.state.current !== 'undefined' &&
      typeof this.state[this.state.current.kind] !== 'undefined'
    ) {
      const current = this.state.current
      const code = this.state[current.kind][current.story]
      const html = code ? Prism.highlight(code, Prism.languages.html) : ''

      return (
        <div style={styles.container}>
          <CopyToClipboard style={styles.btn} text={code ? code : ''}>
            <button>Copy</button>
          </CopyToClipboard>
          <pre style={styles.pre} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      )
    } else {
      return (
        <div style={styles.container}>
          <CopyToClipboard style={styles.btn} text="" disabled>
            <button>Copy</button>
          </CopyToClipboard>
          <pre style={styles.pre} />
        </div>
      )
    }
  }
}

const styles = {
  container: {
    flex: 1,
    padding: '10px',
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    border: 'none',
    borderTop: 'solid 1px rgba(0, 0, 0, 0.2)',
    borderLeft: 'solid 1px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.5)',
    padding: '5px 10px',
    borderRadius: '4px 0 0 0',
    color: 'rgba(0, 0, 0, 0.5)',
    textTransform: 'uppercase',
    outline: 'none',
  },
  pre: {
    flex: 1,
  },
}
