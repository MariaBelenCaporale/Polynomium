import { NavLink } from "react-router-dom";
import LogoFooter from "../../images/logoFooter.png";
import Formas from "../../images/formas.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./styles.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="containerFooter">
      <div className="footer">
        <div className="footerOrder">
          <div className="containerLogoFooter">
            <a href="#top" className="logoFooterLink">
              <img className="logoFooter" src={LogoFooter} alt="Logo Megapix" />
            </a>
          </div>

          <div className="containerTotal">
            <div className="listResponsive">
              <div className="columnOneFooter">
                <a
                  href="#nosotros"
                  className="navlink"
                  onClick={() => { }}
                >
                  <p className="textNavOne">{t("¿Quiénes somos?")}</p>
                </a>

                <a
                  href="https://www.polynomium.com/"
                  target="_blank"
                  className="navlink"
                  onClick={() => { }}
                >
                  <p className="textNavThree">{t("Preguntas frecuentes")}</p>
                </a>

                <div className="columnOneFooter">
                  <a
                    href="#contacto"
                    className="navlink"
                    onClick={() => { }}
                  >
                    <p className="textNavThree">{t("Contacto")}</p>
                  </a>
                </div>
              </div>

              <div className="columnOneFooter">
                <NavLink
                  to="/terminos"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={""}
                >
                  <p className="textNavThree">{t("Política de privacidad")}</p>
                </NavLink>

                <NavLink
                  to="/terminos"
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink inactive"
                  }
                  onClick={""}
                >
                  <p className="textNavThree">{t("Términos & condiciones")}</p>
                </NavLink>
              </div>
            </div>
          </div>
          <span className="lineResponsive"></span>
          <div>
            <div className="columnOneFooter">
              <p className="textNavComunidad">{t("Comunidad")}</p>
              <div className="columnOneFooterRed">
                <a
                  href={"https://www.instagram.com/megapix_arg/"}
                  className="red"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/megapixpay/posts/?feedView=all"
                  className="red"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="containerFormas">
          <img className="formas" src={Formas} />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Footer;
