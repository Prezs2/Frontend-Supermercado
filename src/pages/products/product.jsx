import { useEffect, useState } from 'react'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../services/ProductService'

import ProductForm from './productForm'
import ProductsTable from './productTable'

export default function ProductsPage() {
  const [Products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const loadProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (error) {
      console.error('Error loading Products:', error)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleSave = async (Product) => {
    try {
      if (selectedProduct) {
        await updateProduct(selectedProduct.id, Product)
      } else {
        await createProduct(Product)
      }

      setSelectedProduct(null)
      loadProducts()
    } catch (error) {
      console.error('Error saving Product:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id)
      loadProducts()
    } catch (error) {
      console.error('Error deleting Product:', error)
    }
  }
  
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-4">
          <ProductForm
            selectedProduct={selectedProduct}
            onSave={handleSave}
          />
        </div>

        <div className="col-md-8">
          <ProductsTable
            Products={Products.data || []}
            onEdit={setSelectedProduct}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}