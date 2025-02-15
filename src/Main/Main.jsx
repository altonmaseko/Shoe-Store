import React from 'react'
import Header from '../Header/Header'
import MainContentHeader from './MainContentHeader'
import MainContentMain from './MainContentMain'

const Main = () => {
  return (
    <>
      <section className='main'>
        <Header />
        <section className='main-content'>
          <MainContentHeader />
          <MainContentMain />
        </section>
      </section>

    </>

  )
}

export default Main