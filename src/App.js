//React
import { useState } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router";
import { Provider } from 'react-redux';
import store from './store';

//Loggin, Recovery & Register
import Main from "./pages/Main";
import Recovery from "./pages/Recovery";
import Register from "./pages/Register";

//Primera vez, docente
import InitialSettings from "./pages/InitialSettings";

//Lectura
import AcercaDe from './pages/AcercaDe';

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

//Librerías
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";


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
    background-color: #F2F2F2;
    overflow: auto;
  `;

const App = () => {
  const location = useLocation();

  //Usuario logeado
  const [loggin, setLoggin] = useState(false);

  store.subscribe(() => {
    
    if (store.getState().loggin.student) {
      setLoggin(true)
      setEducationalType('')
    } else if (store.getState().loggin.teach) {
      setLoggin(true)
      //Funcion de consulta a la DB para verificar si es la primera vez que inicia sesión 
      setEducationalType('docente');
    }
    if (store.getState().initialSetting) {
    
      setEducationalType('');
    }
  });

  const handleLogOut = () => setLoggin(false);


  //Tipo de docente
  const [educationalType, setEducationalType] = useState('docente')


  // useEffect(() => {
  //   if (loggin) {
  //     console.log(loggin);
  //     setLoggin(true);
  //   }
  // }, [loggin]);


  if (loggin) {

    //Funcion donde educationalTypeService() revisa en la DB que tipo de docente es y retorna un valor para educationalType
    // 1. Jefe de departamento      ||  jefe-de-departamento
    // 2. Jefatura de docencia      ||  jefatura-docencia
    // 3. Jefatura de vinculacion   ||  jefatura-vinculacion
    // 4. Jefatura de investigacion ||  jefatura-investigacion
    // 5. Jefatura de laboratorio   ||  jefatura-laboratorio
    // 6. Docente                   ||  docente

    // Si educationalType == '' significa que es la primera vez que se inicia sesión y hay que asignarle su jerarquía
    // Existirán páginas exclusivas para docentes con jerarquía alta
    if (educationalType === 'docente') {
      return (
        <div>
          <Redirect to='/initial-settings' />
          <PageLoggin>
            <Provider store={store}>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    path='/initial-settings'
                    component={InitialSettings} />

                  <Route
                    path="/project-Metamecanica"
                    component={AcercaDe} />
                </Switch>
              </AnimatePresence>
            </Provider>
          </PageLoggin>
        </div>
      );
    } else {
      // console.log(store.getState().loggin)
      
      if(store.getState().loggin.student){
        return (

          <div>
            <Redirect to='/home' />
            <Provider store={store}>
              <Sidebar _logOut={handleLogOut} />
              <Pages>
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route exact
                      path="/home"
                      component={Home} />
                    <Route
                      path="/menu"
                      component={Menu} />
                    <Route
                      path="/perfil"
                      component={Perfil} />
                    <Route
                      path="/mensajes"
                      component={Mensajes} />
                    <Route
                      path="/analisis"
                      component={Analisis} />
                    <Route
                      path="/adminsitracion"
                      component={Administracion} />
                    <Route
                      path="/guardado"
                      component={Guardado} />
                    {/* <Route
                    path="/project-Metamecanica"
                    component={AboutPaper} /> */}
                  </Switch>
                </AnimatePresence>
              </Pages>
            </Provider>
          </div>
        );
      }else{
        return (
          <div>
            <Redirect to='/home' />
            <Provider store={store}>
              <Sidebar _logOut={handleLogOut} />
              <Pages>
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route exact
                      path="/home"
                      component={Home} />
                    <Route
                      path="/menu"
                      component={Menu} />
                    <Route
                      path="/perfil"
                      component={Perfil} />
                      <Route
                      path="/configuracion"
                      component={Configuracion} />
                      <Route
                      path="/cedulas"
                      component={Cedulas} />
                      <Route
                      path="/cedula/0"
                      component={Cedula0} />
                      <Route
                      path="/avisos"
                      component={Avisos} />
                    <Route
                      path="/mensajes"
                      component={Mensajes} />
                    <Route
                      path="/analisis"
                      component={Analisis} />
                    <Route
                      path="/adminsitracion"
                      component={Administracion} />
                    <Route
                      path="/guardado"
                      component={Guardado} />
                    {/* <Route
                    path="/project-Metamecanica"
                    component={AboutPaper} /> */}
                  </Switch>
                </AnimatePresence>
              </Pages>
            </Provider>
          </div>
        );
      }
      
    }

  } else {
    return (
      <div>
        <Redirect to='/' />
        <Provider store={store}>
          <PageLoggin>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  component={Main}
                />
                <Route
                  path="/register"
                  component={Register}
                />
                <Route
                  path="/recovery"
                  component={Recovery}
                />
              </Switch>
            </AnimatePresence>
          </PageLoggin>
        </Provider>

      </div>
    );
  }
}; //termina funcion App()

export default App;
