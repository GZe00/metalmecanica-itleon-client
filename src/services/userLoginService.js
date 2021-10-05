// axios
import axios from "axios";

const getUserById = async data => {
    try{
        const response = await axios.get(`http://localhost:3001/users/${data.email}`);
        // console.log(response.data[0])
        if(!(response.data[0] === undefined)){
            // Objeto con los datos del usuario encontrado
            // console.log(response.data);
            return response.data;
        }else{
            // console.log(`Correo o contraseña incorrecta, revisa nuevamente.`);
            return false
        }
    }catch(error){
        console.log(error);
    }
} 

export default getUserById;

