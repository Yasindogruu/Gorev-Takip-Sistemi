import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onDelete, onEdit, onToggle }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-14">
        <p className="text-3xl mb-3">🌑</p>
        <p className="text-gray-600 text-sm">Henüz görev yok.</p>
        <p className="text-gray-700 text-xs mt-1">Yukarıdan ilk görevini ekle.</p>
      </div>
    )
  }

  const active = todos.filter(t => !t.completed)
  const done = todos.filter(t => t.completed)

  return (
    <div className="flex flex-col gap-1.5">
      {active.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
      ))}

      {done.length > 0 && (
        <>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-xs text-gray-700">Tamamlananlar ({done.length})</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>
          {done.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
          ))}
        </>
      )}
    </div>
  )
}
