import Dashboar from "../components/Dashboar";
import Header from '../components/header';
import Footer from '../components/footer'
import SearchPlaca from "../components/searchPlaca";
// import DateFnsUtils from '@date-io/date-fns/build/date-fns-utils';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns/';
import esLocale from 'date-fns/locale/es';
export default function SearchVechiculos()  {
    // const contextPlaca = props =>{
    //     const [vehiculo, setVehiculo] = useState([])
    //     con
    // }
    return (
        <>

        <Header />
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>       

        {/* <div className="container"> */}
        {/* <div className="container-fluid"> */}
        <div className="row ">
        <div className="col-10  centro">

        <SearchPlaca />

     </div>
     <div className="col-2 derecha">
         
         <Dashboar />
     {/* <PanelTickets /> */}
     
     </div>
     </div>
     {/* </div> */}
     {/* </div> */}
     </MuiPickersUtilsProvider> 


     <Footer />
     </>

    )
}

