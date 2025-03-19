import ContactDropdown from "../common/ContactDropdown";

const ContactInfo = () => {
  return (
    <div className="container-fluid text-start m-0">
      <img src="/videobelajar-logo.svg" alt="logo" />
      <p className="fs-6 m-0 fw-bolder">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
      <p className="fs-6 m-0">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
      <p className="fs-6 m-0">+62-877-7123-1234</p>
      <ContactDropdown title={"Kategori"}/>
      <ContactDropdown title={"Perusahaan"}/>
      <ContactDropdown title={"Komunitas"}/>

    </div>
    
  );
};

export default ContactInfo;
