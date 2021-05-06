import { render, cleanup, fireEvent } from '@testing-library/react'

import App from '../App'

describe('App', () => {
  beforeEach(cleanup)

  it('Renders the app component', () => {
    const { getByLabelText } = render(<App />)

    expect(getByLabelText('Nuevo todo:')).not.toBeNull()
  })

  it('Un todo aparece en la pagina', () => {
    const { getByLabelText, getByText } = render(<App />)

    const input = getByLabelText('Nuevo todo:')
    fireEvent.change(input, { target: { value: 'Todo test' } })
    fireEvent.click(getByText('Agregar'))
    getByText('Todo test')
  })
})
