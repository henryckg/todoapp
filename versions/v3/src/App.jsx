import { useState } from 'react'
import './App.css'

function App () {
  const [products, setProducts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new window.FormData(e.target)
    const product = formData.get('product')

    if (product === '') return

    setProducts((prev) => (
      [
        ...prev,
        {
          product,
          completed: false
        }
      ]
    ))

    e.target.reset()
  }

  const handleDelete = (i) => {
    const filteredItems = products.filter((item, index) => index !== i)
    setProducts(filteredItems)
  }

  const handleCheck = (i) => {
    const updatedList = products.map((item, index) => index === i ? { ...item, completed: !item.completed } : item)
    setProducts(updatedList)
  }

  return (
    <div className='card-list'>
      <header>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' name='product' placeholder='Introduce un nuevo producto...' />
        </form>
      </header>

      <main>
        <ul className='product-list'>
          {
            products.map((item, i) => (
              <li key={i}>
                <input type='checkbox' onChange={() => handleCheck(i)} />
                <span
                  style={{
                    textDecoration: item.completed ? 'line-through' : 'none'
                  }}
                >
                  {item.product}
                </span>
                <button onClick={() => handleDelete(i)}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-x'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 6l-12 12' /><path d='M6 6l12 12' /></svg>
                </button>
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default App
