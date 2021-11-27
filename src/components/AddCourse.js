import React from "react";
import CourseForm from "./CourseForm";

const AddCourse = ({ history, courses, setCourses }) => {
  const handleOnSubmit = (course) => {
    setCourses([course, ...courses]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <CourseForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCourse;
