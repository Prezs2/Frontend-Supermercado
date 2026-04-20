import { useEffect, useState } from 'react'
import { getSuppliers, createSupplier, updateSupplier, deleteSupplier } from '../../services/supplierService'

import SupplierForm from './supplierForm'
import SuppliersTable from './supplierTable'

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState([])
  const [selectedSupplier, setSelectedSupplier] = useState(null)

  const loadSuppliers = async () => {
    try {
      const data = await getSuppliers()
      setSuppliers(data)
    } catch (error) {
      console.error('Error loading suppliers:', error)
    }
  }

  useEffect(() => {
    loadSuppliers()
  }, [])

  const handleSave = async (Supplier) => {
    try {
      if (selectedSupplier) {
        await updateSupplier(selectedSupplier.id, Supplier)
      } else {
        await createSupplier(Supplier)
      }

      setSelectedSupplier(null)
      loadSuppliers()
    } catch (error) {
      console.error('Error saving Supplier:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteSupplier(id)
      loadSuppliers()
    } catch (error) {
      console.error('Error deleting Supplier:', error)
    }
  }
  
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-4">
          <SupplierForm
            selectedSupplier={selectedSupplier}
            onSave={handleSave}
          />
        </div>

        <div className="col-md-8">
          <SuppliersTable
            suppliers={suppliers.data || []}
            onEdit={setSelectedSupplier}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}