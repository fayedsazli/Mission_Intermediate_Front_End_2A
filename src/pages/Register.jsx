import Navbar from "../layout/Navbar";
import RegisterForm from "../layout/RegisterForm";

const Register = ({ setPage }) => {
  return (
    <>
      <Navbar setPage={setPage} />
    <div className="container d-flex justify-content-center">
      <RegisterForm />
    </div>
    
    </>
  );
};

export default Register;
