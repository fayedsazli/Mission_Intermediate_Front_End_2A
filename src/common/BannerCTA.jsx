const BannerCTA = () => {
  return (
    <div className="container d-flex align-items-center flex-column p-5">
      <div className="text-center">
        <p>NEWSLETTER</p>
        <h3>Mau Belajar Lebih Banyak?</h3>
        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>
      </div>
      <div className="input-group mb-3 w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Masukan Emailmu"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-warning"
          type="button"
          id="button-addon2"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default BannerCTA;
