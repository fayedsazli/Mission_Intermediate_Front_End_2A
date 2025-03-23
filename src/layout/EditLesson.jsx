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
    <div className="container p-4">
      <h3>Edit Lesson</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="lesson_title"
          value={lesson.lesson_title}
          onChange={handleChange}
          required
          className="form-control my-2"
        />
        <input
          type="text"
          name="lesson_desc"
          value={lesson.lesson_desc}
          onChange={handleChange}
          required
          className="form-control my-2"
        />
        <input
          type="text"
          name="tutor_name"
          value={lesson.tutor_name}
          onChange={handleChange}
          required
          className="form-control my-2"
        />
        <input
          type="text"
          name="tutor_job"
          value={lesson.tutor_job}
          onChange={handleChange}
          required
          className="form-control my-2"
        />
        <input
          type="number"
          name="price"
          value={lesson.price}
          onChange={handleChange}
          required
          className="form-control my-2"
        />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary mx-2">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditLesson;
