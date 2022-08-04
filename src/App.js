import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import CreateUser from './Components/CreateUser';
import Detail from './Components/Detail';
import Users from './Components/Users';


function App() {
  return (
    <React.Fragment>
      {/* Componentes que se van a renderizar en todas las rutas */}
      <NavBar/> 
      {/* <Route path={"/"} component={NavBar}/> */}  

      {/* Cuando este en la ruta /Home quiero que se me renderice el componente Home */}
      {/* Si Home no recibe props */}
      <Route path={"/home"} component={Home}/> 
      {/* Si Home sí recibe props */}
      {/* <Route path={"/Home"} render={() => <Home name={""}/>} /> */}
      <Route path={"/home"}>
        <Home name={""}/>
      </Route>
      <Route path={"/create"} component={CreateUser}/>
      <Route path={"/detail/:id"} component={Detail}/>
      <Route path={"/users"} component={Users}/>

    </React.Fragment>
  );
}

export default App;
