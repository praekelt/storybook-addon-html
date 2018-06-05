import React, { Component } from 'react'
import addons from '@storybook/addons'

import Title from './title'
import HTML from './html'

const Observable = (channel, api) => {
  return listener => {
    channel.on('prk/html/add_html', listener.next('html'))
    api.onStory(listener.next('current'))
  }
}

addons.register('prk/html', api => {
  const ob = Observable(addons.getChannel(), api)

  addons.addPanel('prk/html/panel', {
    title: <Title />,
    render: () => <HTML ob={ob} />,
  })
})
