import Pagination from "../common/Pagination";
import SortingNsearch from "../common/SortingNSearch";
import CardGroup from "./CardGroup";

const ProductCard = ({ lessons, setLessons }) => {
  // Pindahkan handleDelete ke dalam ProductCard agar bisa mengakses setLessons
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/lessons/${id}`, { method: "DELETE" })
      .then(() => setLessons(lessons.filter((lesson) => lesson.id !== id)))
      .catch((error) => console.error("Error deleting lesson:", error));
  };

  return (
    <div className="container col-lg-9 col-12 bg-secondary row-gap-5">
      <h3>Product</h3>
      <SortingNsearch />
      
      {/* Kirim lessons dan handleDelete ke CardGroup */}
      <CardGroup lessons={lessons} CardWidth={"2"} handleDelete={handleDelete}>
        {(id, handleDelete) => (
          <button onClick={() => handleDelete(id)} className="btn btn-danger">
            Delete
          </button>
        )}
      </CardGroup>

      <Pagination />
    </div>
  );
};

export default ProductCard;
