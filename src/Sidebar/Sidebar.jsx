import React from 'react'
import ListItem from './ListItem'

import { TfiShoppingCartFull } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar__cart">
          <TfiShoppingCartFull size={40} />
        </div>

        <section className="sidebar__section">
          <h2>Category</h2>
          <ListItem text='All' type={'category'} />
          <ListItem text={'Sneakers'} type={'category'} />
          <ListItem text={'Flats'} type={'category'} />
          <ListItem text={'Sandals'} type={'category'} />
          <ListItem text={'Heels'} type={'category'} />
        </section>

        <section className="sidebar__section">

          <h2>Price</h2>
          <ListItem text={'All'} type={'price'} />
          <ListItem text={'$0 - 50'} type={'price'} />
          <ListItem text={'$50 - 100'} type={'price'} />
          <ListItem text={'$100 - 150'} type={'price'} />
          <ListItem text={'Over $150'} type={'price'} />

        </section>

        <section className="sidebar__section">

          <h2>Colors</h2>
          <ListItem text={'All'} type={'color'} />
          <ListItem text={'Black'} type={'color'} />
          <ListItem text={'Blue'} type={'color'} />
          <ListItem text={'Red'} type={'color'} />
          <ListItem text={'Green'} type={'color'} />
          <ListItem text={'White'} type={'color'} />

        </section>


      </section>
    </>
  )
}

export default Sidebar