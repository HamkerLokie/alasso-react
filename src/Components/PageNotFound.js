import React from 'react'

const PageNotFound = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <img style={{width:'20%'}} src="/images/pnf.png" alt="" />
      <div style={{fontSize:'2em', fontFamily:'monospace', background:'#2C2858', color:'white', padding:'.6em .9em'}}>PAGE NOT FOUND</div>
    </div>
  )
}

export default PageNotFound
