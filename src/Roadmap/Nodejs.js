import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
// import Frame from 'react-frame-component'

const Nodejs = () => {
  const styles = {
    container: {
      width: '100%',
      height: '100%',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      border: '3px solid #2C2858'
    }
  }

 


  return (
    <div style={styles.container}>
      {/* <Frame> */}
      <iframe
        src='https://whimsical.com/embed/DB8PGvrF8dR5AvcBv3FC76@7YNFXnKbZAAED2MNDBm1j'
        width='100%'
        height='100%'
        allowFullScreen
      />
      {/* </Frame> */}
    </div>
  )
}

export default Nodejs
