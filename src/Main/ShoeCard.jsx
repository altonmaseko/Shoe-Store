import React, { useId } from 'react'

const ShoeCard = ({ title, img, prevPrice, newPrice, category, color, price }) => {

  let id = useId()

  return (
    <div key={id} className='shoe-card'>
      <div className='shoe-card__img'>
        <img src={img} alt='shoe-picture' />
      </div>
      <div className='shoe-card__info'>
        <h3>{title}</h3>
        <div className='review'>5 stars</div>
        <p className='price'><del>{prevPrice}</del> {newPrice}</p>
        <p style={{ fontSize: '0.8rem', fontFamily: 'cursive' }}> {category}, {color}</p>
      </div>
    </div>
  )
}

export default ShoeCard




// 'https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'