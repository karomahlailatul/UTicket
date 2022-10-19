import React from "react";

export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="./adminAirline"
            >
              <span data-feather="home" className="align-text-bottom "></span>
              Airlines
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="adminAirport">
              <span data-feather="file" className="align-text-bottom"></span>
              Airport
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./adminFlight">
              <span data-feather="file" className="align-text-bottom"></span>
              Flight
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./adminBooking">
              <span data-feather="file" className="align-text-bottom"></span>
              Booking
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
