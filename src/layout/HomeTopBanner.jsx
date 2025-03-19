import BannerText from "../common/BannerText";

const BackgroundBanner = ({ img, children }) => {
  return (
    <div className="row w-100 justify-content-center mt-2 ">
      <div
        className="col-12 col-lg-10 background-container p-0  align-items-center justify-content-center text-white rounded"
        style={{
          backgroundImage: `url("/${img}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center w-100 h-100 rounded "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="position-relative text-center w-75">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBanner;
