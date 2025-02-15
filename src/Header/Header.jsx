import React, { useContext, useEffect, useState } from 'react'

import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonUp } from "react-icons/bs";

import { DataContext } from '../App';

const Header = () => {

  let [searchValue, setSearchValue] = useState('')

  let context = useContext(DataContext)
  let filters = context.filters
  let setFilters = context.setFilters

  useEffect(() => {
    setFilters({ ...filters, startsWith: searchValue })
  }, [searchValue])

  return (
    <>
      <header className="header">
        <input type="text" className='header__search'
          value={searchValue} placeholder='Enter your search shoes'
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
        <div className='header__icons-container'>
          <CiHeart size={30} />
          <IoCartOutline size={30} />
          <BsPersonUp size={30} />
        </div>
      </header>
    </>
  )
}

export default Header