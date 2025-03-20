import Pagination from "../common/Pagination";
import SortingNsearch from "../common/SortingNSearch";
import CardGroup from "./CardGroup";
const ProductCard = ({children}) => {
  return (
    <div className="container col-lg-9 col-12 bg-secondary row-gap-5">
    <h3>Product</h3>
    <SortingNsearch />
    <CardGroup children={children} CardWidth={"2"} />
    <Pagination />
      
    </div>


  );
};
export default ProductCard;
