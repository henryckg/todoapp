import { useState } from 'react'
import './App.css'

export default function App () {
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new window.FormData(e.target)
    const item = data.get('item')

    if (item === '') return

    setItems((prev) => (
      [
        ...prev,
        item
      ]
    ))

    e.target.reset()
  }

  const handleDelete = (i) => {
    const filteredList = items.filter((item, index) => index !== i)
    setItems(filteredList)
  }

  return (
    <div className='list-card'>
      <header>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='item'
            placeholder='Introduce un producto...'
          />
        </form>
      </header>
      <main>
        <section>
          <ul>
            {
              items.map((item, i) => (
                <li key={i}>
                  <span>
                    {item}
                  </span>
                  <button
                    className='delete-btn'
                    onClick={() => handleDelete(i)}
                  >
                    &times;
                  </button>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    </div>
  )
}
