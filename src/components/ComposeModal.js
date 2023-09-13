import "../styles/layout/ComposeModal.scss";
import adalabLogo from "../images/adalab-logo.png";

const ComposeModal = ({
  handleCompose,
  composeText,
  handleComposeText,
  handleComposeSubmit,
}) => {
  const handleComposeButton = () => {
    handleCompose();
  };
  const handleText = (ev) => {
    handleComposeText(ev.target.value);
  };
  const isButtonDisabled = composeText.length === 0;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleComposeSubmit();
  };
  return (
    <div className="compose__modal-overlay">
      <form onSubmit={handleSubmit}>
        <div className="compose__modal-wrapper">
          <div className="compose__modal-header">
            <button
              className="compose__modal-close-btn"
              onClick={handleComposeButton}
            >
              Cerrar
            </button>
          </div>
          <div className="compose__modal-content">
            <img
              className="compose__profile-logo"
              src={adalabLogo}
              alt="Logo de Adalab"
            />
            <textarea
              className="compose__profile-textarea"
              placeholder="¿Qué está pasando?"
              value={composeText}
              onChange={handleText}
            />
          </div>
          <div className="compose__modal-footer">
            <button
              className="compose__modal-tweet-btn"
              disabled={isButtonDisabled}
            >
              Twittear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ComposeModal;
