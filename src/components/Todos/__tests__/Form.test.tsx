import { render, fireEvent } from '@testing-library/react'
import TodoInterface from '../Todo.interface'
import Form from '../Form'

const labelText = 'Nuevo todo:'
beforeEach(() => {
  window.localStorage.clear()
})

describe('Todo form', () => {
  const handleSubmit = jest.fn()
  const handleChange = jest.fn()
  const todo: TodoInterface = { id: 1, text: '', done: false }

  it('Renders app correctly', () => {
    const { getByLabelText } = render(
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todo={todo}
      />
    )
    expect(getByLabelText(labelText)).not.toBeNull()
  })

  it('Prevents todo creation if text is empty', () => {
    const { getByTestId } = render(
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todo={todo}
      />
    )
    fireEvent.submit(getByTestId('form'))
    const listItems = document.querySelectorAll('li')

    expect(listItems.length).toBe(0)
  })

  it('Clears input after todo creation', () => {
    const todoText = 'Todo ejemplo'

    const { getByLabelText, getByTestId } = render(
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todo={todo}
      />
    )
    const input = getByLabelText(labelText) as HTMLInputElement
    fireEvent.change(input, { target: { value: todoText } })

    fireEvent.submit(getByTestId('form'))

    expect(input.value).toBe('')
  })
})
