import { useState } from "react";

const AddLesson = ({ onAdd }) => {
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonDesc, setLessonDesc] = useState("");
  const [tutorName, setTutorName] = useState("");
  const [tutorJob, setTutorJob] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newLesson = {
      id: Date.now(), // ID sementara sebelum disimpan ke server
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
    <div className="p-3 bg-light">
      <h4>Tambah Lesson</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={lessonTitle}
          onChange={(e) => setLessonTitle(e.target.value)}
          required
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="Deskripsi"
          value={lessonDesc}
          onChange={(e) => setLessonDesc(e.target.value)}
          required
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="Nama Tutor"
          value={tutorName}
          onChange={(e) => setTutorName(e.target.value)}
          required
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="Pekerjaan Tutor"
          value={tutorJob}
          onChange={(e) => setTutorJob(e.target.value)}
          required
          className="form-control my-2"
        />
        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="form-control my-2"
        />
        <button type="submit" className="btn btn-primary">Tambah</button>
      </form>
    </div>
  );
};

export default AddLesson;
