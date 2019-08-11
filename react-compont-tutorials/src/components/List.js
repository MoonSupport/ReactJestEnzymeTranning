import React from "react"
import ListItem from "./ListItem"

function List(props) {
  const { items } = props
  if (!items.length) {
    // No Items on the list, render an empty message
    return <span className="empty-message">No items in list</span>
  }

  return (
    <ul className="list-items">
      {items.map(item => (
        <li key={item} className="item">
          {items.map(item => (
            <ListItem key={item} item={item} />
          ))}
        </li>
      ))}
    </ul>
  )
}

List.defaultProps = {
  items: []
}

export default List
