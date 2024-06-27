import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { summaryTaskRequest } from "../../apiRequest/apiRequest";

export default function Dashboard() {
  useEffect(() => {
    summaryTaskRequest();
  }, []);

  const summaryList = useSelector((state) => state.summary.value);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          {summaryList &&
            summaryList.map((summary, index) => (
              <div
                key={index}
                className="col-12 col-lg-3 col-sm-6 col-md-3 p-2"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="animated fadeInUp">{summary._id}</h5>
                    <h6 className="text-secondary animated fadeInUp">
                      {summary.count}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
