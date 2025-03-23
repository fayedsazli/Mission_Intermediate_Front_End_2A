import { useState, useEffect } from "react";

const useLessons = () => {
    const [lessons, setLessons] = useState([]); // State utama

  useEffect(() => {
    fetch("http://localhost:5000/lessons")
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, []);

  return [lessons, setLessons];
};

export default useLessons;
