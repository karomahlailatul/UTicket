import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function ModalCreateBooking() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    airlines_name: "",
    booking_fullname: "",
    booking_email: "",
    booking_phone: "",
    users_country: "",
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
    formData.append("airlines_name", data.airlines_name);
    formData.append("booking_fullname", data.booking_fullname);
    formData.append("booking_email", data.booking_email);
    formData.append("booking_phone", data.booking_phone);
    formData.append("users_country", data.users_country);
    const token = Cookies.get("token");
    axios
      .post("https://uticket-v2-be.vercel.app/api/v1/booking", formData, {
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
              placeholder="Airline Name"
              name="airlines_name"
              value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Name"
              name="booking_fullname"
              value={data.booking_fullname}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Email"
              name="booking_email"
              value={data.booking_email}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Phone"
              name="booking_phone"
              value={data.booking_phone}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Country"
              name="users_country"
              value={data.users_country}
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

export default ModalCreateBooking;
