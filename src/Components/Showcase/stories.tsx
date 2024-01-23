import { Meta, StoryObj } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from '../Highlight/mock'
import gamesMock from '../GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: StoryObj<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames: StoryObj<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
