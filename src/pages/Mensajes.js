import MotionHoc from "./MotionHoc";

const HomeComponent = () => {
    return <h1>Mensajes</h1>;
}

const Mensajes = MotionHoc(HomeComponent);

export default Mensajes;