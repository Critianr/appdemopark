import React from 'react';
import '../assets/css/index.css'
import Dashboar from "../components/Dashboar";
import PanelMain from '../components/PanelMain';
import Header from '../components/header';
import Footer from '../components/footer'

// import{ Router} from 'react-router-dom'


export default function index()  {
        return (
            <>
            <Header />
            {/* <div className="container"> */}
            {/* <div className="container-fluid"> */}
            <div className="row ">
            <div className="col-10 centro">
            <PanelMain />
         </div>
         <div className="col-2 derecha">
             
             <Dashboar />
         {/* <PanelTickets /> */}
         
         </div>
         </div>
         {/* </div> */}
         {/* </div> */}
         <Footer />
         </>

        )
}

