import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton  } from '@mui/base/MenuButton';
import { MenuItem  } from '@mui/base/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function SideBar() {
  return (
    <div id='sidebar'>
       <Dropdown style={{  left: 0, top: 0, padding: "0%", colors: "white", height:"12%", width:"30%" }}>
            <h3 > <PersonIcon/> James ...  <ArrowDropDownIcon/> </h3>
        </Dropdown>
        <hr/>

        <h6 style={{textAlign:"left", paddingLeft:"3%"}}>Dashboard</h6>

        <h3> <MenuBookIcon/> All Orders</h3>
    </div>
  )
}

export default SideBar


