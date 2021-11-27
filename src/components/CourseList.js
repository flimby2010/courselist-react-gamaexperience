import React from "react";
import _ from "lodash";
import Course from "./Course";

const CourseList = ({ courses, setCourses }) => {
  const handleRemoveCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <React.Fragment>
      <div className="course-list">
        {!_.isEmpty(courses) ? (
          courses.map((course) => (
            <Course
              key={course.id}
              {...course}
              handleRemoveCourse={handleRemoveCourse}
            />
          ))
        ) : (
          <p className="message">No courses available. Please add some.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CourseList;
