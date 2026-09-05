// step 1 read the problem carefully
//Build a Todo application where the user can:

import { useState } from "react"

// Add a todo
// Edit a todo
// Delete a todo
// Mark a todo as complete
// Persist todos after refreshing the page

function App() {
  const [todos, setTodos] = useState('')
  const [input, setInput] = useState('')
  const [editingTodoId, setEditingTodoId] = useState(null)

  return (
    <>
      <div>Hi</div>
    </>
  )
}

export default App