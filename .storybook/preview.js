import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
    </>
  )
]
