const PasswordInput = ({label}) => {
  return (
    <div className="mb-3  text-start w-100">
      <label htmlFor="basic-url" className="form-label">
        {label}
        <span className="text-danger"> *</span>
      </label>
      <div className="input-group">
        <input
          type="password"
          className="form-control"
          id="basic-url"
          aria-describedby="togglePassword"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="togglePassword"
        >
          <img
            src="/eye-password-hide-svgrepo-com.svg"
            className="img-fluid"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>
      
    </div>
  );
};

export default PasswordInput;
