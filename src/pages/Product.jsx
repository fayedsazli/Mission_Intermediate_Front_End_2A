import { useState } from "react";
import Desc from "../common/desc";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import ProductAdd from "../layout/ProductAdd";
import ProductCard from "../layout/ProductCard";
import ProductFilter from "../layout/ProductFilter";

const Product = () => {
  const [showComponent, setShowComponent] = useState("filter"); // Menyimpan komponen yang akan ditampilkan

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column text-center my-3">
        <div className="align-self-start">
          <Desc judul={"judul"} deskripsi={"deskripsi"} />
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 bg-primary p-3">
            <button
              className="btn btn-light"
              onClick={() => setShowComponent("filter")}
            >
              Tampilkan Filter
            </button>
            <button
              className="btn btn-success ms-2"
              onClick={() => setShowComponent("add")}
            >
              Tambah Data
            </button>
            {/* Menampilkan komponen sesuai dengan state */}
            {showComponent === "filter" && <ProductFilter />}
            {showComponent === "add" && <ProductAdd />}
          </div>
          <ProductCard>
            <div className="row row-cols-lg-2 row-cols-1 ">
              <div className="col-4">
                <button type="button" className="btn btn-danger w-100">
                  Primary
                </button>
              </div>
              <div className="col-4">
              
                <button type="button" className="btn btn-secondary w-100">
                  Primary
                </button>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
