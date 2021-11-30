import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Signin from '../components/Signin';
import Entrada from '../pages/Entrada';
import SearchVechiculos from '../pages/SearchVehiculos';
import NotFound from '../pages/NotFound';
import PanelParking from '../pages/PanelParking';

export default function AppRouter() {
    return (
        
        <Routes>
            
            {/* <Switch> */}
            {/* <Fragment>  */}

            <Route  path={"/"} element={<Signin />} />
            {/* <Header /> */}
            <Route path={"/index"} element={<Entrada />}  />
            <Route path={"/busqueda"} element={<SearchVechiculos />} />
            <Route path={"/tickets"} element={<PanelParking />} />
            <Route path={'*'} element={<NotFound />} />
            {/* </Fragment> */}
            {/* </Switch> */}
        </Routes>
        
        )
}

