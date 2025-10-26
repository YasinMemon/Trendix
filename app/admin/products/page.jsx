'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import ProductsHeader from '@/components/admin/products/ProductsHeader';
import ProductFilters from '@/components/admin/products/ProductFilters';
import ProductGrid from '@/components/admin/products/ProductGrid';
import ProductFormModal from '@/components/admin/products/ProductFormModal';
import DeleteConfirmModal from '@/components/admin/products/DeleteConfirmModal';
import Toast from '@/components/admin/products/Toast';

export default function ProductsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, productId: null });
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    stock: '',
    isTrending: false,
    images: []
  });
  const [imagePreview, setImagePreview] = useState([]);
  const [formLoading, setFormLoading] = useState(false);

  // Categories array
  const categories = ['All Categories', 'Electronics', 'Fashion', 'Accessories', 'Home', 'Sports', 'Beauty', 'Books', 'Toys'];
  
  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  // Get product status
  const getProductStatus = (stock) => {
    if (stock === 0) return { label: 'Out of Stock', color: 'bg-red-100 text-red-700' };
    if (stock < 20) return { label: 'Low Stock', color: 'bg-yellow-100 text-yellow-700' };
    return { label: 'In Stock', color: 'bg-green-100 text-green-700' };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleAddProduct = () => {
    resetForm();
    setIsAddProductOpen(true);
  };

  const handleEditProduct = (product) => {
    setIsEditMode(true);
    setEditingProductId(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      isTrending: product.isTrending || false,
      images: product.images || []
    });
    setImagePreview(product.images || []);
    setIsAddProductOpen(true);
  };

  const handleDeleteClick = (productId) => {
    setDeleteConfirm({ show: true, productId });
  };

  const handleDeleteConfirm = () => {
    handleDelete(deleteConfirm.productId);
  };

  const handleCloseModal = () => {
    setIsAddProductOpen(false);
    resetForm();
  };

  useEffect(() => {
    const getProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:3000/api/products');
            const data = await response.json();
            if(response.ok){
                setData(data.products);
                setFilteredData(data.products);
                setLoading(false)
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            showToast('Failed to load products', 'error');
            setLoading(false);
        }
    }

    getProducts()
  }, []);

  // Filter products based on search, category, and status
  useEffect(() => {
    let filtered = [...data];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Status filter
    if (selectedStatus !== 'All Status') {
      filtered = filtered.filter(product => {
        const status = getProductStatus(product.stock);
        return status.label === selectedStatus;
      });
    }

    setFilteredData(filtered);
  }, [searchQuery, selectedCategory, selectedStatus, data]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Product name is required';
    if (!formData.description.trim()) errors.description = 'Description is required';
    if (!formData.price || formData.price <= 0) errors.price = 'Valid price is required';
    if (!formData.category) errors.category = 'Category is required';
    if (!formData.brand.trim()) errors.brand = 'Brand is required';
    if (formData.stock === '' || formData.stock < 0) errors.stock = 'Valid stock quantity is required';
    if (imagePreview.length === 0) errors.images = 'At least one image is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imagePreview.length > 5) {
      showToast('Maximum 5 images allowed', 'error');
      return;
    }
    
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImagePreview(prev => [...prev, ...imageUrls]);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
    
    if (formErrors.images) {
      setFormErrors(prev => ({ ...prev, images: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('Please fix all errors', 'error');
      return;
    }
    
    setFormLoading(true);
    
    try {
      const url = isEditMode ? `/api/products/${editingProductId}?id=${editingProductId}` : '/api/products';
      const method = isEditMode ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        
        if (isEditMode) {
          setData(data.map(p => p._id === editingProductId ? result.product : p));
          showToast('Product updated successfully!', 'success');
        } else {
          setData([result.product, ...data]);
          showToast('Product added successfully!', 'success');
        }
        
        setIsAddProductOpen(false);
        resetForm();
      } else {
        const error = await response.json();
        showToast(error.message || 'Operation failed', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('An error occurred', 'error');
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (product) => {
    setIsEditMode(true);
    setEditingProductId(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      isTrending: product.isTrending || false,
      images: product.images || []
    });
    setImagePreview(product.images || []);
    setIsAddProductOpen(true);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${productId}?id=${productId}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (response.ok) {
        setData(data.filter(product => product._id !== productId));
        showToast('Product deleted successfully!', 'success');
        setDeleteConfirm({ show: false, productId: null });
      } else {
        showToast(result.message || 'Failed to delete product', 'error');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      showToast('An error occurred', 'error');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      brand: '',
      stock: '',
      isTrending: false,
      images: []
    });
    setImagePreview([]);
    setFormErrors({});
    setIsEditMode(false);
    setEditingProductId(null);
  };

  const removeImage = (index) => {
    setImagePreview(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const refreshProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const result = await response.json();
      if (response.ok) {
        setData(result.products);
        setFilteredData(result.products);
        showToast('Products refreshed!', 'success');
      }
    } catch (error) {
      showToast('Failed to refresh', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <ProductsHeader
                productCount={filteredData.length}
                loading={loading}
                onAddProduct={handleAddProduct}
                onRefresh={refreshProducts}
              />
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants}>
              <ProductFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                categories={categories}
              />
            </motion.div>

            {/* Products Grid */}
            <ProductGrid
              loading={loading}
              filteredData={filteredData}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedStatus={selectedStatus}
              onAddProduct={handleAddProduct}
              onEdit={handleEditProduct}
              onDelete={handleDeleteClick}
              getProductStatus={getProductStatus}
            />
          </motion.div>
        </main>
      </div>

      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        />
      )}

      {/* Toast Notification */}
      <Toast show={toast.show} message={toast.message} type={toast.type} />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={deleteConfirm.show}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteConfirm({ show: false, productId: null })}
      />

      {/* Add/Edit Product Modal */}
      <ProductFormModal
        isOpen={isAddProductOpen}
        isEditMode={isEditMode}
        formData={formData}
        formErrors={formErrors}
        imagePreview={imagePreview}
        formLoading={formLoading}
        categories={categories}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onImageUpload={handleImageUpload}
        onRemoveImage={removeImage}
      />
    </div>
  );
}