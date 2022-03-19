import React from 'react'

export const Alert = (props) => {
  let style={
    "color":"green"
  }
  return (
   props.alert &&  <div >
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.type}: {props.alert.message} </div>
    </div>
  )
}
