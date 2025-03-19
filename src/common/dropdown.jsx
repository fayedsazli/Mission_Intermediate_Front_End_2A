const Dropdown = () =>{
    return(
        <div className="dropdown d-none d-lg-block">
            <img
              src="/Avatar.svg"
              alt="avatar-navbar"
              className="dropdown-toggle"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            />
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profil Saya
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Kelas Saya
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pesanan Saya
                </a>
              </li>
              <li>
                <a className="dropdown-item text-danger" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
    );
};
export default Dropdown;