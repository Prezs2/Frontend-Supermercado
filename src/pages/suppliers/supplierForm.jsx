import { useEffect, useState } from 'react'

export default function SupplierForm({ selectedSupplier, onSave }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  })

  useEffect(() => {
    if (selectedSupplier) {
      setForm(selectedSupplier)
    }
  }, [selectedSupplier])

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
      phone: '',
      email: '',
      city: '',
    })
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white fw-bold fs-5">
        Providers Form
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
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone"
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
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {selectedSupplier ? 'Update Supplier' : 'Save Supplier'}
          </button>
        </form>
      </div>
    </div>
  )
}