import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <main className="o-layout__main">
      <div className="o-layout__wrapper">
        { children }
      </div>
    </main>
  )
}

export default Wrapper