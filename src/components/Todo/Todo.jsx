import TodoList from '../TodoList'
import AddTaskForm from '../AddTaskForm'
import SearchTaskForm from '../SearchTaskForm'
import TodoInfo from '../TodoInfo'

const Todo = (props) => {
  const {} = props

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </div>
  )
}

export default Todo