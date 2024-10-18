import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ButtonFirst from "../ButtonFirst/ButtonFirst";
import Diamante from '../../images/diamante.png';
import "./styles.css";

const CardForm = () => {
  return (
    <section className="sectionForm" id="contacto">
      <div className="containerForm">
        <div className="formBack">
          <div className="internoForm">
            <div className="contieneTextForm">
              <p className="textForm">Estoy interesado en:</p>
            </div>
            <div className="contenedorButtonForm">
              <ButtonComponent titulo="Crear un producto" />
              <ButtonComponent titulo="Productos Polynomium" />
            </div>
          </div>

          <form className='formulario' onSubmit={""}>
            <div className="filaUnoForm">
            <div className="labelInput">
              <label htmlFor="name" className="labelTexto">Nombre completo</label>
              <input type="text" id="name" className="inputForm" value={""} onChange={""} required />
            </div>
            <div className="labelInput">
              <label htmlFor="email" className="labelTexto">E-mail</label>
              <input
              className="inputForm"
                type="email"
                id="email"
                value={""}
                onChange={""}
                required
              />
            </div>
            </div>

            <div className="filaUnoForm">
            <div className="labelInput">
              <label htmlFor="name" className="labelTexto">Nombre empresa <span className="opcionForm">(Opcional)</span></label>
              <input type="text" id="name" className="inputForm" value={""} onChange={""} required />
            </div>

            <div className="labelInput">
              <label htmlFor="email" className="labelTexto">País</label>
              <input
              className="inputForm"
                type="text"
                id="pais"
                value={""}
                onChange={""}
                required
              />
            </div>
            </div>
            <div className="filaUnoForm">
            <div className="labelInput">
              <label htmlFor="name" className="labelTexto">Desarrollar necesidad <span className="opcionForm">(Opcional)</span></label>
              <input type="text" id="necesidad" className="inputForm" value={""} onChange={""} required />
            </div>

            
            </div>
            <ButtonFirst 
              titleButton="Enviar mensaje" 
            />
            
          </form>
        </div>
      </div>
      <div className="containerDiamanteForm"> 
        <img src={Diamante} alt="imagen de diamante" />
      </div>
      <div className="containerDiamanteFormDos"> 
        <img src={Diamante} alt="imagen de diamante" />
      </div>
    </section>
  );
};

export default CardForm;
