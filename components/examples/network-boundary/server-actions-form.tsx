"use client"

import { useState } from "react"
import { addTodo, deleteTodo, updateTodoStatus } from "@/app/(components-and-directives)/network-boundary/actions"

interface Todo {
  id: string
  title: string
  createdAt: string
  completed?: boolean
}

export default function ServerActionsForm() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(false)
  const [newTodo, setNewTodo] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    setLoading(true)
    try {
      const todo = await addTodo(newTodo)
      setTodos(prev => [...prev, { ...todo, completed: false }])
      setNewTodo("")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    const result = await deleteTodo(id)
    if (result.success) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  const handleToggle = async (id: string, completed: boolean) => {
    const result = await updateTodoStatus(id, completed)
    setTodos(prev => prev.map(todo =>
      todo.id === result.id ? { ...todo, completed: result.completed } : todo
    ))
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Dodaj nowe zadanie..."
          className="flex-1 px-3 py-2 border rounded-md"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? "Dodawanie..." : "Dodaj"}
        </button>
      </form>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => handleToggle(todo.id, e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.title}
            </span>
            <span className="text-xs text-gray-500 ml-auto">
              {new Date(todo.createdAt).toLocaleTimeString()}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
            >
              Usuń
            </button>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          Brak zadań. Dodaj pierwsze zadanie powyżej
        </p>
      )}
    </div>
  )
}