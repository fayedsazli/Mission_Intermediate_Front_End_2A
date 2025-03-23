import Card from "../common/card";

const CardGroup = ({ lessons, CardWidth = 3, onEdit, children }) => {
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
          ><div className="d-flex flex-column gap-1 ">
            {children(lesson.id)}
            <button onClick={() => onEdit(lesson.id)} className="btn btn-warning w-25">
              Edit
            </button>
            
          </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
