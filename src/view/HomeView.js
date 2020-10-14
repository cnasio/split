import React, {useEffect, useState} from 'react'

import '../shared/design/HomeView.css'

export const HomeView = () => {

  const [random, setRandom] = useState()
  const [userEmail, setUserEmail] = useState()

  useEffect(() => {
    const userName = localStorage.getItem('email')
    userName && setUserEmail(userName);
    return () => {
    }
  }, [random])

  return (
    <div id="home_view">
      <p>HomeView</p><br />
      <p>{userEmail}</p>
      <p>{random}</p>
      
      <button onClick={() => setRandom('å@ä.ö')}>Update the value of random state</button>
    </div>
  )
}
