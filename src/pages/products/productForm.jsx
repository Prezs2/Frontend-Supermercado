import { useEffect, useState } from 'react'

export default function ProductForm({ selectedProduct, onSave }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rol: '',
  })

  useEffect(() => {
    if (selectedProduct) {
      setForm(selectedProduct)
    }
  }, [selectedProduct])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(form)

    setForm({
      name: '',
      email: '',
      rol: '',
    })
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white fw-bold fs-5">
        Product Form
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Rol</label>
            <select
              className="form-select"
              name="rol"
              value={form.rol}
              onChange={handleChange}
            >
              <option value="">Select a rol</option>
              <option value="Administrator">Administrator</option>
              <option value="Seller">Seller</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {selectedProduct ? 'Update Product' : 'Save Product'}
          </button>
        </form>
      </div>
    </div>
  )
}