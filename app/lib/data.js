import { User, Programme, Map, Info } from "./models"
import { connectToDB } from "./utils"

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

export const fetchProgramme = async (q, page) => {

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

export const fetchCarte = async (q, page) => {

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

export const fetchInfo = async (q, page) => {

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
