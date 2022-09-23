import React from 'react';
import axios from "axios";

const FetchData = () =>{
    const [data,setData]= React.useState(null)

    React.useEffect(()=>{
        axios.get("http://localhost:8080/products").then((res)=>{
            setData(res.data.data)
        })
    },[])

    return(
        <div>
           <div className='title'> Product List</div>
            <table border={2} align="center">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Expiry Date</th>
        </tr>

            {data && data.map(x=>{
                return(<tr><td>{x.id} </td>  <td> {x.name}</td> <td>{x.quantity}</td> <td>{x.expiryDate}</td> </tr>)
            })}
            
            </table>
        </div>
    )
}

export default FetchData;