import { useEffect, useState } from 'react'
import { getUsers, createUser, updateUser, deleteUser, } from '../../services/userService'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  const loadUsers = async () => {
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (error) {
      console.error('Error loading users:', error)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const handleSave = async (user) => {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, user)
      } else {
        await createUser(user)
      }

      setSelectedUser(null)
      loadUsers()
    } catch (error) {
      console.error('Error saving user:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteUser(id)
      loadUsers()
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-4">
          <UserForm
            selectedUser={selectedUser}
            onSave={handleSave}
          />
        </div>

        <div className="col-md-8">
          <UsersTable
            users={users}
            onEdit={setSelectedUser}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}