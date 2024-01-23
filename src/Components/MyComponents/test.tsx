import { render, screen } from '@testing-library/react'

import MyComponents from '.'

describe('<MyComponents />', () => {
  it('should render the heading', () => {
    const { container } = render(<MyComponents />)

    expect(screen.getByRole('heading', { name: /MyComponents/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
