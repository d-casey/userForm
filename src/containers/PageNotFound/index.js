import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <p>That page was not found. Why not head back to the <Link to="/">Home
      </Link></p>
    </div>
  )
}

export default PageNotFound
