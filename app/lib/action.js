"use server"
import { redirect } from "next/navigation";
import { Programme, User, Map, Info } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

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

// Mettre à jour un utilisateur
export const updateUser = async (formData) => {
    
    const { id, username, email, password, isAdmin } = Object.fromEntries(formData)

    try {
        connectToDB();

        const updateFields = {
            username, email, password, isAdmin
        }

        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key]==="" || undefined) && delete updateFields[key]
            );

        await User.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur de mise à jour")
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

// Mettre à jour un programme
export const updateProgramme = async (formData) => {
    
    const { id, title, category, location, date, time, img } = Object.fromEntries(formData)

    try {
        connectToDB();

        const updateFields = {
            title, category, location, date, time, img
        }

        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key]==="" || undefined) && delete updateFields[key]
            );

        await Programme.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur de mise à jour")
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

// Mettre à jour un point d'intérêt
export const updatePoint = async (formData) => {
    
    const { id, title, 
        category, 
        latitude,
        longitude,
        img } = Object.fromEntries(formData)

    try {
        connectToDB();

        const updateFields = {
            title, 
            category, 
            latitude,
            longitude,
            img
        }

        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key]==="" || undefined) && delete updateFields[key]
            );

        await Map.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur de mise à jour")
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

// Mettre à jour une info unique d'intérêt
export const updateInfo = async (formData) => {
    
    const { id, title, content } = Object.fromEntries(formData)

    try {
        connectToDB();

        const updateFields = {
            title, 
            content
        }

        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key]==="" || undefined) && delete updateFields[key]
            );

        await Info.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur de mise à jour")
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

export const authenticate = async ( formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      throw err;
    }
  };



