const AvatarId = ({avatarImg,tutorName,job}) =>{
    return(
        <div className="identity d-flex flex-row mb-2 d-flex gap-2">
            <img src={`/avatar/${avatarImg}`} alt="avatar" />
            <div className="name d-flex flex-column align-items-start ">
                <p className="fs-6 m-0">{tutorName}</p>
                <p className="fs-6 m-0 text-secondary">{job}</p>
            </div>
        </div>
    );
};

export default AvatarId;