// axios
import axios from "axios";

const changeStatus = async id => {
    try{
        // console.log(id)
        const response = await axios.put(`http://localhost:4000/users/${id}`, {"first_time": "true"});
        return response;
    }catch(error){
        console.log(error);
    }
} 

export default changeStatus;

