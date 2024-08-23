import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

const programmeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
},
    { timestamps: true }
);

const mapSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
    },
},
{ timestamps: true });

const infoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
{ timestamps: true });

const actusSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
},
{ timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Programme = mongoose.models.Programme || mongoose.model("Programme", programmeSchema)
export const Map = mongoose.models.Map || mongoose.model("Map", mapSchema)
export const Info = mongoose.models.Info || mongoose.model("Info", infoSchema)
export const Actus = mongoose.models.Actus || mongoose.model("Actus", actusSchema)