import React, { useContext } from 'react'

import { DataContext } from '../App'

const ListItem = ({ text, type }) => {

  let context = useContext(DataContext)
  let filters = context.filters
  let setFilters = context.setFilters

  let radioChange = () => {
    if (type === 'category') {
      setFilters({ ...filters, category: text.trim().toLowerCase() })

    } else if (type === 'price') {

      switch (text.trim()) {
        case '$0 - 50':
          setFilters({ ...filters, price: [0, 50] })
          break;
        case '$50 - 100':
          setFilters({ ...filters, price: [50, 100] })
          break;
        case '$100 - 150':
          setFilters({ ...filters, price: [100, 150] })
          break;
        case 'Over $150':
          setFilters({ ...filters, price: [150, 1000] })
          break;
        default:
          setFilters({ ...filters, price: 'all' })
          break;
      }

    } else if (type === 'color') {
      setFilters({ ...filters, color: text.trim().toLowerCase() })

    }
  }

  return (
    <>
      <label className="radio-container">{text}
        <input type="radio" name={type} onChange={radioChange} />
        <span className="checkmark"></span>
      </label>

    </>
  )
}

export default ListItem