const ContactList = () => {

  return (
    <div className="d-flex flex-row gap-4">
        <ul className="list-unstyled text-start d-lg-block d-none">
            <li className="fw-bolder">Kategori</li>
            <li className="text-secondary ">Digital Dan Teknologi</li>
            <li className="text-secondary">Manajemen Bisnis</li>
            <li className="text-secondary">Pengembangan Diri</li>
            <li className="text-secondary">Desain</li>
            <li className="text-secondary">Pemasaran</li>
        </ul>
        <ul className="list-unstyled text-start d-lg-block d-none">
            <li className="fw-bolder">Perusahaan</li>
            <li className="text-secondary ">Tentang Kami</li>
            <li className="text-secondary">FAQ</li>
            <li className="text-secondary">Kebijakan Privasi</li>
            <li className="text-secondary">Ketentuan Layanan</li>
            <li className="text-secondary">Bantuan</li>
        </ul>
        <ul className="list-unstyled text-start d-lg-block d-none">
            <li className="fw-bolder">Komunitas</li>
            <li className="text-secondary ">Tips Sukses</li>
            <li className="text-secondary">Blog</li>
        </ul>

    </div>
  );
};

export default ContactList;
