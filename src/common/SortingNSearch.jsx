const SortingNsearch = () => {
  return (
    <div className="sorting d-flex gap-3 justify-content-lg-end justify-content-center">
      <div className="dropdown">
        <button
          className="btn btn-secondary bg-white text-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="input-group input-group-md mb-3 w-25">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    </div>
  );
};

export default SortingNsearch;
