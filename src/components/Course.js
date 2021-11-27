import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Course = ({
  id,
  coursename,
  teacher,
  description,
  image,
  classes,
  date,
  handleRemoveCourse,
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: "18rem" }} className="course">
      <Card.Body>
        <Card.Title className="course-title">{coursename}</Card.Title>
        <div className="course-details">
          <div>Teacher: {teacher}</div>
          <div>Description: {description} </div>
          <div>Image: {image} </div>
          <div>Classes: {classes} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveCourse(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
