import React from 'react';
import axios from "axios";

const GetProduct = (props) =>{
    const [data,setData]= React.useState(null)
    const[error,setError]= React.useState("")
    const[productId, setProductId]= React.useState("")


    React.useEffect(()=>{
        axios.get(`http://localhost:8080/products/${productId}`).then((res)=>{
            setData(res.data.data)
            setError("")
        }).catch((err)=>{
            setData(null)
            console.log("Message: ",err.response.data.error)
            setError(err.response.data.error)
        }
        )
        if(productId == ""){
            setError("")
        }
    },[productId])

    return(
        <div>
            <input id="ProductId" onChange={(e)=> setProductId(e.target.value)}/>

            <div className='title'>
            Product Record for Id {productId}
            <div>
            {data && 
            <table border={2} align="center">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Expiry Date</th>
        </tr>
           
                <tr><td>{data.id} </td>  <td> {data.name}</td> <td>{data.quantity}</td> <td>{data.expiryDate}</td> </tr>
            
          
            </table>}
            {error}
            </div>
        </div>
        </div>
    )
}

export default GetProduct;