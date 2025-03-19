import Navbar from "../layout/Navbar";
import FormInput from "../layout/Loginform";

const Login = ({ setPage }) => {
  return (
    <>
      <Navbar setPage={setPage} />
        <div className="body d-flex flex-column align-items-center text-center gap-3 m-2 p-2">
      <FormInput />
    </div>

    </>
  );
};

export default Login;
