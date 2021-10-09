// axios
import axios from "axios";

const getUserById = async dataLogin => {
    try{
        const response = await axios.get(`http://localhost:4000/users/${dataLogin.email}`);
        if((response.data.data[0] !== undefined) && (dataLogin.password === response.data.data[0].password)){
            // Objeto con los datos del usuario encontrado
            console.log(response.data);
            return response.data;
        }else{
            console.log(`Correo o contraseña incorrecta, revisa nuevamente.`);
            return false
        }
    }catch(error){
        console.log(error);
    }
} 

export default getUserById;

