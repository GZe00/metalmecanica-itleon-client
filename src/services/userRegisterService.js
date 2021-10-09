//axios
import axios from "axios";

// const createUser = async (dataRegister, setData) => {    
const createUser = async (dataRegister,) => {    
    try{
        console.log(dataRegister)
        delete dataRegister.type
        const response = await axios.post('http://localhost:4000/users', dataRegister);
        console.log(response);
        // return setData(response)
    }catch(error){
        console.log(error);
    }
} 

export default createUser;