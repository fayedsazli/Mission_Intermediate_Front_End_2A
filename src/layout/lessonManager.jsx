import { useState } from "react";
export default function LessonManager() {
  const [lessons, setLessons] = useState([
    {
      lesson_title: "Belajar JavaScript Dasar",
      lesson_desc:
        "Pelajari dasar-dasar JavaScript mulai dari variabel, fungsi, hingga DOM manipulation.",
      tutor_name: "Andi Wijaya",
      tutor_job: "Senior Frontend Developer",
      price: 150000,
    },
  ]);

  const [newLesson, setNewLesson] = useState({
    lesson_title: "",
    lesson_desc: "",
    tutor_name: "",
    tutor_job: "",
    price: "",
  });

  const handleChange = (e) => {
    setNewLesson({ ...newLesson, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newLesson.lesson_title || !newLesson.tutor_name || !newLesson.price) {
      alert("Harap isi semua data yang diperlukan.");
      return;
    }
    setLessons([...lessons, { ...newLesson, price: Number(newLesson.price) }]);
    setNewLesson({ lesson_title: "", lesson_desc: "", tutor_name: "", tutor_job: "", price: "" });
  };

  return (
    <Container className="mt-4">
      <h2>Manajemen Pelajaran</h2>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Label>Judul Pelajaran</Form.Label>
          <Form.Control
            type="text"
            name="lesson_title"
            value={newLesson.lesson_title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            name="lesson_desc"
            value={newLesson.lesson_desc}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Nama Tutor</Form.Label>
          <Form.Control
            type="text"
            name="tutor_name"
            value={newLesson.tutor_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Pekerjaan Tutor</Form.Label>
          <Form.Control
            type="text"
            name="tutor_job"
            value={newLesson.tutor_job}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={newLesson.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Tambah Pelajaran</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Deskripsi</th>
            <th>Tutor</th>
            <th>Pekerjaan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson, index) => (
            <tr key={index}>
              <td>{lesson.lesson_title}</td>
              <td>{lesson.lesson_desc}</td>
              <td>{lesson.tutor_name}</td>
              <td>{lesson.tutor_job}</td>
              <td>{lesson.price.toLocaleString("id-ID")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
