//React
import { useState, useEffect } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router";
import { Provider } from "react-redux";

//Loggin, Recovery & Register
import Main from "./pages/Main";
import Recovery from "./pages/Recovery";
import Register from "./pages/Register";

//Primera vez, docente
import InitialSettings from "./pages/InitialSettings";

//Lectura
import AcercaDe from "./pages/AcercaDe";

//Contenido
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Perfil from "./pages/Perfil";
import Mensajes from "./pages/Mensajes";
import Analisis from "./pages/Analisis";
import Administracion from "./pages/Administracion";
import Guardado from "./pages/Guardado";

import Configuracion from "./pages/Configuracion";
import Cedulas from "./pages/Cedulas";
import Avisos from "./pages/Avisos";

import Cedula0 from "./pages/Cedula0/Cedula0";

//Servicios
import userChangeFirstTimeService from "./services/userChangeFirstTimeService";

//Librerías
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

//Datos del usuario
import store from "./store";


const Pages = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: auto; */
`;

const PageLoggin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  overflow: auto;
`;

const App = () => {
  const location = useLocation();

  //Usuario logeado
  const [loggin, setLoggin] = useState(false);

  store.subscribe(() => {
    let dataUser = {
      id: store.getState().loggin.data.id,
      firstTime: store.getState().loggin.data.first_time,
      email: store.getState().loggin.data.email,
    };
    // true => docente
    // false => estudiante

    // Aquí mismo se lleva a cabo la comprobación del primer inicio de sesión EN DOCENTES
    // console.log(dataUser)
    if (store.getState().loggin.type) {
      if (!dataUser.firstTime) {
        //Pasar a true
        userChangeFirstTimeService(dataUser.id);
        setfirstTimeTeach(true);
        setLoggin("DOCENTE");
      } else {
        setfirstTimeTeach(false);
        setLoggin("DOCENTE");
      }
    } else {
      setLoggin("ESTUDIANTE");
      setfirstTimeTeach("");
    }

    if(store.getState().initialSetting){
      setfirstTimeTeach(false)
    }
    console.log(dataUser)
  });

  const handleLogOut = () => setLoggin(false);

  //Tipo de docente
  const [firstTimeTeach, setfirstTimeTeach] = useState(undefined);


  if (loggin) {
    //Funcion donde firstTimeTeachService() revisa en la DB que tipo de docente es y retorna un valor para firstTimeTeach
    // 1. Jefe de departamento      ||  jefe-de-departamento
    // 2. Jefatura de docencia      ||  jefatura-docencia
    // 3. Jefatura de vinculacion   ||  jefatura-vinculacion
    // 4. Jefatura de investigacion ||  jefatura-investigacion
    // 5. Jefatura de laboratorio   ||  jefatura-laboratorio
    // 6. Docente                   ||  docente

    // Existirán páginas exclusivas para docentes con jerarquía alta

    if (loggin == "ESTUDIANTE") {
      // Seccion de estudiantes

      return (
        <div>
          <Redirect to="/home" />
          <Provider store={store}>
            <Sidebar _logOut={handleLogOut} type={loggin} />
            <Pages>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/home" component={Home} />
                  <Route path="/menu" component={Menu} />
                  <Route path="/perfil" component={Perfil} />
                  <Route path="/mensajes" component={Mensajes} />
                  <Route path="/analisis" component={Analisis} />
                  <Route path="/adminsitracion" component={Administracion} />
                  <Route path="/guardado" component={Guardado} />
                  {/* <Route
                    path="/project-Metamecanica"
                    component={AboutPaper} /> */}
                </Switch>
              </AnimatePresence>
            </Pages>
          </Provider>
        </div>
      );
    } else if (loggin === "DOCENTE") {
      // Seccion de docentes
      {
        if (firstTimeTeach === undefined) {
          return null;
        } else if (firstTimeTeach) {
          return <>
            <Redirect to="/initial-settings" />
            <PageLoggin>
              <Provider store={store}>
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route
                      path="/initial-settings"
                      component={InitialSettings}
                    />
                    <Route path="/project-Metamecanica" component={AcercaDe} />
                  </Switch>
                </AnimatePresence>
              </Provider>
            </PageLoggin>
          </>;
        } else {
          return <>
            <Redirect to="/home" />
            <Provider store={store}>
              <Sidebar _logOut={handleLogOut} type={loggin} />
              <Pages>
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/home" component={Home} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/perfil" component={Perfil} />
                    <Route path="/configuracion" component={Configuracion} />
                    <Route path="/cedulas" component={Cedulas} />
                    <Route path="/cedula/0" component={Cedula0} />
                    <Route path="/avisos" component={Avisos} />
                    <Route path="/mensajes" component={Mensajes} />
                    <Route path="/analisis" component={Analisis} />
                    <Route path="/adminsitracion" component={Administracion} />
                    <Route path="/guardado" component={Guardado} />
                    {/* <Route
                    path="/project-Metamecanica"
                    component={AboutPaper} /> */}
                  </Switch>
                </AnimatePresence>
              </Pages>
            </Provider>
          </>;
        }
      }
    }
  } else {
    // Menu de inicio

    return (
      <div>
        <Redirect to="/" />
        <Provider store={store}>
          <PageLoggin>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                <Route path="/register" component={Register} />
                <Route path="/recovery" component={Recovery} />
              </Switch>
            </AnimatePresence>
          </PageLoggin>
        </Provider>
      </div>
    );
  }
}; //termina funcion App()

export default App;
