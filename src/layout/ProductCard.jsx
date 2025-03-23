import { useState } from "react";
import Pagination from "../common/Pagination";
import SortingNsearch from "../common/SortingNSearch";
import CardGroup from "./CardGroup";
import EditLesson from "./EditLesson";
import AddLesson from "../layout/AddDataLesson"; // Import komponen tambah data

const ProductCard = ({ lessons, setLessons }) => {
  const [editingLesson, setEditingLesson] = useState(null); // Mode edit
  const [addingLesson, setAddingLesson] = useState(false); // Mode tambah data

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/lessons/${id}`, { method: "DELETE" })
      .then(() => setLessons(lessons.filter((lesson) => lesson.id !== id)))
      .catch((error) => console.error("Error deleting lesson:", error));
  };

  const handleEdit = (id) => {
    setEditingLesson(id); // Set ID lesson yang diedit
    setAddingLesson(false); // Tutup form tambah jika sedang terbuka
  };

  const handleSave = (updatedLesson) => {
    setLessons((prevLessons) =>
      prevLessons.map((lesson) =>
        lesson.id === updatedLesson.id ? updatedLesson : lesson
      )
    );
    setEditingLesson(null); // Kembali ke tampilan daftar produk setelah edit
  };

  const handleAddLesson = (newLesson) => {
    setLessons([...lessons, newLesson]); // Tambahkan lesson baru
    setAddingLesson(false); // Tutup form tambah setelah berhasil
  };

  return (
    <div className="container col-lg-9 col-12 bg-secondary row-gap-5">
      <h3>Product</h3>
      {/* Tombol Tambah Data */}
      {!editingLesson && !addingLesson && (
        <button
          className="btn btn-success mb-3"
          onClick={() => setAddingLesson(true)}
        >
          Tambah Data
        </button>
      )}

      {/* Mode Edit */}
      {editingLesson ? (
        <EditLesson
          lessonId={editingLesson}
          onSave={handleSave}
          onCancel={() => setEditingLesson(null)}
        />
      ) : addingLesson ? (
        // Mode Tambah Data
        <AddLesson
          onAdd={handleAddLesson}
          onCancel={() => setAddingLesson(false)}
        />
      ) : (
        // Tampilan Normal
        <>
          <SortingNsearch />
          <CardGroup lessons={lessons} CardWidth={"2"} onEdit={handleEdit}>
            {(id) => (
              <button
                onClick={() => handleDelete(id)}
                className="btn btn-danger"
              >
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
