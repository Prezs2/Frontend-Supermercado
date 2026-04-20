export default function SuppliersTable({ suppliers, onEdit, onDelete }) {

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-secondary text-white fw-bold fs-5">
        Providers List
      </div>

      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover mb-0 align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={supplier.providerid}>
                  <td>{index + 1}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.phone}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.city}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => onEdit(supplier)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(supplier.providerid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}