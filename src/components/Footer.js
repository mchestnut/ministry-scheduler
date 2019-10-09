import React from 'react'

const Footer = () => {
  const today = new Date()

  return (
    <footer className="c-footer">
      &copy; Copyright { today.getFullYear() } <a href="https://www.tricityministries.org" className="c-footer__link">Tri-City Baptist Church Ministries</a>
    </footer>
  )
}

export default Footer