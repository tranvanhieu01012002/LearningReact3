import React from 'react'

export default function CheckBoxForm(props) {
  return (
    <>
        <div className="form-group">
            <input checked={props.check.includes(props.id)}
            onChange={props.change} 
            type="checkbox"
            id={props.id} />
            <label  htmlFor={props.id}>{props.name}......{props.price}</label>
        </div>
    </>
  )
}
