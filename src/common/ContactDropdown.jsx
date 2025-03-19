const ContactDropdown = ({title}) => {
  return (
    <div className="dropdown d-lg-none d-block">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-haspopup="true"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Call Us
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Email Support
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Live Chat
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactDropdown;
