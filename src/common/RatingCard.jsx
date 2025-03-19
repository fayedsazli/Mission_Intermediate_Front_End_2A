const RatingCard = ({price}) =>{
    return(
        <div className="rating d-flex align-items-center justify-content-between">
            <img className="" src="/StarRating.svg" alt="StarRating" />
            <p className="fs-5 mb-0 fw-bold text-success">Rp {price}</p>
        </div>
    );
};

export default RatingCard;