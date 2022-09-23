import React,{useState, useEffect} from 'react'
import axios from "axios"

const FormData = () =>{
    const[name, setName]= useState("")
    const[designation, setDesignation]=useState("")

    const handleForm = (e) =>{
        e.preventDefault();
        if(name != "" || designation != ""){
            console.log("inside handle...")
            const person={name:name,designation:designation}
            axios.post("http://localhost:8081/home",JSON.stringify(person)).then((res)=>{
                alert("Success response", res)
            })
        }
    }

    return(
        <div>
            <form onSubmit={handleForm}>
                <label> Name: </label><input value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
                <label> Designation: </label><input value={designation} name="designation" onChange={(e)=>setDesignation(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}

export default FormData;