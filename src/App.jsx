import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Popup from './components/Popup'

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <div>
      <Navbar setShowPopup={setShowPopup}/>
      <Hero setShowPopup={setShowPopup} />
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  )
}

export default App