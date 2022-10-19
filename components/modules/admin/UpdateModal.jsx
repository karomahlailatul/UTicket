import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function ModalEdit({ id, name, description, support }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    id,
    name,
    description,
    support,
  });

  console.log(data);

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
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("support", data.support);
    axios
      .put(`https://uticket-v2-be.vercel.app/api/v1/airlines/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire("Updated!", "Product Update Succes!", "success");
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Failed!", "Product Update Failed!", "error");
        setShow(false);
      });
  };

  return (
    <>
      <button
        className="btn btn-warning"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        Edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Airline</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="support"
              name="support"
              value={data.support}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalEdit;
