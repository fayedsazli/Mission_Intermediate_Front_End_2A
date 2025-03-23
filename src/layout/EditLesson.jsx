import { useState, useEffect } from "react";

const EditLesson = ({ lessonId, onSave, onCancel }) => {
  const [lesson, setLesson] = useState({
    lesson_title: "",
    lesson_desc: "",
    tutor_name: "",
    tutor_job: "",
    price: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/lessons/${lessonId}`)
      .then((res) => res.json())
      .then((data) => setLesson(data))
      .catch((error) => console.error("Error fetching lesson:", error));
  }, [lessonId]);

  const handleChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/lessons/${lessonId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lesson),
    });

    if (response.ok) {
      onSave(lesson); // Update state di ProductCard
    } else {
      console.error("Failed to update lesson");
    }
  };

  return (
    <div className="container rounded p-4 bg-light shadow mt-4">
      <h4 className="mb-3">Edit Lesson</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Judul</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="lesson_title"
              className="form-control"
              placeholder="Masukkan judul"
              value={lesson.lesson_title}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Deskripsi</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="lesson_desc"
              className="form-control"
              placeholder="Masukkan deskripsi"
              value={lesson.lesson_desc}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Nama Tutor</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="tutor_name"
              className="form-control"
              placeholder="Masukkan nama tutor"
              value={lesson.tutor_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Pekerjaan Tutor</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="tutor_job"
              className="form-control"
              placeholder="Masukkan pekerjaan tutor"
              value={lesson.tutor_job}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Harga</label>
          <div className="col-sm-9">
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Masukkan harga"
              value={lesson.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditLesson;
