import Desc from "../common/desc";
import DropdownList from "../common/DropdownList";
import FormDesc from "../common/formDesc";
import Pagination from "../common/Pagination";
import CardGroup from "../layout/CardGroup";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column gap-3 text-center my-3">
        <div className="align-self-start">
          <Desc judul={"judul"} deskripsi={"deskripsi"} />
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 bg-primary">
            <h3>filter</h3>
            <DropdownList />
          </div>
          <div className="container col-lg-7 col-12 bg-secondary row-gap-5">
            <h3>Product</h3>
            <div className="sorting d-flex gap-3 justify-content-lg-end justify-content-center">
              <button>sorting</button>
              <input type="text" placeholder="Cari kelas" />
            </div>
            <div className="row row-cols-1 row-cols-lg-2 row-gap-2 ">
              <CardGroup />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Product;
