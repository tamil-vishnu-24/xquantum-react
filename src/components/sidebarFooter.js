import React from 'react'
import "../App.css"
function sidebarFooter() {
    let copy = String.fromCodePoint(0x00A9);
  return (
    <>
    <div className = "footer">
    <div className =" sidebarFooter">
        <h3>Connect with us</h3>
        {/* <img src ="" url = "https://twitter.com"/>
        <img src = "" url = "hhtps://telegram.com"/> */}
        
</div>
<div className = "sidebarBottom">
<h3 id = "copy1">{copy} Solminter 2021</h3>
<h3 id = "copy2">Powered by<br/> Solminter</h3>
</div>
</div>
</>
        

    
  )
}

export default sidebarFooter