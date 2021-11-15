import { FiSend } from "react-icons/fi";
import { MdOutlineMonetizationOn } from "react-icons/md/";
import { BsChatDots } from "react-icons/bs";

const EcomerceFeature = () => {
 return (
  <div className="features">
   <div className="features-feature">
    <div className="feature-icon">
     <FiSend size={35} color="#02051d" />
    </div>

    <div className="feature-text">
     <h3>Envíos</h3>
     <p>A toda colombia</p>
    </div>
   </div>
   <div className="features-feature">
    <div className="feature-icon">
     <MdOutlineMonetizationOn size={35} color="#02051d" />
    </div>

    <div className="feature-text">
     <h3>Pago Seguro 100%</h3>
     <p>Contamos con multiples opciones para que hagas tu compra.</p>
    </div>
   </div>
   <div className="features-feature">
    <div className="feature-icon">
     <BsChatDots size={35} color="#02051d" />
    </div>

    <div className="feature-text">
     <h3>Chat</h3>
     <p>Contamos con multiples opciones para que hagas tu compra.</p>
    </div>
   </div>
   <style jsx>{`
    .features {
     display: flex;
     flex-wrap: wrap;
     width: 80%;
     margin: 50px auto;
     border-radius: 10px;
     border: 1px solid #858282;
     min-height: 5rem;
     font-family: "Relaway", sans-serif;
    }

    .features-feature {
     flex-grow: 1;
     min-width: 200;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #02051d;
     padding: 1rem 0rem;
    }
    .feature-icon {
     margin-right: 1rem;
    }
    p {
     color: #524e4e;
    }
   `}</style>
  </div>
 );
};

export default EcomerceFeature;
