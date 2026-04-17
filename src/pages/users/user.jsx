export default function UsersPage() {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        {/* Formulario */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white fw-bold fs-5">
              User Form
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Enter name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select className="form-select">
                    <option>Select a role</option>
                    <option>Administrator</option>
                    <option>Seller</option>
                    <option>Manager</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Save User
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-secondary text-white fw-bold fs-5">
              Users List
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-striped table-hover mb-0 align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john@example.com</td>
                      <td>Administrator</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>jane@example.com</td>
                      <td>Seller</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Michael Brown</td>
                      <td>michael@example.com</td>
                      <td>Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
