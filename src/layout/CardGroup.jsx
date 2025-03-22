import Card from "../common/card";

const CardGroup = ({ lessons, CardWidth = 3 }) => {
  return (
    <div className="container-fluid mt-4">
      <div className={`row row-cols-1 row-cols-lg-${CardWidth} g-3`}>
        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            title={lesson.lesson_title}
            image={lesson.image || "Rectangle1.png"} 
            avatarImg={lesson.avatar || "Avatar1.svg"} 
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
