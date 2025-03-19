const FormDesc = ({judul,deskripsi}) =>{
    return(
        <div>
            <h3 className="fw-semibold">{judul}</h3>
            <p className="text-secondary text-center">{deskripsi}</p>
        </div>
    );
};
export default FormDesc;