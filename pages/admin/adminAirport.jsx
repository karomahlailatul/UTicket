import Sidebar from "../../components/modules/admin/sidebar/Sidebar";
import TableAirport from "../../components/modules/admin/table/TableAirport";

export default function adminPanel() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <TableAirport />
          </main>
        </div>
      </div>
    </>
  );
}
