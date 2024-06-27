import { Container } from "react-bootstrap";
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { getTaskByStatus } from "../../apiRequest/apiRequest";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../helper/DateHelper";
import { DeleteAlert } from "../../helper/DeleteAlert";

export default function Canceled() {
  useEffect(() => {
    getTaskByStatus("Canceled");
  }, []);

  const canceledList = useSelector((state) => state.task.Canceled);

  const DeleteTask = (id) => {
    DeleteAlert(id).then((res) => {
      if (res) {
        getTaskByStatus("Canceled");
      }
    });
  };

  return (
    <Container fluid={true} className="content-body">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-6 col-lg-8 px-3">
          <h5>Task Canceled</h5>
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
        {canceledList.map((task, index) => (
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
                  <a
                    onClick={DeleteTask.bind(this, task._id)}
                    className="icon-nav text-danger mx-1"
                  >
                    <AiOutlineDelete />
                  </a>
                  <a className="badge float-end bg-danger">Canceled</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
