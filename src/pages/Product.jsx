import Desc from "../common/desc";
import DropdownList from "../common/DropdownList";
import FormDesc from "../common/formDesc";
import Pagination from "../common/Pagination";
import CardGroup from "../layout/CardGroup";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import ProductCard from "../layout/ProductCard";
import ProductFilter from "../layout/ProductFilter";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column gap-3 text-center my-3">
        <div className="align-self-start">
          <Desc judul={"judul"} deskripsi={"deskripsi"} />
        </div>
        <div className="row">
          <ProductFilter />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Product;
