import { useState } from "react";


export const useForm = (initialValue = {} ) => {

const [formSite, setFormSite] = useState(initialValue);


const handleInput = (e) => {
    const { name , value } = e.target
    setFormSite({
        ...formSite,
        [ name ] : value
    })
}

const onResetForm = ()=>{
    setFormSite(initialValue)
}
    
  return {
    formSite,
    handleInput,
    onResetForm

  }
  
}
