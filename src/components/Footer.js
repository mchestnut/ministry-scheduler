import React from 'react'

const Footer = () => {
  const today = new Date()

  return (
    <footer>
      &copy; Copyright { today.getFullYear() } <a href="https://www.tricityministries.org">Tri-City Baptist Church Ministries</a>
    </footer>
  )
}

export default Footer