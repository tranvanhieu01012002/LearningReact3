import React, { useState } from 'react'
import CheckBoxForm from './CheckBoxForm'
import getDrinkData from './Data/data'

export default function FormSelectDrink() {
    const [state,setState] = useState([]);
    const [price,setPrice] = useState(0);
    const [total,setTotal] = useState(0);
    const handerCheck = (id)=>{
        setState(prev => {
            const isChecked = state.includes(id);
            if(isChecked){
                setTotal(data.filter(item=> item.id ===id).map(item=>total-item.price))
                return state.filter(item => item !== id)
            }
            else{
                setTotal(data.filter(item=> item.id ===id).map(item=>parseInt(total)+parseInt(item.price)))
                return [...prev,id]
              
            }
        })
      
       
    }
    const handleOnChange = event => {
        setPrice(event.target.value);
      };
    const sHandle = (e)=>{
        e.preventDefault()

       parseInt(price)>=total
       ?
    //    console.log(state.map())
      
       alert("chúc mừng bạn vừa mua được "+ state.map(item =>data.filter(ele=>ele.id===parseInt(item)).map(item1=><p>{item1.name}</p>)))
       :
       alert("chúc mừng bạn vừa mua trượt sản phẩm")
    }
    let data = getDrinkData();
    return (
        <form >

            <input value={price.price} onChange={handleOnChange} type="number" />
            {data.map(ele=>(<CheckBoxForm price={ele.price} check={state} change={()=>handerCheck(ele.id)} name={ele.name} id ={ele.id} ></CheckBoxForm>))}
           
            <button onClick={sHandle}>Hôm nay là thứ mấy vậy anh</button>
            <h1>Tổng tiền cần thanh toán: {total} vnđ</h1>
        </form>
        )
}
