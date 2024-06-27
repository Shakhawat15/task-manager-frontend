import { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { ErrorToast, IsEmpty } from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";
import { createTaskRequest } from "../../apiRequest/apiRequest";

export default function Create() {
  let titleRef,
    descriptionRef = useRef();

  const navigate = useNavigate();

  const createTask = async () => {
    const title = titleRef.value;
    const description = descriptionRef.value;
    if (IsEmpty(title)) {
      ErrorToast("Title is Required!");
    } else if (IsEmpty(description)) {
      ErrorToast("Description is Required!");
    } else {
      await createTaskRequest(title, description).then((result) => {
        if (result) {
          navigate("/all");
        }
      });
    }
  };
  return (
    <Container fluid={true} className="content-expand">
      <Row className="d-flex justify-content-center">
        <div className="col-12 col-lg-8 col-md-8 col-sm-12 p-2">
          <div className="card">
            <div className="card-body">
              <h4>Create New</h4>
              <br />
              <input
                ref={(input) => (titleRef = input)}
                type="text"
                placeholder="Task Name"
                className="form-control animated fadeInUp"
              />
              <br />
              <textarea
                ref={(input) => (descriptionRef = input)}
                type="text"
                rows={5}
                placeholder="Task Description"
                className="form-control animated fadeInUp"
              />
              <br />
              <button onClick={createTask} className="btn float-end btn-info">
                Create
              </button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
