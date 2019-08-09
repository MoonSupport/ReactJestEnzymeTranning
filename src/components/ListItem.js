import React from "react"

function ListItem(props) {
  const { item } = props
  return <li className="item">{item}</li>
}

export default ListItem
