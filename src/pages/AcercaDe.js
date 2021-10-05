import MotionHoc from "./MotionHoc";

const HomeComponent = () => {
    return <h1>Acerca de Metamecanica</h1>;
}

const AcercaDe = MotionHoc(HomeComponent);

export default AcercaDe;