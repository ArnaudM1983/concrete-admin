"use server"
import { redirect } from "next/navigation";
import { Programme, User, Map, Info } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

// Ajouter un utilisateur
export const addUser = async (formData) => {
    
    const { username, email, password, isAdmin } = Object.fromEntries(formData)

    try {
        connectToDB();

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            username, 
            email, 
            password: hashedPassword, 
            isAdmin
        })

        await newUser.save()

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/utilisateurs");
}

//Supprimer un utilisateur
export const deleteUser = async (formData) => {
    
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB();
        await User.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/utilisateurs");
}

// Ajouter un programme
export const addProgramme = async (formData) => {
    
    const { title, category, location, date, time, img } = Object.fromEntries(formData)

    try {
        connectToDB();

        const newProgramme = new Programme({
            title, 
            category, 
            location, 
            date, 
            time, 
            img
        })

        await newProgramme.save()

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/programme");
}

//Supprimer un programme
export const deleteProgramme = async (formData) => {
    
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB();
        await Programme.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/programme");
}

//Ajouter un point d'intérêt
export const addPoint = async (formData) => {
    
    const { title, 
        category, 
        latitude,
        longitude,
        img} = Object.fromEntries(formData)

    try {
        connectToDB();

        const newPoint = new Map({
            title, 
            category, 
            latitude,
            longitude,
            img
        })

        await newPoint.save()

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/carte");
}

//Supprimer un point d'intérêt
export const deletePoint = async (formData) => {
    
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB();
        await Map.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/carte");
}

// Ajouter une info
export const addInfo = async (formData) => {
    
    const { title, content } = Object.fromEntries(formData)

    try {
        connectToDB();

        const newInfo = new Info({
            title, 
            content
        })

        await newInfo.save()

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/infos");
}

//Supprimer une info
export const deleteInfo = async (formData) => {
    
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB();
        await Info.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/infos");
}


