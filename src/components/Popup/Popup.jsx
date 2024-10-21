import PropTypes from 'prop-types';
import './styles.css'; 

const Popup = ({ videoUrl, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('video-popup-overlay')) {
      onClose();
    }
  };

  return (
    <div className="video-popup-overlay" onClick={handleOverlayClick}>
      <div className="video-popup">
        <iframe
          className='pop'
          width="740"
          height="415"
          src={videoUrl}
          title="Video"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

Popup.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
