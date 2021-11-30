import axios from "axios";
import React, { useState, useEffect } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import '../assets/css/busqueda.css';

import { format } from 'date-fns'

export default function SearchPlaca (){
  const [tickets, setTickets] = useState({
     _id: '', 
    placa:'',
    TipoVehiculo: '',
    Puesto:Number,
    valorP:Number,
    tiempoInicio:'',
  });
  const [dataPun, setDataPun] = useState({
    tiempoFinal:'',
    valorP:Number,
  });
  const [formtIni , setFormIni] = useState('')
  const [fechaSelecionada, setFechaSelecionada] = useState(new Date());
  const [busqueda, setBusqueda] = useState('');
  const [valor, setValor] = useState(0);
  
const getPlaca=async()=>{
    await axios.get("https://app58.herokuapp.com/api/tickets/placa/" + busqueda)  
    .then(res=>{
      setTickets(res.data[0]);
      console.log(res.data);
    }).catch(error=>{
      console.log(error);
    })
  }
const handleChange=e=>{
  console.log("Busqueda: " + e.target.value)
  setBusqueda(e.target.value);
  
}
// const handleChangeFecha=e=>{
//   console.log("feberi f: " + e.target.value)
//   setFechaI(e.target.value);
// }
// const handleChangeFecha=(e)=>{
//   console.log("fecha: " + e.target.value)
//   // setFechaSelecionada(e.target.value)
  
// }

const liquidaTiempo = async()=>{
 let star = new Date(tickets.tiempoInicio)
 let end = new Date(fechaSelecionada)
 let diffe = Math.abs(end-star)
 let min = Math.floor((diffe/1000)/60)

 if(tickets.TipoVehiculo === 'Camion' || tickets.TipoVehiculo ==='Carro' || tickets.TipoVehiculo === 'Camionetas' || tickets.TipoVehiculo === 'Vans' ){
  setValor(min * 75)
 }else{
  setValor(min * 52)
 }
 //  return valorLiquidado
 console.log(min)
console.log(fechaSelecionada)
console.log(star)
console.log(valor)

}

const finTicket = async()=>{
  // console.log(fechaSelecionada, valor)
  await axios.put('https://app58.herokuapp.com/api/tickets/placa/' + busqueda , dataPun,fechaSelecionada)
  .then(res=>{
    var dataNueva = {
      tiempoFinal:  fechaSelecionada,
      valorP:  valor
    }
    setDataPun(dataNueva)
  }).catch(error=>{
    console.log(error);
  })
}

// useEffect(() => {
//   iniTim();
// }, []);

  // render(){
    return(

<div className="container busqueda">
  <h1 className="py-5 text-center">Busqueda de Vehiculo</h1>
  <div className="input-group mb-3">
  <input type="text" className="form-control" onChange={handleChange} placeholder="Busqueda por Placa" value={busqueda} />
  <div className="input-group-append">
    <button className="btn btn-secondary" onClick={getPlaca} type="button">Buscar</button>
  </div>
</div>

<div className="table table-hover table-responsive">
  <table className="table">
  <thead>
   <tr>
   <th className="col">Placa</th>
    <th className="col">Puesto</th>
    <th className="col">Vehiculo</th>
    <th className="col">Inicio</th>
    <th className="col">Finalizo</th>
    <th className="col">Valor a pagar</th>
   </tr>
  </thead>
  <tbody> 

    {/* {tickets &&
    tickets.map((ticket)=>(  */}
    <tr key={tickets._id} > 
     <td>{tickets.placa}</td>
    <td>{tickets.Puesto}</td>
    <td>{tickets.TipoVehiculo}</td>
    <td>{tickets.tiempoInicio}</td>
        
    <td>
      {/* <label>Fecha</label> */}
      <DateTimePicker value={fechaSelecionada} onChange={setFechaSelecionada} ></DateTimePicker>
    </td>
    <td 
    // muestraElValor={}
    >
      {valor}
      </td>
    </tr>
    
     {/* ))}  */}

  </tbody> 
  </table>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-10">
    <button type="button" 
    onClick={finTicket} 
    className="btn btn-warning">Finalizar Tiempo</button>
    </div>
    <div className="col-2">
      <button type="button" onClick={liquidaTiempo} className="btn btn-success">Valor a Pagar
      </button>
      </div>
  </div>
</div>
</div>

    )
  }
// }
