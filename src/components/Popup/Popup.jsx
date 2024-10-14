import PropTypes from 'prop-types';
import './styles.css'; 

const Popup = ({ videoUrl, onClose }) => {
  return (
    <div className="video-popup-overlay">
      <div className="video-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <iframe
          width="740"
          height="415"
          src={videoUrl}
          title="Video"
          frameBorder="0"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
};

Popup.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
