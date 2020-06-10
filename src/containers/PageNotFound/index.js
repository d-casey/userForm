import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <p data-testid='not-found-text'>That page was not found. Why not head back to the <a href='/'>Home</a></p>
    </div>
  )
}

export default PageNotFound
