import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function ModalCreate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    airline_name: "",
    depature_city: "",
    depature_country: "",
    arrive_city: "",
    arrive_country: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("airline_name", data.airline_name);
    formData.append("depature_city", data.depature_city);
    formData.append("depature_country", data.depature_country);
    formData.append("arrive_city", data.arrive_city);
    formData.append("arrive_country", data.arrive_country);
    const token = Cookies.get("token");
    console.log(token);
    axios
      .post("https://uticket-v2-be.vercel.app/api/v1/airlines", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire("Created!", "Product Created Success!", "success");
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Failed!", "Product Create Failed!", "error");
        setShow(false);
      });
  };

  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        Create
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="airline name"
              name="airline_name"
              value={data.airline_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="depature city"
              name="depature_city"
              value={data.depature_city}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="depature country"
              name="depature_country"
              value={data.depature_country}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="arrive city"
              name="arrive_city"
              value={data.arrive_city}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="arrive country"
              name="arrive_country"
              value={data.arrive_country}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreate;
