import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const CourseForm = (props) => {
  const [course, setCourse] = useState({
    coursename: props.course ? props.course.coursename : "",
    teacher: props.course ? props.course.teacher : "",
    description: props.course ? props.course.description : "",
    image: props.course ? props.course.image : "",
    classes: props.course ? props.course.classes : "",
    date: props.course ? props.course.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { coursename, teacher, description, image, classes } = course;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [coursename, teacher, description, image, classes];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const course = {
        id: uuidv4(),
        coursename,
        teacher,
        description,
        image,
        classes,
        date: new Date(),
      };
      props.handleOnSubmit(course);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setCourse((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setCourse((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setCourse((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Course</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="coursename"
            value={coursename}
            placeholder="Enter the course"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="teacher">
          <Form.Label>Teacher</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="teacher"
            value={teacher}
            placeholder="Enter name of teacher"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="image"
            value={image}
            placeholder="Enter image url"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="classes">
          <Form.Label>Classes</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="classes"
            value={classes}
            placeholder="Enter classes url"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CourseForm;
