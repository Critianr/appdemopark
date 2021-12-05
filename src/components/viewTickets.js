import axios from "axios";
import React, {useState, useEffect} from "react";

export default function ViewTickets(){
    const [data, setData] = useState([])
    const tickets = async()=>{
        await axios.get('https://app58.herokuapp.com/api/tickets/')
        .then(res=>{
            setData(res.data)
        })
    }
    useEffect(() => {
        tickets();
      }, []);
    return(
        <>
        <div className="row">
            {data.map((ticket)=>(
                    <div key={ticket.id} className="col-md-4 mb-4">
                    <div className="card card-body">
                      <h3 className="card-title">
                        <strong>Placa: </strong>
                        {ticket.placa}

                      </h3>
                      <p className="card-text">
                        Entrada <strong>{ticket.tiempoInicio}</strong>
                      </p>
                      <p className="card-text">
                        Salida <strong>{ticket.tiempoFinal}</strong>
                      </p>
                      <p className="card-text">
                        Valor a Pagar <strong>{ticket.valorP}</strong>
                      </p>
                           </div>
                  </div>
            ))}                  
        </div>
        </>
    );
}