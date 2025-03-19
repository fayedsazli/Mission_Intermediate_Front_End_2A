import Dropdown from "../common/dropdown";
import ResponsiveDropdown from "../common/RespDropdown";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar navbar-light bg-white w-100 mb-3">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="p-2 flex-grow-1">
          <a
            className="navbar-brand ms-3"
            onClick={(e) => {
              e.preventDefault();
              setPage("app");
            }}
            href="#"
          >
            <img
              src="/videobelajar-logo.svg"
              width="237"
              height="56"
              className="d-inline-block align-top"
              alt="Videobelajar Logo"
            />
          </a>
        </div>
        <div className="p-2 d-flex flex-row align-items-center gap-3">
          <p className="m-0 fw-bolder d-none d-lg-block">
            <a href="#" className="link-underline-opacity-0 link-secondary">
              Kategori
            </a>
          </p>
          <Dropdown />
          <ResponsiveDropdown />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
