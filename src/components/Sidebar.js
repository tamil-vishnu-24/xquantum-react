import React from 'react'
import "../App.css"
import SidebarData from "./sidebarData"
import SidebarHeader from "./sidebarHeader"
import SidebarFooter from "./sidebarFooter"


const Sidebar = () => {
  const wallet = () => {
    <div>
     
    </div>
  }
  return (
    
    <div className = "Sidebar">
    <SidebarHeader/>
    
    <ul className = "sidebarList">
    {SidebarData.map((val , key)=>{
        return (
            <li className = "row" key = {key}
            onClick = {() => {window.location.pathname = val.link}} component = {wallet}>
            {" "}
            <div id = "icon">
                {val.icon}
            </div>{" "}
            <div id ="title">
                {val.title}
            </div>
            </li>
        )
    })}
    
    <SidebarFooter />
    
    </ul>
    </div>

  
  )
}

export default Sidebar