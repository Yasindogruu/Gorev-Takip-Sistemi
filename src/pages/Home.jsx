import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { useTodos } from '../hooks/useTodos'

export default function Home() {
  const { todos, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodos()
  const [editingTodo, setEditingTodo] = useState(null)

  const completed = todos.filter(t => t.completed).length
  const progress = todos.length > 0 ? Math.round((completed / todos.length) * 100) : 0

  return (
    <div className="min-h-screen bg-blue-50 flex items-start justify-center pt-10 px-4 pb-12">
      <div className="w-full max-w-2xl">

        <div className="mb-6 bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📚</span>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Ders Çalışma Takip Sistemi
              </h1>
              <p className="text-slate-500 text-sm">
                Günlük görevlerini ekle ve takip et
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-slate-600 mb-2">
              {completed} / {todos.length} görev tamamlandı
            </p>

            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-600 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-xs text-slate-500 mt-1">
              %{progress} tamamlandı
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm">
          <TodoForm
            onAdd={addTodo}
            onUpdate={updateTodo}
            editingTodo={editingTodo}
            onCancelEdit={() => setEditingTodo(null)}
          />

          <TodoList
            todos={todos}
            onDelete={deleteTodo}
            onEdit={setEditingTodo}
            onToggle={toggleTodo}
          />
        </div>

        <p className="text-center text-slate-500 text-xs mt-5">
          Çalışma planları LocalStorage ile tarayıcıda saklanır.
        </p>
      </div>
    </div>
  )
}