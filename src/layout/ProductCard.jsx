import { useState } from "react";
import Pagination from "../common/Pagination";
import SortingNsearch from "../common/SortingNSearch";
import CardGroup from "./CardGroup";
import EditLesson from "./EditLesson";

const ProductCard = ({ lessons, setLessons }) => {
  const [editingLesson, setEditingLesson] = useState(null); // State untuk mode edit

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/lessons/${id}`, { method: "DELETE" })
      .then(() => setLessons(lessons.filter((lesson) => lesson.id !== id)))
      .catch((error) => console.error("Error deleting lesson:", error));
  };

  const handleEdit = (id) => {
    setEditingLesson(id); // Set ID lesson yang diedit
  };

  const handleSave = (updatedLesson) => {
    setLessons((prevLessons) =>
      prevLessons.map((lesson) =>
        lesson.id === updatedLesson.id ? updatedLesson : lesson
      )
    );
    setEditingLesson(null); // Kembali ke tampilan ProductCard setelah update
  };

  return (
    <div className="container col-lg-9 col-12 bg-secondary row-gap-5">
      {editingLesson ? (
        <EditLesson
          lessonId={editingLesson}
          onSave={handleSave}
          onCancel={() => setEditingLesson(null)}
        />
      ) : (
        <>
          <h3>Product</h3>
          <SortingNsearch />
          <CardGroup lessons={lessons} CardWidth={"2"} onEdit={handleEdit}>
            {(id) => (
              <button onClick={() => handleDelete(id)} className="btn btn-danger">
                Delete
              </button>
            )}
          </CardGroup>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default ProductCard;
