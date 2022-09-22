import React from 'react'
import axios from "axios"

const UpdateUser = () =>{  
    const[id, setId] = React.useState("")
    const[name, setName] = React.useState("")
    const[email, setEmail] = React.useState("")
    const[phone, setphone] = React.useState("")
    const[userName, setuserName] = React.useState("")
    const[website, setwebsite] = React.useState("")

    const updateUser=() =>{
        
            const user ={
                ID:id,
                Name: name,
                UserName: userName,
                Email: email,
                Phone: phone,
                Website: website
            }

            axios({
                method: 'put',
                url: "http://localhost:8080/updateUser",
                data: user                
              }).then((data)=>{
                alert("User updated successfully...")
            }).catch((err)=>{
                console.log(err)
            })
  
    }
    return(
        <div>
            <div>Update User</div>
            ID: <input id="Id" onChange={(e)=> setId(e.target.value)}/>
            <br/> 
            Name: <input id="Name" onChange={(e)=> setName(e.target.value)}/>
            <br/> Email
            <input id="Email" onChange={(e)=> setEmail(e.target.value)}/>
            <br/> Phone
            <input id="userPhone" onChange={(e)=> setphone(e.target.value)}/>
            <br/>UserName
            <input id="userName" onChange={(e)=> setuserName(e.target.value)}/>
            <br/> Website
            <input id="website" onChange={(e)=> setwebsite(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={updateUser}>Update User</button>

        </div>
    )

}

export default UpdateUser;