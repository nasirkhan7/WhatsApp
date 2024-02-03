import React from 'react'
import Sidebar from './Sidebar'
import Message from './Message'


const Home = () => {
  return (
    <>
        <div className="d-flex">
        <Sidebar/>
        <Message/>
        </div>
    
    </>

  )
}

export default Home