import { create } from "domain";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    fullName: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    phone: { 
        type: String,
        maxlength: 10,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    role : { 
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    address: { 
        street: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        zipCode: { type: String, default: '' }
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

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    // Hash password logic here (e.g., using bcrypt)
    
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

export const UserModel = mongoose.models.User || mongoose.model("User", userSchema);