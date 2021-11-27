import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddCourse from "../components/AddCourse";
import CourseList from "../components/CourseList";
import EditCourse from "../components/EditCourse";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
  const [courses, setCourses] = useLocalStorage("courses", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <CourseList
                  {...props}
                  courses={courses}
                  setCourses={setCourses}
                />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddCourse
                  {...props}
                  courses={courses}
                  setCourses={setCourses}
                />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditCourse
                  {...props}
                  courses={courses}
                  setCourses={setCourses}
                />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
