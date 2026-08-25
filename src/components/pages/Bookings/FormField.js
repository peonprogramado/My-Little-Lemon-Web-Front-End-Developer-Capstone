
const FormField = ({ children, label, htmlFor, hasError, errorMessage, errorId }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ?
        <p id={errorId} role="alert" data-testid="error-message">{errorMessage}</p> : null}
    </div>
  );
};

export default FormField;
