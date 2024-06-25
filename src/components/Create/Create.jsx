import { Container, Row } from "react-bootstrap";

export default function Create() {
  return (
    <Container fluid={true} className="content-expand">
      <Row className="d-flex justify-content-center">
        <div className="col-12 col-lg-8 col-md-8 col-sm-12 p-2">
          <div className="card">
            <div className="card-body">
              <h4>Create New</h4>
              <br />
              <input
                type="text"
                placeholder="Task Name"
                className="form-control animated fadeInUp"
              />
              <br />
              <textarea
                type="text"
                rows={5}
                placeholder="Task Description"
                className="form-control animated fadeInUp"
              />
              <br />
              <button className="btn float-end btn-info">Create</button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
