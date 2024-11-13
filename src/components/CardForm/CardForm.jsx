import { useState } from "react";
import axios from 'axios';
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ButtonFirst from "../ButtonFirst/ButtonFirst";
import Diamante from '../../images/diamante.png';
import "./styles.css";
import { useTranslation } from 'react-i18next';

const CardForm = () => {
  const { t } = useTranslation();
  const [selectedButton, setSelectedButton] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    pais: "",
    necesidad: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(`Campo: ${id}, Valor: ${value}`);
    setFormData({ ...formData, [id]: value });
  };
  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre) newErrors.nombre = t("Campo obligatorio.");
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t("Email inválido.");
    if (!formData.pais) newErrors.pais = t("Campo obligatorio.");
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = t("Número de teléfono inválido.");
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Datos a enviar:", formData);
      try {
        const response = await axios.post('/api/send_email', formData);

        console.log("Formulario enviado:", response.data);
        setErrors({});
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    }
  };

  const isFormValid = () => {
    const validationErrors = validateForm();
    return Object.keys(validationErrors).length === 0 && formData.nombre && formData.email && formData.pais && formData.phone;
  };

  return (
    <section className="sectionForm" id="contacto">
      <div className="containerForm">
        <div className="formBack">
          <div className="internoForm">
            <div className="contieneTextForm">
              <p className="textForm">{t("Estoy interesado en:")}</p>
            </div>
            <div className="contenedorButtonForm">
              <ButtonComponent
                titulo={t("Crear un producto")}
                isSelected={selectedButton === "crearProducto"}
                onClick={() => handleButtonClick("crearProducto")}
              />
              <ButtonComponent
                titulo={t("Productos Polynomium")}
                isSelected={selectedButton === "productosPolynomium"}
                onClick={() => handleButtonClick("productosPolynomium")}
              />
            </div>
          </div>

          <form className='formulario' onSubmit={handleSubmit}>
            <div className="filaUnoForm">
              <div className="labelInput">
                <label htmlFor="nombre" className="labelTexto">{t("Nombre completo")}</label>
                <input 
                  type="text" 
                  id="nombre" 
                  className="inputForm" 
                  value={formData.nombre} 
                  onChange={handleChange} 
                  required 
                />
                {errors.nombre && <span className="error">{errors.nombre}</span>}
              </div>
              <div className="labelInput">
                <label htmlFor="email" className="labelTexto">{t("E-mail")}</label>
                <input
                  className="inputForm"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>

            <div className="filaUnoForm">
              <div className="labelInput">
                <label htmlFor="empresa" className="labelTexto">{t("Nombre empresa ")}<span className="opcionForm">{t("(Opcional)")}</span></label>
                <input type="text" id="empresa" className="inputForm" value={formData.empresa} onChange={handleChange} />
              </div>

              <div className="labelInput">
                <label htmlFor="pais" className="labelTexto">{t("País")}</label>
                <input
                  className="inputForm"
                  type="text"
                  id="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  required
                />
                {errors.pais && <span className="error">{errors.pais}</span>}
              </div>
              <div className="labelInput">
                <label htmlFor="phone" className="labelTexto">{t("Teléfono")}</label>
                <input
                  className="inputForm"
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>

            <div className="filaUnoForm">
              <div className="labelInput">
                <label htmlFor="necesidad" className="labelTexto">{t("Desarrollar necesidad ")}<span className="opcionForm">{t("(Opcional)")}</span></label>
                <input type="text" id="necesidad" className="inputForm" value={formData.necesidad} onChange={handleChange} />
              </div>
            </div>

            <ButtonFirst 
              titleButton={t("Enviar mensaje")}
              onClick={handleSubmit}
              disabled={!isFormValid()} 
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
