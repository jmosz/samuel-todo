import React from 'react'
import TodoInterface from './Todo.interface'
import Todo from './Todo'

interface Props {
  todos: TodoInterface[]
  handleDone: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos, handleDone }) => (
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {todos
      .sort((a, b) => a?.id - b?.id)
      .map((todo) => (
        <Todo key={todo.id} data={todo} handleDone={handleDone} />
      ))}
  </ul>
)

export default TodoList
