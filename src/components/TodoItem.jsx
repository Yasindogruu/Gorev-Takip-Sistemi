import React from 'react'

export default function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
      <input
  type="checkbox"
  checked={todo.completed}
  onChange={() => onToggle(todo.id)}
  className="w-4 h-4"
/>

      <div className="flex-1">
        <p className={todo.completed ? 'line-through text-slate-400' : 'text-slate-800 font-medium'}>
          {todo.text}
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Kategori: {todo.category} | Öncelik: {todo.priority}
        </p>
      </div>

      <button
        onClick={() => onEdit(todo)}
        className="px-2 py-1 text-xs bg-gray-700 text-white rounded"
      >
        Düzenle
      </button>

      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 text-xs bg-red-700 text-white rounded"
      >
        Sil
      </button>
    </div>
  )
}