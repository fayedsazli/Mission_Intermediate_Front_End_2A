import Card from "../common/card";
import lessonData from "../data/lessonData.json";

const CardGroup = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {lessonData.lessons.map((lesson, index) => (
          <Card
            key={index}
            title={lesson.lesson_title}
            image="Rectangle1.png" // Ganti jika ada gambar di JSON
            avatarImg="Avatar1.svg" // Ganti jika ada avatar di JSON
            desc={lesson.lesson_desc}
            price={lesson.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
