import React, { useContext, useId } from 'react'
import ShoeCard from './ShoeCard'

import { DataContext } from '../App'

const MainContentMain = () => {

  const data = useContext(DataContext).data



  return (
    <section className='main-content-main'>
      <div className="content">

        {data.map(({ img, prevPrice, newPrice, title, company, category, color }, index) =>
          <ShoeCard key={index}
            img={img}
            prevPrice={prevPrice}
            newPrice={newPrice}
            title={title}
            category={category}
            color={color}
            price={newPrice}
          />
        )}

      </div>




    </section>
  )
}

export default MainContentMain