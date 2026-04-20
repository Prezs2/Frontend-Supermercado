export default function ProductTable({ Product, onEdit, onDelete }) {

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-secondary text-white fw-bold fs-5">
        Product List
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
              {Product.map((product, index) => (
                <tr key={product.productid}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.phone}</td>
                  <td>{product.email}</td>
                  <td>{product.city}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => onEdit(product)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(product.productid)}
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