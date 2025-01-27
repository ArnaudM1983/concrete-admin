"use server"
import { redirect } from "next/navigation";
import { Programme, User, Map, Info, Actus } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

// Ajouter un utilisateur
export const addUser = async (formData) => {
    
    const { username, email, password, isAdmin } = Object.fromEntries(formData)

    try {
        connectToDB();

        // Hachage du mot de passe
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // Création d'un nouvel utilisateur
        const newUser = new User({
            username, 
            email, 
            password: hashedPassword, 
            isAdmin
        })

        // Sauvegarde dans la base de données
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

        // Préparation des champs à mettre à jour
        const updateFields = {username, email, password, isAdmin}

        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key]==="" || undefined) && delete updateFields[key]
            );

        // Mise à jour dans la base de données
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
    const { title, category, location, date, time } = Object.fromEntries(formData);
  
    const imgFile = formData.get("img");
  
    // Convertir l'image en base64
    const imgBuffer = await imgFile.arrayBuffer();
    const imgBase64 = Buffer.from(imgBuffer).toString("base64");
  
    try {
      connectToDB();
  
      const newProgramme = new Programme({
        title,
        category,
        location,
        date,
        time,
        img: imgBase64 // Sauvegarde de l'image en base64
      });
  
      await newProgramme.save();
  
    } catch (error) {
      console.log(error);
      throw new Error("Erreur lors de l'ajout du programme");
    }

    redirect("/dashboard/programme");
  }

// Mettre à jour un programme
export const updateProgramme = async (formData) => {
    
    const { id, title, category, location, date, time, img } = Object.fromEntries(formData)

    const imgFile = formData.get("img");
  
    // Convertir l'image en base64
    const imgBuffer = await imgFile.arrayBuffer();
    const imgBase64 = Buffer.from(imgBuffer).toString("base64");

    try {
        connectToDB();

        const updateFields = {
            title, category, location, date, time, img: imgBase64 // Sauvegarde de l'image en base64
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
        content, 
        latitude,
        longitude,
        img,
        } = Object.fromEntries(formData)

    const imgFile = formData.get("img");
  
    // Convertir l'image en base64
    const imgBuffer = await imgFile.arrayBuffer();
    const imgBase64 = Buffer.from(imgBuffer).toString("base64");

    try {
        connectToDB();

        const newPoint = new Map({
            title, 
            category,
            content, 
            latitude,
            longitude,
            img: imgBase64, // Sauvegarde de l'image en base64
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
        content, 
        latitude,
        longitude,
        img,
         } = Object.fromEntries(formData)

    const imgFile = formData.get("img");
  
    // Convertir l'image en base64
    const imgBuffer = await imgFile.arrayBuffer();
    const imgBase64 = Buffer.from(imgBuffer).toString("base64");


    try {
        connectToDB();

        const updateFields = {
            title, 
            category,
            content,
            latitude,
            longitude,
            img: imgBase64, // Sauvegarde de l'image en base64,
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

    redirect("/dashboard/actus");
}

// Mettre à jour une info unique 
export const updateInfo = async (formData) => {
    
    const { id, title, content, img } = Object.fromEntries(formData)

    try {
        connectToDB();

        const updateFields = {
            title, 
            content,
            img: imgBase64 // Sauvegarde de l'image en base64
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

// Ajouter une actu
export const addActu = async (formData) => {
    
    const { title, content } = Object.fromEntries(formData)

    const imgFile = formData.get("img");
  
    // Convertir l'image en base64
    const imgBuffer = await imgFile.arrayBuffer();
    const imgBase64 = Buffer.from(imgBuffer).toString("base64");


    try {
        connectToDB();

        const newActu = new Actus({
            title, 
            content,
            img: imgBase64 // Sauvegarde de l'image en base64
        })

        await newActu.save()

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/actus");
}

// Mettre à jour une actu unique 
export const updateActu = async (formData) => {
    
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

        await Actus.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur de mise à jour")
    }

    redirect("/dashboard/actus");
}

//Supprimer une actu
export const deleteActu = async (formData) => {
    
    const { id } = Object.fromEntries(formData)

    try {
        connectToDB();
        await Actus.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Erreur")
    }

    redirect("/dashboard/actus");
}


export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password
      });
  
      if (result.error) {
        return { error: "Identifiants Incorrects" };
      }
  
      return { success: true }; // Authentification réussie
    } catch (err) {
      return { error: "Identifiants incorrects. Veuillez réessayer." };
    }
  };
  



