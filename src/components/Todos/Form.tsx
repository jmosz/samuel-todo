import React from 'react'
import TodoInterface from './Todo.interface'

interface Props {
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  todo: TodoInterface
}

const Form: React.FC<Props> = ({ todo, handleSubmit, handleChange }) => {
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <label htmlFor="text">Nuevo todo:</label>
      <input
        value={todo.text}
        onChange={handleChange}
        type="text"
        name="text"
        id="text"
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default Form
