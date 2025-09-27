import './App.css'

export default function App () {
  return (
    <div className='list-card'>
      <header>
        <h1>To Do List</h1>
        <form>
          <input
            type='text'
            name='item'
            placeholder='Introduce producto...'
          />
        </form>
      </header>
      <main>
        <section>
          <ul>
            <li>
              <span>
                Texto
              </span>
              <button>
                &times;
              </button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
