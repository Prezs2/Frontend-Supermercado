export default function UsersTable({ users, onEdit, onDelete }) {

  return (
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
                <th>Rol</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user.userid}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.rol}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => onEdit(user)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(user.userid)}
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