const TabsCard = () => {
  return (
    <div className="container">
    <ul className="align-self-start nav nav-underline">
      <li className="nav-item">
        <a className="nav-link active text-danger" aria-current="page" href="#">
          Semua Kelas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Pemasaran
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Desain
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Pengembangan Diri
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black" href="#">
          Bisnis
        </a>
      </li>
    </ul>

    </div>
  );
};

export default TabsCard;
