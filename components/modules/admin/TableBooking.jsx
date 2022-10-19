import { useEffect, useState } from "react";
import axios from "axios";
// import Link from "next/link";
import Cookies from "js-cookie";

export default function TableBooking() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const token = Cookies.get("token");
  console.log(token);

  const getUsers = async () => {
    const response = await axios.get(
      "https://uticket-v2-be.vercel.app/api/v1/booking",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUser(response.data.data);
  };
  console.log(users);
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Airline List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-end">
                  <button className="btn btn-success ">Create</button>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Airline Name</th>
                        <th>Depature City</th>
                        <th>Depature Country</th>
                        <th>Arrive City</th>
                        <th>Arive Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.airline_name}</td>
                          <td>{user.depature_city}</td>
                          <td>{user.depature_country}</td>
                          <td>{user.arrive_city}</td>
                          <td>{user.arrive_country}</td>
                          <td>
                            <button className="btn btn-warning me-2">
                              Edit
                            </button>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
