import React from 'react'
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays' 

const UpdateProduct = () =>{  
    const[id, setId] = React.useState("")
    const[name, setName] = React.useState("")
    const[quantity, setQuantity] = React.useState("")
    const[expiryDate, setExpiryDate] = React.useState(addDays(new Date(), 2))
    const[error, setError] = React.useState("")

    const updateProduct=() =>{
        
        if(name == "" || quantity == "" || expiryDate == ""){
            setError("Please Enter all the values...!!")
            setTimeout(()=>{
                setError("")
            },2000)
        }else{
            const product =JSON.stringify({
                name: name,
                quantity: quantity,
                expiryDate: expiryDate
            }) 

            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    }, 
                body: product
            };
            fetch(`http://localhost:8080/product/${id}`, requestOptions)
                .then(response => response.json())
                .then(data => this.setState({ postId: data.id }));

            // axios.put(`http://localhost:8080/product/${id}`,product).
            // then((data)=>{
            //     alert("Product updated successfully...")
            // }).catch((err)=>{
            //     console.log(err)
            // })
        }
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
            <div>Update Product</div>
            ID: <input id="Id" onChange={getProductDetails}/>
            <br/> 
            Name: <input id="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <br/> Quantity:
            <input id="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
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
            <button onClick={updateProduct}>Update Product</button>
            <div>
            {error && <label className='error'> {error}</label>}
            </div>
        </div>
        )
}

export default UpdateProduct;