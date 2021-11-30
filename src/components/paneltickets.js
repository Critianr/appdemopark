import React from "react";

const PanelTickets = () => {
    return(
        <div>
    
        <h1> Panel de tickets</h1>

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        placaxxx
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul className="list-group list-group-horizontal">
  <li className="list-group-item"><strong>Ingreso:</strong>  </li>
  <li className="list-group-item"> fecha de inglresoxxx </li>  
  <li className="list-group-item">Puesto: ###</li>
  <li className="list-group-item"><strong>Salida:</strong> </li>
  <li className="list-group-item"> fecha de salida xxx </li>
  <li className="list-group-item">Valor a pagar: $$$ </li>
</ul>
      </div>
    </div>
  </div>
</div>
</div>
        );
}

export default PanelTickets;