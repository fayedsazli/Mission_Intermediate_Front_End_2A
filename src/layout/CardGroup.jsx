import Card from "../common/card";
import lessonData from "../data/lessonData.json";

const CardGroup = ({ CardWidth }) => {
  return (
    <div className="container-fluid mt-4">
      <div
        className={`row row-cols-1 row-cols-lg-${CardWidth} g-3`}
      >
        {lessonData.lessons.map((lesson, index) => (
          <Card
            key={index}
            title={lesson.lesson_title}
            image={lesson.image || "Rectangle1.png"} // Pakai gambar dari JSON jika ada
            avatarImg={lesson.avatar || "Avatar1.svg"} // Pakai avatar dari JSON jika ada
            desc={lesson.lesson_desc || "Deskripsi tidak tersedia"}
            price={lesson.price}
            tutorName={lesson.tutor_name}
            job={lesson.tutor_job}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
