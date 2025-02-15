const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: ["user"],
    },
    profile: {
        firstName: {
            trim: true,
            type: String,
        },
        lastName: {
            trim: true,
            type: String,
        },
        age: {
            type: Number,
            min: 0,
        },
    },
    lastLogin: {
        type: Date,
    },
},
)

const User = mongoose.model("User", UserSchema);
module.exports = User;