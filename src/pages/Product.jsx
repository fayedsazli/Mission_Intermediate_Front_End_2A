import { useState } from "react";
import Desc from "../common/desc";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import ProductAdd from "../layout/ProductAdd";
import ProductCard from "../layout/ProductCard";
import ProductFilter from "../layout/ProductFilter";

const Product = () => {
  const [showComponent, setShowComponent] = useState(null); // Menyimpan komponen yang akan ditampilkan

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column gap-3 text-center my-3">
        <div className="align-self-start">
          <Desc judul={"judul"} deskripsi={"deskripsi"} />
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 bg-primary p-3">
            <button onClick={() => setShowComponent("filter")}>Tampilkan Filter</button>
            <button onClick={() => setShowComponent("add")}>Tambah Data</button>

            {/* Menampilkan komponen sesuai dengan state */}
            {showComponent === "filter" && <ProductFilter />}
            {showComponent === "add" && <ProductAdd />}
          </div>
          <ProductCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
