import { User, Programme, Map, Info } from "./models"
import { connectToDB } from "./utils"

// Récupération des utilisateurs depuis MongoDB
export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i")

    try {
        connectToDB()
        const users = await User.find({ username: { $regex: regex } })
        return users
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}

// Récupération d'un utilisateur unique depuis MongoDB
export const fetchUser = async (id) => {

    try {
        connectToDB()
        const user = await User.findById(id)
        return user;
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch user")
    }
}

// Récupération des programmes depuis MongoDB
export const fetchProgrammes = async (q, page) => {

    const regex = new RegExp(q, "i")

    try {
        connectToDB()
        const programmes = await Programme.find({ title: { $regex: regex } })
        return programmes
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch programmes")
    }
}

// Récupération d'un programme unique depuis MongoDB
export const fetchProgramme = async (id) => {

    try {
        connectToDB()
        const programme = await Programme.findById(id)
        return programme;
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch programme")
    }
}

// Récupération des points d'intérêt depuis MongoDB
export const fetchCartes = async (q, page) => {

    const regex = new RegExp(q, "i")

    try {
        connectToDB()
        const cartes = await Map.find({ title: { $regex: regex } })
        return cartes
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch cartes")
    }
}

// Récupération d'un point d'intérêt unique depuis MongoDB
export const fetchCarte = async (id) => {

    try {
        connectToDB()
        const carte = await Map.findById(id)
        return carte;
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch carte")
    }
}

// Récupération des infos depuis MongoDB
export const fetchInfos = async (q, page) => {

    const regex = new RegExp(q, "i")

    try {
        connectToDB()
        const infos = await Info.find({ title: { $regex: regex } })
        return infos
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch programmes")
    }
}

// Récupération d'une info unique depuis MongoDB
export const fetchInfo = async (id) => {

    try {
        connectToDB()
        const info = await Info.findById(id)
        return info;
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch info")
    }
}
