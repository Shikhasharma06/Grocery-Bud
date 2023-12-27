import React from 'react'
import './Style/inputcomponent.css'
function InputComponent(prop) {
    const submitForm = (e) => prop.getDataInput(e);
    

  return (
        <>
        <form action="" className='form' onSubmit={submitForm}>
            <input type="text" name="" id="input" />
            <input type="submit" id='btn' value="Add Item" />
        </form>
        
        </>
  )
}

export default InputComponent
