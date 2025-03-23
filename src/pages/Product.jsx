import Desc from "../common/desc";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import ProductAdd from "../layout/ProductAdd";
import ProductCard from "../layout/ProductCard";
import ProductFilter from "../layout/ProductFilter";
import AddLesson from "../layout/AddDataLesson";
import useLessons from "../hooks/uselesson";

const Product = () => {
  const [lessons,setLessons] = useLessons();

  // Fungsi untuk menambah lesson baru

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column text-center my-3">
        <div className="align-self-start">
          <Desc judul={"judul"} deskripsi={"deskripsi"} />
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 p-3">
          <ProductFilter />
          </div>
          {/* Kirim lessons ke ProductCard */}
          <ProductCard lessons={lessons} setLessons={setLessons} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
