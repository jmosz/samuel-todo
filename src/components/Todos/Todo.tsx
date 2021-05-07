import React from 'react'
import TodoInterface from './Todo.interface'

interface Props {
  data: TodoInterface
  handleDone: (id: number) => void
}

const Todo: React.FC<Props> = ({ data, handleDone }) => (
  <h1>CAMBIO!!!!</h1>
  <li>
    <input
      id={`todo-${data.id}`}
      type="checkbox"
      checked={data.done}
      onChange={() => handleDone(data.id)}
    />
    <span>{data.id}</span>.{' '}
    <label
      htmlFor={`todo-${data.id}`}
      style={{ textDecoration: data.done ? 'line-through' : '' }}
    >
      {data.text}
    </label>
  </li>
)

export default Todo
