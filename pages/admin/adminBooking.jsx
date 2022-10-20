import Sidebar from "../../components/modules/admin/sidebar/Sidebar";
import TableBooking from "../../components/modules/admin/table/TableBooking";

export default function adminPanel() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <TableBooking />
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
