import React from 'react'
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'  

const AddProduct = () =>{  
    const[name, setName] = React.useState("")
    const[quantity, setQuantity] = React.useState("")
    const[expiryDate, setExpiryDate] = React.useState(addDays(new Date(), 2))
    const[error, setError] = React.useState("")

    const addProduct=() =>{
        
        if(name == "" || quantity == "" || expiryDate == ""){
            setError("Please Enter all the values...!!")
            setTimeout(()=>{
                setError("")
            },2000)
        }else{
            const product ={
                name: name,
                quantity: parseInt(quantity),
                expiryDate: expiryDate,

            }

            axios({
                method: 'post',
                url: 'http://localhost:8080/addProduct',
                data: product,
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                }, 
              }).then((data)=>{
                alert("Product added successfully...")
                setExpiryDate(addDays(new Date(), 2));
                setName("");
                setQuantity("")
            }).catch((err)=>{
                setError(err)
                setExpiryDate(addDays(new Date(), 2));
                setName("");
                setQuantity("")
            })
        }
        
    }
    return(
        <div>
            <div className='title'>Add Product</div>
            Name: <input id="Name" onChange={(e)=> setName(e.target.value)}/>
            <br/> Quantity:
            <input id="quantity" onChange={(e)=> setQuantity(e.target.value)}/>
            <br/> 
            <div> Expiry Date:
            <DatePicker  
              selected={ expiryDate }  
              onChange={ (date) => setExpiryDate(date)}  
              name="startDate"  
              dateFormat="MM/dd/yyyy" 
              minDate={addDays(new Date(), 2)}  
              placeholderText="Expiry Date"
          />  
          </div>
            <br/>
            <br/>
            <br/>
            <button className='button' name='Expiry Date' title='Expiry Date' onClick={addProduct}>Add Product</button>
            <div>
            {error && <label className='error'> {error}</label>}
            </div>
        </div>
    )

}

export default AddProduct;