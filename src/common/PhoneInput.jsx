const PhoneInput = ({ label }) => {
  return (
    <div className="container mb-3 text-start">
  <label htmlFor="basic-url" className="form-label">
    {label}
    <span className="text-danger"> *</span>
  </label>

  {/* Row untuk input group & input text */}
  <div className="row g-2 align-items-center">
    {/* Input Group (Kode Negara) */}
    <div className="col-6 col-md-auto">
      <div className="input-group" style={{ maxWidth: "120px" }}>
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          <img
            src="/icons8-indonesia-48.png"
            className="img-fluid"
            style={{ width: "20px", height: "20px" }}
            alt="Indonesia Flag"
          />
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>+62</option>
          <option value="1">+62</option>
          <option value="2">+63</option>
          <option value="3">+64</option>
        </select>
      </div>
    </div>

    {/* Input Text */}
    <div className="col-6 col-md">
      <input type="text" className="form-control w-100" placeholder="Masukkan Nomor Telepon" />
    </div>
  </div>
</div>

  );
};
export default PhoneInput;
