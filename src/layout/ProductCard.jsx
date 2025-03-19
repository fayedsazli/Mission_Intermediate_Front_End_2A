import Pagination from "../common/Pagination";
import CardGroup from "./CardGroup";
const ProductCard = () => {
  return (
    <div className="container col-lg-7 col-12 bg-secondary row-gap-5">
    <h3>Product</h3>
    <div
      className="sorting d-flex gap-3 justify-content-lg-end justify-content-center"
    >
      <button>sorting</button>
      <input type="text" placeholder="Cari kelas" />
    </div>
    <CardGroup CardWidth={"2"} />
    <Pagination />
      
    </div>


  );
};
export default ProductCard;
