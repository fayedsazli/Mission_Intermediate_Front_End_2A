import AvatarId from "./avatarId";
import RatingCard from "./RatingCard";

const Card = ({ title, image, avatarImg, desc, price }) => {
  return (
    <div className="col">
      <div className="card p-2 d-flex flex-column flex-lg-row text-start justify-content-start">
        <div className="row g-0 w-100">
          {/* Bagian Gambar */}
          <div className="col-2 col-lg-12 d-flex align-items-center justify-content-center">
            <img
              src={`/card/${image}`}
              className="card-img-top img-fluid object-fit-cover"
              alt="gambar1"
            />
          </div>

          {/* Bagian Konten */}
          <div className="col-9 col-lg-12 p-lg-3 p-1">
            <h5 className="card-title fs-6">{title}</h5>
            <p className="card-text fs-6 text-secondary d-none d-lg-block">
              {desc}
            </p>
            <AvatarId avatarImg={avatarImg} />
          </div>
            <RatingCard price={price}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
