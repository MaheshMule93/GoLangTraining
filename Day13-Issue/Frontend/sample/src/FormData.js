import React,{useState, useEffect} from 'react'
import axios from "axios"

const FormData = () =>{
    const[name, setName]= useState("")
    const[designation, setDesignation]=useState("")


    return(
        <div>
            <form action="http://localhost:8081/home" method="post" enctype="multipart/form-data">
                <label> Name: </label><input value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
                <label> Designation: </label><input value={designation} name="designation" onChange={(e)=>setDesignation(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}

export default FormData;