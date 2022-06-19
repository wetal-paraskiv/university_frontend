import React from "react";
import axios from "axios";

export default class StudentsList extends React.Component {
  state = {
    students: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/api/students`).then((res) => {
      const students = res.data;
      this.setState({ students });
    });
  }

  render() {
    return (
      <>
        <h5>List of all students</h5>
        <div className="list">
          <ol>
            {this.state.students.map((student) => (
              <li key={student.id}>
                ID: {student.id}, name: {student.firstName} {student.lastName},
                email: {student.email}
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }
}
