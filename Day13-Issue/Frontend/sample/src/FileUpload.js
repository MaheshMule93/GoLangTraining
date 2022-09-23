import React,{useState, useEffect} from 'react'

const FileUpload = () =>{
    const[name, setName]= useState("")
    const[email, setEmail]=useState("")
    const[file, setFile]=useState(null)


    return(
        <div>
           <h1>Bind file with fields</h1>
            <form action="http://localhost:8080/upload" method="post" enctype="multipart/form-data">
                Name: <input value={name} type="text" name="name" onChange={(e)=> setName(e.target.value)}/><br/>
                Email: <input value={email} type="email" name="email" onChange={(e)=> setEmail(e.target.value)}/><br/>
                File: <input type="file" value={file} name="file" onChange={(e)=> setFile(e.target.value)}/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default FileUpload;