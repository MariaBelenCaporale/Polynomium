import Bola from "../../images/rock.gif";
import "./styles.css";
import Rayomov from "../../images/rayomov.gif";

const Energia = () => {
  return (
    <section className="sectionEnergia">
      <div className="contieneBola">
      <span className="luzAzulDos"></span>
      <span className="luzAzul"></span>
        <img className="imgBola" src={Bola} alt="bola de energía" />
        <img className="rayo" src={Rayomov} alt="rayos" />
        <img className="rayoDos" src={Rayomov} alt="rayos" />

      </div>
    </section>
  );
};

export default Energia;
