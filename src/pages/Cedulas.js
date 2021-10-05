import MotionHoc from "./MotionHoc";

const HomeComponent = () => {
    return (
        <>
        <h1>Aqui van las cedulas </h1>
        </>
    );
}

const Cedulas = MotionHoc(HomeComponent);

export default Cedulas;