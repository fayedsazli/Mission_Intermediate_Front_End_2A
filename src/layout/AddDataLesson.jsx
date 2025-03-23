import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddLesson = ({ onAdd, onCancel }) => {
  // Tambahkan onCancel sebagai prop
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonDesc, setLessonDesc] = useState("");
  const [tutorName, setTutorName] = useState("");
  const [tutorJob, setTutorJob] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLesson = {
      id: uuidv4(), // ID sementara sebelum disimpan ke server
      lesson_title: lessonTitle,
      lesson_desc: lessonDesc,
      tutor_name: tutorName,
      tutor_job: tutorJob,
      price: parseInt(price),
    };

    // Simpan ke JSON Server
    const response = await fetch("http://localhost:5000/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLesson),
    });

    if (response.ok) {
      onAdd(newLesson); // Update state di Product.js
      setLessonTitle("");
      setLessonDesc("");
      setTutorName("");
      setTutorJob("");
      setPrice("");
    }
  };

  return (
    <div className="container rounded p-4 bg-light shadow mt-4">
      <h4 className="mb-3">Tambah Lesson</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 g-0 row align-items-center">
          <label className="col-sm-3 col-form-label text">Judul</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan judul"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Deskripsi</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan deskripsi"
              value={lessonDesc}
              onChange={(e) => setLessonDesc(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Nama Tutor</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan nama tutor"
              value={tutorName}
              onChange={(e) => setTutorName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Pekerjaan Tutor</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan pekerjaan tutor"
              value={tutorJob}
              onChange={(e) => setTutorJob(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label className="col-sm-3 col-form-label">Harga</label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              placeholder="Masukkan harga"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Tambah
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLesson;
