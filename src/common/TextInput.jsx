const TextInput = ({ label }) => {
  return (
    <div className="mb-3  text-start w-100">
      <label htmlFor="basic-url" className="form-label">
        {label}
        <span className="text-danger"> *</span>
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
        />
      </div>
    </div>
  );
};

export default TextInput;
