import React from 'react';
import axios from "axios";

const FetchData = () =>{
    const [data,setData]= React.useState(null)

    React.useEffect(()=>{
        axios.get("http://localhost:8080/").then((data)=>{
            setData(data.data)
        })
    },[])

    return(
        <div>
            Display Data
            <table border={2}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>UserName</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>

            {data && data.map(x=>{
                return(<tr><td>{x.id} </td>  <td> {x.name}</td> <td>{x.email}</td> <td>{x.userName}</td> <td>{x.phone}</td> <td>{x.website}</td></tr>)
            })}
            
            </table>
        </div>
    )
}

export default FetchData;