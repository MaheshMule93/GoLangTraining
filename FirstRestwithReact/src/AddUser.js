import React from 'react'
import axios from "axios"

const AddUser = () =>{  
    const[name, setName] = React.useState("")
    const[email, setEmail] = React.useState("")
    const[phone, setphone] = React.useState("")
    const[userName, setuserName] = React.useState("")
    const[website, setwebsite] = React.useState("")

    const addUser=() =>{
        axios.get("http://localhost:8080/").then((data)=>{
            const user =JSON.stringify({
                ID:(data.data.length+1).toString(),
                Name: name,
                UserName: userName,
                Email: email,
                Phone: phone,
                Website: website
            })

            axios({
                method: 'post',
                url: 'http://localhost:8080/addUser',
                data: user,
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                }, 
              }).then((data)=>{
                alert("User added successfully...")
            }).catch((err)=>{
                console.log(err)
            })
        })
    }
    return(
        <div>
            <div>Add User</div>
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
            <button onClick={addUser}>Add User</button>

        </div>
    )

}

export default AddUser;