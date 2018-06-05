import React from 'react'
import { setAddon } from '@storybook/react'
import HTMLAddon from '../../lib/index'

import SimpleStories from './simple'
import DeepStories from './deep'
import FunctionStories from './functions'
import ArrayStories from './array'
import WithPropsStories from './withProps'

setAddon(HTMLAddon)

SimpleStories()
DeepStories()
FunctionStories()
ArrayStories()
WithPropsStories()
