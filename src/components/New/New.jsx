import { useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { getTaskByStatus } from "../../apiRequest/apiRequest";
import { formatDate } from "../../helper/DateHelper";

export default function New() {
  useEffect(() => {
    getTaskByStatus("New");
  }, []);

  const newList = useSelector((state) => state.task.New);

  return (
    <Container fluid={true} className="content-body">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-6 col-lg-8 px-3">
          <h5>Task New</h5>
        </div>
        <div className="col-12 float-end col-md-6 col-lg-4 px-2">
          <div className="row">
            <div className="col-8">
              <input className="form-control w-100" />
            </div>
            <div className="col-4">
              <button className="btn btn-info w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0">
        {newList.map((task, index) => (
          <div key={index} className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="animated fadeInUp">{task.title}</h6>
                <p className="animated fadeInUp">{task.description}</p>
                <p className="m-0 animated fadeInUp p-0">
                  <AiOutlineCalendar />{" "}
                  {formatDate(task.createdAt, "DD/MM/YYYY")}
                  <a className="icon-nav text-primary mx-1">
                    <AiOutlineEdit />
                  </a>
                  <a className="icon-nav text-danger mx-1">
                    <AiOutlineDelete />
                  </a>
                  <a className="badge float-end bg-info">New</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
