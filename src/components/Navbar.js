import React from "react"
import { useState } from "react"
import "styles/Navbar.css"

function Navbar(props) {
  return (
    <>
      <div className="nav-ctn">
        {props.children}
      </div>
    </>
  )
}

function Logo(props) {
  return (
      <a href={props.href}>
        <img className="nav-logo" alt={props.alt} src={props.src} />
      </a>
  )
}

function List(props) {
  const [selected, setSelected] = useState(1); 
  return (
    <div className="nav-list">
      {props.children}
    </div>
  )
}

function ListLink(props) {
  return (
      <a href="/" className="nav-list-link">
        {props.name}
      </a>
  )
}

function ListDropdown(props) {
  return (
    <div className="nav-list-dropdown">
      {props.name}
    </div>
  )
}

Navbar.ListDropdown = ListDropdown
Navbar.List = List
Navbar.ListLink = ListLink
Navbar.Logo = Logo
export default Navbar