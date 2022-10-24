import React, { Fragment, useState } from 'react';
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from 'react-redux';
import { createCreditCard } from '../../config/redux/actions/creditCardActions';
import styles from './modalAdd.module.css'

const ModalAdd = ({ children, token, user_id }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [cardCollection, setCardCollection] = useState([])
    const [form, setForm] = useState({
        cc_number: "",
        cc_vcc: "",
        cc_exp: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCreditCard(token, form, user_id))
        // setCardCollection(form)
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    // console.log('cc-form: ', form);
    return (
        <Fragment>
            <button
                type="button"
                style={{ marginRight: "10px", border: "0px", backgroundColor: "#fff", height: "30px"}}
                onClick={handleShow}
            >
                {children}
            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Credit Card</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="cc_number"
                            name="cc_number"
                            defaultValue={form.cc_number}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="cc_number"
                            name="cc_vcc"
                            defaultValue={form.cc_vcc}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="cc_exp"
                            name="cc_exp"
                            value={form.cc_exp}
                            onChange={handleChange}
                        />
                    </Modal.Body>
                    <div className={styles.footer}>
                        <Button variant="danger" onClick={handleClose}>Close</Button>
                        <Button variant="success"  type="submit" id={styles["btn-create"]}>Create</Button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}

export default ModalAdd