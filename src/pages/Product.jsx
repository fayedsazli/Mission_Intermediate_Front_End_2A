import Desc from "../common/desc";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import ProductAdd from "../layout/ProductAdd";
import ProductCard from "../layout/ProductCard";
import ProductFilter from "../layout/ProductFilter";
import AddLesson from "../layout/AddDataLesson";
import useLessons from "../hooks/uselesson";

const Product = ({setPage}) => {
  const [lessons,setLessons] = useLessons();

  return (
    <>
       <Navbar setPage={setPage} />
      <div className="container d-flex flex-column text-center my-3">
        <div className="align-self-lg-start">
          <Desc judul={"Koleksi Video Pembelajaran Unggulan"} deskripsi={"Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"} />
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
