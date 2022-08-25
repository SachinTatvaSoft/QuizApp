import React, { useState } from "react"
import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";


type userDetailsProps = {
  userDetails: { name: string; email: string; gender: string; language: string;}
  setUserDetails: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    gender: string;
    language: string;
}>>
}

function UserDetails (props:userDetailsProps) {
  const {userDetails} = props || {}


  const [errors,setErrors]=useState({name:false})

  const history = useNavigate()

    const handleSave = () =>  {
      if(!errors?.name){
        history('question/1')
      }
    }
  
    const languages =  [{
        value:"English",label:"English"
    },{
        value:"Spanish",label:"Spanish"
    },{
        value:"French",label:"French"
    }]

    const validation  = () =>{
      if(userDetails?.name?.trim() === ""){
        setErrors({...errors,name:true})
      }
      else{
        setErrors({name:false})
        handleSave()
      }
    }
    
    return <div>
        <h1> User Details </h1>
        <div className="form-container">
        <TextField
          error={errors?.name}
          variant="outlined"
          label="Enter Your Name"
          className="m-1"
          value={userDetails?.name}
          onChange={(e)=>{props?.setUserDetails({...userDetails,name:e.target?.value})}}
          helperText={errors?.name  && "Please Enter Your Name"}
        />

        <TextField
          variant="outlined"
          label="Enter Your Email"
          className="m-1"
          value={userDetails?.email}
          onChange={(e)=>{props?.setUserDetails({...userDetails,email:e.target?.value})}}
        />


        <FormControl 
          className="m-1"
        >
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="male"
             name="radio-buttons-group"
             row
             value={userDetails?.gender}
             onChange={(e)=>{props?.setUserDetails({...userDetails,gender:e.target?.value})}}
            >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
        </FormControl>

        <TextField
          select
          variant="outlined"
          className="m-1"
          label="Select Language"
          value={userDetails?.language}
          onChange={(e)=>{props?.setUserDetails({...userDetails,language:e.target?.value})}}
        >
          {languages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" onClick={validation}>Save</Button>
        </div>
    </div>
}

export default UserDetails