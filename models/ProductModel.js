import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: { 
        type: String,
        required: true
    },
    brand: { 
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    numReviews: { 
        type: Number,
        default: 0
    },
    stock: { 
        type: Number,
        required: true
    },
    isTrending: { 
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: { 
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

export const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema);