import React, { Fragment } from 'react'
import ListCategories from './ListCategories'
import SearchButton from './SearchButton'

const Index = () => {
  return (
    <Fragment>
      <SearchButton />
      <ListCategories />
    </Fragment>
  )
}

export default Index