import React, { useContext } from 'react'
import { DataContext } from '../App'


const MainContentHeader = () => {

  let context = useContext(DataContext)
  let setFilters = context.setFilters
  let filters = context.filters


  const brandClick = (e, brand) => {
    document.querySelectorAll('.brand-cube').forEach(el => {
      el.classList.remove('active-brand')
    })

    e.currentTarget.classList.add('active-brand')
    setFilters({ ...filters, company: brand })
  }

  return (
    <>
      <header>
        <h1>Recommended</h1>
        <div className="brand-cubes">
          <button className="brand-cube" onClick={(e) => brandClick(e, 'all')}>All Producs</button>
          <button className="brand-cube" onClick={(e) => brandClick(e, 'nike')}>Nike</button>
          <button className="brand-cube" onClick={(e) => brandClick(e, 'adidas')}>Adidas</button>
          <button className="brand-cube" onClick={(e) => brandClick(e, 'puma')}>Puma</button>
          <button className="brand-cube" onClick={(e) => brandClick(e, 'vans')}>Vans</button>
        </div>
      </header>
    </>
  )
}

export default MainContentHeader