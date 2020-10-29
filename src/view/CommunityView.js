import React, {useState} from 'react'
import Axios from 'axios'

import SearchBar from '../components/Navigation/Header/SearchBar/SearchBar'
import Card from '../components/UIElements/Card/Card'
import Button from '../components/FormElements/Button/Button'

const CommunityView = () => {

  return (
    <div id="view">
      <Card className='view__card'>
        <h1>Community</h1>
        <br /><br />
        <p>ComunnityView</p>
        <br />
      </Card>
    </div>
  )
}

export default CommunityView;