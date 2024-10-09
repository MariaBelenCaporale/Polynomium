import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./styles.css";

const CardForm = () => {
  return (
    <section className="sectionForm">
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
              <label htmlFor="name" className="labelTexto">Teléfono <span className="opcionForm">(Opcional)</span></label>
              <input type="number" id="name" className="inputForm" value={""} onChange={""} required />
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
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CardForm;
