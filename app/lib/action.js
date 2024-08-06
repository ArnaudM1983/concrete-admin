
import { redirect } from "next/navigation";
import { User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
    "use server"
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