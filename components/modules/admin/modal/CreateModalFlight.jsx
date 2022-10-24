import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function ModalCreateBooking({ getUsers }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    airlines_id: "",
    airport_depature: "",
    airport_arrive: "",
    depature: "",
    arrive: "",
    lungage: "",
    reschedule: "",
    refundable: "",
    meal: "",
    wifi: "",
    price: "",
    type_class: "",
    capacity: "",
    status: "",
    admin_id: "",
    status_transit: "",
    airport_transit_1: "",
    time_transit_1: "",
    airport_transit_2: "",
    time_transit_2: "",
    airport_transit_3: "",
    time_transit_3: "",
    airport_transit_4: "",
    time_transit_4: "",
    estimate: "",
    terminal_verification: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(data);

  const handleCreate = async (e) => {
    await e.preventDefault();

    // const formData = new FormData();
    // formData.append("airlines_id", data.airlines_id);
    // formData.append("airport_depature", data.airport_depature);
    // formData.append("airport_arrive", data.airport_arrive);
    // formData.append("depature", data.depature);
    // formData.append("arrive", data.arrive);
    // formData.append("lungage", data.lungage);
    // formData.append("reschedule", data.reschedule);
    // formData.append("refundable", data.refundable);
    // formData.append("meal", data.meal);
    // formData.append("wifi", data.wifi);
    // formData.append("price", data.price);
    // formData.append("capacity", data.capacity);
    // formData.append("status", data.status);
    // formData.append("admin_id", data.admin_id);
    // formData.append("status_transit", data.status_transit);
    // formData.append("airport_transit_1", data.airport_transit_1);
    // formData.append("time_transit_1", data.time_transit_1);
    // formData.append("airport_transit_2", data.airport_transit_2);
    // formData.append("time_transit_2", data.time_transit_2);
    // formData.append("airport_transit_3", data.airport_transit_3);
    // formData.append("time_transit_3", data.time_transit_3);
    // formData.append("airport_transit_4", data.airport_transit_4);
    // formData.append("time_transit_4", data.time_transit_4);
    // formData.append("estimate", data.estimate);
    // formData.append("terminal_verification", data.terminal_verification);

    const token = Cookies.get("token");
    await axios
      .post(
        "https://uticket-v2-be.vercel.app/api/v1/flight",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        // console.log(res);
        Swal.fire("Created!", "Product Created Success!", "success");
        setShow(false);
        getUsers();
      })
      .catch(() => {
        // console.log(err);
        Swal.fire("Failed!", "Product Create Failed!", "error");
        setShow(false);
      });
  };

  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        Create
      </button>
      <Modal show={show} scrollable={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airlines ID"
              name="airlines_id"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Depature"
              name="airport_depature"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Arrive"
              name="airport_arrive"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Depature ( year-month-day )"
              name="depature"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Arrive ( year-month-day )"
              name="arrive"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Lungage ( true/false )"
              name="lungage"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Reschedule ( true/false )"
              name="reschedule"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Refundable ( true/false )"
              name="refundable"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Meal ( true/false )"
              name="meal"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Wifi ( true/false )"
              name="wifi"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Price ( without currency symbol )"
              name="price"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Type Class ( economy/business/first_class )"
              name="type_class"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Capacity ( INT total )"
              name="capacity"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Status ( active/non_active )"
              name="status"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Admin ID"
              name="admin_id"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Status Transit ( direct/transit )"
              name="status_transit"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 1"
              name="airport_transit_1"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Time Minutes Transit 1"
              name="time_transit_1"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 2"
              name="airport_transit_2"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Time Minutes Transit 2"
              name="time_transit_2"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 3"
              name="airport_transit_3"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Time Minutes Transit 3"
              name="time_transit_3"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 4"
              name="airport_transit_4"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="TIme Minutes Transit 4"
              name="time_transit_4"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Estimate Minutes Flight"
              name="estimate"
              // value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Terminal Verification Gate ( XXX )"
              name="terminal_verification"
              // value={data.airlines_name}
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
