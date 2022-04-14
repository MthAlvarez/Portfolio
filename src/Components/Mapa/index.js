import React from "react";

const Mapa = () => {
  return(
    <div className="contato-rota">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6146.5793055829845!2d-46.71985833362987!3d-23.648122958664697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce510e8d3746ed%3A0x3e9f3a76e1ebfb69!2sEscola%20Senai%20Su%C3%AD%C3%A7o-Brasileira%20Paulo%20Ernesto%20Tolle!5e0!3m2!1spt-BR!2sbr!4v1647969923406!5m2!1spt-BR!2sbr" 
              width="100%" height="500" 
              title="mapa dos arredores da clínica"
              alt="mapa dos arredores da clínica">
      </iframe>
    </div>
  );
}

export default Mapa;