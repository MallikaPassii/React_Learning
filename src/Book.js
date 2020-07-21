import React, {Component} from 'react'

export const Book = ({title="No Autor Provided",author="No Author provided",pages=0, freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>Written by: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free Bookmarks today: {freeBookmark ? 'yes!' : 'no!'}</p>
      </section>
    )
  }