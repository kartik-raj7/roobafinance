import React from 'react'
import DoughnutChart from './DoughnutChart'
const Traffictile = () => {
const data={
    labels:['Search','Direct'],
    datasets:[
        {
            label:'Poll',
            data:[50,50],
            backgroundColor:['#e17cfd','#4cd7f6'],
            borderColor:['#e17cfd','#4cd7f6'],
            cutout:30

        }]
}


  return (
    <div style={{width:'48%',backgroundColor:'#f6f6fb',borderRadius:'12px',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h4 style={{borderBottom:'2px solid grey',paddingBottom:'15px',padding:'12px',width:'80%',fontWeight:'normal'}}>Traffic Sources</h4>
        <div style={{display:'flex',justifyContent:'space-between',height:'100%',padding:'10px',width:'80%'}}>
        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
            <div style={{display:'flex',flexDirection:'row',backgroundColor:'#efeff8',justifyContent:'space-around',width:'90%',padding:'5px',borderRadius:'18px'}}> 
                <div>Source</div>
                <div >Traffic %</div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'90%',padding:'8px 12px',borderRadius:'18px'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{width:'15px',height:'15px',backgroundColor:'#4cd7f6',marginRight:'10px'}}></div>
                <div>Direct</div>
            </div>
            <div>50</div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'90%',padding:'8px 12px',borderRadius:'18px'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{width:'15px',height:'15px',backgroundColor:'#e17cfd',marginRight:'10px'}}></div>
                <div>Search</div>
            </div>
            <div>50</div>
            </div>

        </div>
        <div style={{display:'flex',height:'80%',padding:'10px 0px'}}>
        <DoughnutChart data={data}/>
        </div>
        </div>
    </div>
  )
}

export default Traffictile