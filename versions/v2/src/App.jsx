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
        {
          item,
          completed: false
        }
      ]
    ))

    e.target.reset()
  }

  const handleDelete = (i) => {
    const filteredList = items.filter((item, index) => index !== i)
    setItems(filteredList)
  }

  const handleCheckbox = (i) => {
    const updatedItems = items.map((item, index) =>
      index === i ? { ...item, completed: !item.completed } : item
    )

    setItems(updatedItems)
  }

  return (
    <div className='list-card'>
      <header>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            id='item-input'
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
                  <input type='checkbox' className='item-check' onChange={() => handleCheckbox(i)} />
                  <span
                    className='item-text'
                    style={{
                      textDecoration: item.completed ? 'line-through' : 'none'
                    }}
                  >
                    {item.item}
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
