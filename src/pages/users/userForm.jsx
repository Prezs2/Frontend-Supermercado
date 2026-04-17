import { useEffect, useState } from 'react'

export default function UserForm({ selectedUser, onSave }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
  })

  useEffect(() => {
    if (selectedUser) {
      setForm(selectedUser)
    }
  }, [selectedUser])

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
      role: '',
    })
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white fw-bold fs-5">
        User Form
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
            <label className="form-label">Role</label>
            <select
              className="form-select"
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="">Select a role</option>
              <option value="Administrator">Administrator</option>
              <option value="Seller">Seller</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {selectedUser ? 'Update User' : 'Save User'}
          </button>
        </form>
      </div>
    </div>
  )
}