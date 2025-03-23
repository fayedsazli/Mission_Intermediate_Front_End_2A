const Desc = ({judul,deskripsi}) =>{
    return(
        <div className="container d-flex flex-column align-items-lg-start align-items-center">
            <h3 className="fw-semibold">{judul}</h3>
            <p className="text-secondary text-center">{deskripsi}</p>
        </div>
    );
};
export default Desc;