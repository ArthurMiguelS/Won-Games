import { Meta, StoryObj } from '@storybook/react'
import TextContent, { TextContentProps } from './index'
import textMock from './mock'
import React from 'react'


export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<TextContentProps> = (args) => (
  <TextContent {...args} />
)
