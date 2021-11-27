import React from "react";
import CourseForm from "./CourseForm";
import { useParams } from "react-router-dom";

const EditCourse = ({ history, courses, setCourses }) => {
  const { id } = useParams();
  const courseToEdit = courses.find((course) => course.id === id);

  const handleOnSubmit = (course) => {
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCourses([course, ...filteredCourses]);
    history.push("/");
  };

  return (
    <div>
      <CourseForm course={courseToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCourse;
