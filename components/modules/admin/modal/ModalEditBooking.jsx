import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function ModalCreateBooking({ getUsers, flightID }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [flightDetailID, setFlightDetailID] = useState([]);

  const getFlightDetailID = async () => {
    const response = await axios.get(
      `https://uticket-v2-be.vercel.app/api/v1/flight/${flightID?.toString()}`
    );
    setFlightDetailID(response.data.data[0]);
    setData({
      airlines_id: response.data.data[0].airlines_id,
      airport_depature: response.data.data[0].airport_depature,
      airport_arrive: response.data.data[0].airport_arrive,
      depature: response.data.data[0].depature.split("T")[0],
      arrive: response.data.data[0].arrive.split("T")[0],
      lungage: response.data.data[0].lungage,
      reschedule: response.data.data[0].reschedule,
      refundable: response.data.data[0].refundable,
      meal: response.data.data[0].meal,
      wifi: response.data.data[0].wifi,
      price: response.data.data[0].price,
      type_class: response.data.data[0].type_class,
      capacity: response.data.data[0].capacity,
      status: response.data.data[0].status,
      admin_id: response.data.data[0].admin_id,
      status_transit: response.data.data[0].status_transit,
      airport_transit_1: response.data.data[0].airport_transit_1,
      time_transit_1: response.data.data[0].time_transit_1,
      airport_transit_2: response.data.data[0].airport_transit_2,
      time_transit_2: response.data.data[0].time_transit_2,
      airport_transit_3: response.data.data[0].airport_transit_3,
      time_transit_3: response.data.data[0].time_transit_3,
      airport_transit_4: response.data.data[0].airport_transit_4,
      time_transit_4: response.data.data[0].time_transit_4,
      estimate: response.data.data[0].estimate,
      terminal_verification: response.data.data[0].terminal_verification,
    });
  };
  // console.log(flightDetailID);

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(data);

  const handleCreate = async (e) => {
    await e.preventDefault();

    const token = Cookies.get("token");
    await axios
      .put(
        `https://uticket-v2-be.vercel.app/api/v1/flight/${flightID?.toString()}`,
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
        Swal.fire("Created!", "Edit Flight Success!", "success");
        setShow(false);
        getUsers();
      })
      .catch(() => {
        // console.log(err);
        Swal.fire("Failed!", "Edit Flight Failed!", "error");
        setShow(false);
      });
  };

  return (
    <>
      <button
        className="btn btn-warning"
        onClick={async () => {
          handleShow();
          await getFlightDetailID();
        }}
      >
        Edit
      </button>
      <Modal show={show} scrollable={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airlines ID"
              name="airlines_id"
              defaultValue={flightDetailID?.airlines_id}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Depature"
              name="airport_depature"
              defaultValue={flightDetailID?.airport_depature}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Arrive"
              name="airport_arrive"
              defaultValue={flightDetailID?.airport_arrive}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Depature ( year-month-day )"
              name="depature"
              defaultValue={flightDetailID?.depature?.split("T")[0]}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Arrive ( year-month-day )"
              name="arrive"
              defaultValue={flightDetailID?.arrive?.split("T")[0]}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Lungage ( true/false )"
              name="lungage"
              defaultValue={flightDetailID?.lungage}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Reschedule ( true/false )"
              name="reschedule"
              defaultValue={flightDetailID?.reschedule}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Refundable ( true/false )"
              name="refundable"
              defaultValue={flightDetailID?.refundable}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Meal ( true/false )"
              name="meal"
              defaultValue={flightDetailID?.meal}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Wifi ( true/false )"
              name="wifi"
              defaultValue={flightDetailID?.wifi}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Price ( without currency symbol )"
              name="price"
              defaultValue={flightDetailID?.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Type Class ( economy/business/first_class )"
              name="type_class"
              defaultValue={flightDetailID?.type_class}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Capacity ( INT total )"
              name="capacity"
              defaultValue={flightDetailID?.capacity}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Status ( active/non_active )"
              name="status"
              defaultValue={flightDetailID?.status}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Admin ID"
              name="admin_id"
              defaultValue={flightDetailID?.admin_id}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Status Transit ( direct/transit )"
              name="status_transit"
              defaultValue={flightDetailID?.status_transit}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 1"
              name="airport_transit_1"
              defaultValue={flightDetailID?.airport_transit_1}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Time Minutes Transit 1"
              name="time_transit_1"
              defaultValue={flightDetailID?.time_transit_1}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 2"
              name="airport_transit_2"
              defaultValue={flightDetailID?.airport_transit_2}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Time Minutes Transit 2"
              name="time_transit_2"
              defaultValue={flightDetailID?.time_transit_2}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 3"
              name="airport_transit_3"
              defaultValue={flightDetailID?.airport_transit_3}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Time Minutes Transit 3"
              name="time_transit_3"
              defaultValue={flightDetailID?.time_transit_3}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Airport ID Transit 4"
              name="airport_transit_4"
              defaultValue={flightDetailID?.airport_transit_4}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="TIme Minutes Transit 4"
              name="time_transit_4"
              defaultValue={flightDetailID?.time_transit_4}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Estimate Minutes Flight"
              name="estimate"
              defaultValue={flightDetailID?.estimate}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Terminal Verification Gate ( XXX )"
              name="terminal_verification"
              defaultValue={flightDetailID?.terminal_verification}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreateBooking;
