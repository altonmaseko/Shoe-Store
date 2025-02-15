import React, { createContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import './css/style.css'
import Main from './Main/Main'

import origData from './db/data.js';

const DataContext = createContext()


const App = () => {

  let [data, setData] = useState(origData)
  let [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    color: 'all',
    company: 'all',
    startsWith: ''
  })

  useEffect(() => { // filter data using new filters
    console.log("USE EFFECT")
    let filteredData = origData.filter(({ category, color, newPrice, company, title }) => {

      return (
        (filters.color === 'all' || filters.color === color)
        &&
        (filters.category === 'all' || filters.category === category)
        &&
        (filters.company === 'all' || filters.company === company.toLowerCase())
        &&
        (filters.price === 'all' ||
          (newPrice >= filters.price[0] && newPrice < filters.price[1])
        )
        &&
        (filters.startsWith === '' || title.toLowerCase().includes(filters.startsWith.toLowerCase()))
      )
    })

    setData(filteredData)

  }, [filters])

  return (
    <>
      <DataContext.Provider value={{ data, setFilters, filters }}>
        <Sidebar />
        <Main />
      </DataContext.Provider>
    </>

  )
}

export { App, DataContext }