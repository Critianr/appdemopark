import React from "react";
import Dashboar from "../components/Dashboar";
import ViewPanel from '../components/viewTickets';
import Header from '../components/header';
import Footer from '../components/footer'
export default function PanelParking(){
    return(
        <>
        <Header />
            {/* <div className="container"> */}
            {/* <div className="container-fluid"> */}
            <div className="row ">
            <div className="col-10 centro">
              
            <ViewPanel />
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