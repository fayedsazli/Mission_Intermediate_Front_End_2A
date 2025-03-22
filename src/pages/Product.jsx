import { useState, useEffect } from "react";
import Desc from "../common/desc";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import ProductAdd from "../layout/ProductAdd";
import ProductCard from "../layout/ProductCard";
import ProductFilter from "../layout/ProductFilter";
import AddLesson from "../layout/AddDataLesson";

const Product = () => {
  const [showComponent, setShowComponent] = useState("filter");
  const [lessons, setLessons] = useState([]); // State utama

  // Ambil data saat pertama kali komponen dimuat
  useEffect(() => {
    fetch("http://localhost:5000/lessons")
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Fungsi untuk menambah lesson baru
  const addLesson = (newLesson) => {
    setLessons([...lessons, newLesson]); // Menambahkan data ke state
  };

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
            {showComponent === "filter" && <ProductFilter />}
            {showComponent === "add" && <AddLesson onAdd={addLesson} />}
          </div>
          {/* Kirim lessons ke ProductCard */}
          <ProductCard lessons={lessons} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
