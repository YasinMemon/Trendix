'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PhotoIcon, PlusIcon, PencilIcon } from '@heroicons/react/24/outline';

export default function ProductFormModal({
  isOpen,
  isEditMode,
  formData,
  formErrors,
  imagePreview,
  formLoading,
  categories,
  onClose,
  onSubmit,
  onInputChange,
  onImageUpload,
  onRemoveImage
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 py-6">
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
                <h3 className="text-xl font-bold text-white">
                  {isEditMode ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Body */}
              <form onSubmit={onSubmit} className="px-6 py-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      placeholder="Enter product name"
                      className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={onInputChange}
                      rows="4"
                      placeholder="Enter product description"
                      className={`w-full px-4 py-2 border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400`}
                    />
                    {formErrors.description && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.description}</p>
                    )}
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price ($) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={onInputChange}
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      className={`w-full px-4 py-2 border ${formErrors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400`}
                    />
                    {formErrors.price && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.price}</p>
                    )}
                  </div>

                  {/* Stock */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stock Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={onInputChange}
                      min="0"
                      placeholder="0"
                      className={`w-full px-4 py-2 border ${formErrors.stock ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400`}
                    />
                    {formErrors.stock && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.stock}</p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={onInputChange}
                      className={`w-full px-4 py-2 border ${formErrors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white`}
                    >
                      <option value="" className="text-gray-500">Select category</option>
                      {categories.slice(1).map(cat => (
                        <option key={cat} value={cat} className="text-gray-900">{cat}</option>
                      ))}
                    </select>
                    {formErrors.category && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.category}</p>
                    )}
                  </div>

                  {/* Brand */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={onInputChange}
                      placeholder="Enter brand name"
                      className={`w-full px-4 py-2 border ${formErrors.brand ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400`}
                    />
                    {formErrors.brand && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.brand}</p>
                    )}
                  </div>

                  {/* Image Upload */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Images <span className="text-red-500">*</span>
                      <span className="text-xs text-gray-500 ml-2">(Max 5 images)</span>
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center justify-center w-full">
                        <label className={`flex flex-col items-center justify-center w-full h-32 border-2 ${formErrors.images ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors`}>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <PhotoIcon className="w-10 h-10 mb-3 text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={onImageUpload}
                            className="hidden"
                            disabled={imagePreview.length >= 5}
                          />
                        </label>
                      </div>
                      {formErrors.images && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.images}</p>
                      )}

                      {/* Image Preview */}
                      {imagePreview.length > 0 && (
                        <div className="grid grid-cols-5 gap-4 mt-4">
                          {imagePreview.map((img, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={img}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={() => onRemoveImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                              >
                                <XMarkIcon className="h-4 w-4" />
                              </button>
                              {index === 0 && (
                                <span className="absolute bottom-1 left-1 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                                  Main
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Trending Checkbox */}
                  <div className="md:col-span-2">
                    <label className="flex items-center space-x-3 cursor-pointer p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg hover:from-orange-100 hover:to-yellow-100 transition-all">
                      <input
                        type="checkbox"
                        name="isTrending"
                        checked={formData.isTrending}
                        onChange={onInputChange}
                        className="w-5 h-5 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🔥</span>
                        <div>
                          <span className="text-sm font-semibold text-gray-800 block">
                            Mark as Trending Product
                          </span>
                          <span className="text-xs text-gray-600">
                            This product will be featured in the trending section
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {formLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        {isEditMode ? 'Updating...' : 'Adding...'}
                      </>
                    ) : (
                      <>
                        {isEditMode ? (
                          <>
                            <PencilIcon className="h-5 w-5" />
                            Update Product
                          </>
                        ) : (
                          <>
                            <PlusIcon className="h-5 w-5" />
                            Add Product
                          </>
                        )}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
