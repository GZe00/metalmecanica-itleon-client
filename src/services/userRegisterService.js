//axios
import axios from "axios";

const createUser = async (dataRegister, setData) => {
    try{
        const response = await axios.post('http://localhost:3001/users', dataRegister);
        console.log(response);
        return setData(response)
    }catch(error){
        console.log(error);
    }
} 

export default createUser;