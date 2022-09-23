import React from 'react'
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays' 

const DeleteProduct = () =>{  
    const[id, setId] = React.useState("")
    const[name, setName] = React.useState("")
    const[quantity, setQuantity] = React.useState("")
    const[expiryDate, setExpiryDate] = React.useState(addDays(new Date(), 2))
    const[error, setError] = React.useState("")

    const deleteProduct=() =>{

        const product =JSON.stringify({
            name: name,
            quantity: quantity,
               expiryDate: expiryDate
        }) 

            axios.delete(
                `http://localhost:8080/product/3`,
                {data:product}, {
                    'Content-Type': 'application/json',

                    }, 
              ).then((data)=>{
                alert("Product deleted successfully...")
            }).catch((err)=>{
                console.log(err)
            })
        
    }

    const getProductDetails = (e) =>{
        setId(e.target.value);
        axios.get(`http://localhost:8080/products/${e.target.value}`).
        then((res)=>{
            setName(res.data.data.name)
            console.log(new Date(res.data.data.expiryDate))
            setExpiryDate(new Date(res.data.data.expiryDate))
            setQuantity(res.data.data.quantity)
            setError("")
        }).catch((err)=>{
            console.log("Message: ",err.response.data.error)
            setError(err.response.data.error)
        })
    }
    return(
        <div>
            <div>Delete Product</div>
            ID: <input id="Id" onChange={getProductDetails}/>
            <br/> 
            Name: <input disabled={true} id="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <br/> Quantity:
            <input id="quantity" disabled={true} value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
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
            <button onClick={deleteProduct}>Delete Product</button>
            <div>
            {error && <label className='error'> {error}</label>}
            </div>
        </div>
    )

}

export default DeleteProduct;