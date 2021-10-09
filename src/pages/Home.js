import MotionHoc from "./MotionHoc";
import store from "../store";

const HomeComponent = () => {

    console.log(store.getState().loggin.data)

    return <h1>Home</h1>;
}

const Home = MotionHoc(HomeComponent);

export default Home;