import { useState } from 'react'
import './App.css'

export default function App () {
  const [items, setItems] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new window.FormData(event.target)
    const product = data.get('product')

    if (product === '') return

    setItems(prev => [...prev, product])
    event.target.reset()
  }

  const handleDelete = (i) => {
    setItems(prev => {
      return prev.filter((item) => prev.indexOf(item) !== i)
    })
  }

  return (
    <div className='list-card'>
      <header>
        <h1>Lista del Supermercado</h1>
        <form onSubmit={handleSubmit}>
          <input name='product' type='text' placeholder='Nuevo artículo...' />
        </form>
      </header>

      <section>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <span>{item}</span>
              <button onClick={() => handleDelete(i)}>&times;</button>
            </li>)
          )}
        </ul>
      </section>
    </div>
  )
}
