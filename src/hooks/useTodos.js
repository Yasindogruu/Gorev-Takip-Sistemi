import { useState, useEffect } from 'react'

const STORAGE_KEY = 'study_tasks'

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (task) => {
    setTodos(prev => [
      {
        id: crypto.randomUUID(),
        text: task.text,
        category: task.category,
        priority: task.priority,
        date: task.date,
        completed: false,
        createdAt: new Date().toISOString()
      },
      ...prev
    ])
  }

  const updateTodo = (id, updatedTask) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id
          ? {
              ...t,
              text: updatedTask.text,
              category: updatedTask.category,
              priority: updatedTask.priority,
              date: updatedTask.date
            }
          : t
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return { todos, addTodo, updateTodo, deleteTodo, toggleTodo }
}