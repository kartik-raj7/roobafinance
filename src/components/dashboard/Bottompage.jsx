import React from 'react'
import Traffictile from './Traffictile'

const Bottompage = () => {
  return (
    <div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'95%',padding:'20px 30px 0px 20px'}}>
       <Traffictile/>
       <Traffictile/>
      </div>
    </div>
  )
}

export default Bottompage