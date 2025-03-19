import FormDesc from "../common/formDesc";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import LineAtau from "../common/LineAtau";
import GoogleButton from "../common/googleButton";

const FormInput = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row w-100 justify-content-center m-0">
        <div className="col-12 col-lg-5 bg-white text-center p-4 shadow rounded m-0">
          <FormDesc
            judul="Masuk Ke Akun"
            deskripsi="Yuk, lanjutin belajarmu di videobelajar."
          />
          <div>
            <TextInput label={"Email"} />
            <PasswordInput label={"Kata Sandi"} />
            <p className="text-end text-muted">Lupa Password?</p>
            <div className="d-flex flex-column gap-2">
              <button type="button" className="btn btn-success w-100">
                Masuk
              </button>
              <button type="button" className="btn btn-primary w-100">
                Daftar
              </button>
              <LineAtau />
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
