import React from 'react'

export const Quote = ( {quote, author} ) => {
  return (
    <div>
    <blockquote> {quote} </blockquote>
    <cite> {author} </cite>
  </div>
  )
}
