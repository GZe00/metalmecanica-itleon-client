//axios
import axios from "axios";

// const createUser = async (dataRegister, setData) => {    
const createUser = async (dataRegister,) => {    
    try{
        const type = dataRegister.typeuser;
        delete dataRegister.type
        const postNewUser = await axios.post('http://localhost:4000/users', dataRegister);
        const userRolParameters = {
            user_id: postNewUser.data.data.id,
            type
        }
        const assignRolUserCurrent = await axios.post('http://localhost:4000/roles', userRolParameters);
        //Lo que debe de devolver
        console.log(postNewUser);
        console.log(assignRolUserCurrent);
        // return setData(postNewUser)
    }catch(error){
        console.log(error);
    }
} 

export default createUser;