import React from 'react'
import { mount } from '../../../npm/react'
import { Canvas } from '../../src/Canvas'

describe('Canvas', () => {
  it('draws with the pen tool', () => {
    mount(<Canvas shape='pen' />)
  })
})