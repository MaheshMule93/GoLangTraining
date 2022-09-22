import React from 'react';
import axios from "axios";

const GetUser = (props) =>{
    const [data,setData]= React.useState(null)
    const[error,setError]= React.useState("")
    const[userId, setUserId]= React.useState("")


    React.useEffect(()=>{
        axios.get(`http://localhost:8080/user/${userId}`).then((data)=>{
            setData(data.data)
            setError("")
        }).catch((err)=>{
            setData(null)
            setError(err.response.data.message)
        }
        )
    },[userId])

    return(
        <div>
            <input id="userId" onChange={(e)=> setUserId(e.target.value)}/>

            <div>
            User Record for Id {userId}
            <div>
            {data && 
                <div>{data.id}  {data.name} {data.email} {data.userName} {data.phone} {data.website}</div>
            }
            {error}
            </div>
        </div>
        </div>
    )
}

export default GetUser;