import React, { useState, useEffect } from 'react'

export default function TodoForm({ onAdd, onUpdate, editingTodo, onCancelEdit }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Okul')
  const [priority, setPriority] = useState('Orta')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text)
      setCategory(editingTodo.category || 'Okul')
      setPriority(editingTodo.priority || 'Orta')
      setDate(editingTodo.date || '')
    } else {
      setText('')
      setCategory('Okul')
      setPriority('Orta')
      setDate('')
    }
  }, [editingTodo])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    const newTodo = {
      text: text.trim(),
      category,
      priority,
      date
    }

    if (editingTodo) {
      onUpdate(editingTodo.id, newTodo)
    } else {
      onAdd(newTodo)
    }

    setText('')
    setCategory('Okul')
    setPriority('Orta')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={editingTodo ? 'Görevi güncelle...' : 'Yeni görev ekle...'}
        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm"
        >
          <option>Okul</option>
          <option>Proje</option>
          <option>Sınav</option>
          <option>Kişisel</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm"
        >
          <option>Düşük</option>
          <option>Orta</option>
          <option>Yüksek</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 px-4 py-2.5 rounded-xl bg-cyan-600 text-white text-sm font-semibold hover:bg-cyan-700 transition-colors"
        >
          {editingTodo ? 'Kaydet' : 'Ekle'}
        </button>

        {editingTodo && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="px-3 py-2.5 rounded-xl bg-slate-200 text-slate-700 text-sm hover:bg-slate-300 transition-colors"
          >
            İptal
          </button>
        )}
      </div>
    </form>
  )
}