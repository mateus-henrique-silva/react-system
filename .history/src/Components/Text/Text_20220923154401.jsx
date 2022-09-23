import React from 'react'

const Text = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <div>
        <p>{props.text}</p>
        <p>{}</p>
      </div>
    </div>
  )
}

export default Text
