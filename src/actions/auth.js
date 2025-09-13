"use server"

import { getCollection } from "@/lib/db";
import bcrypt from 'bcrypt';
import { redirect } from "next/navigation";

//todas las funciones del servidor deben ser async
export async function register(state,formData){
    console.log('accion de registro llamada');
    await new Promise(resolve =>setTimeout(resolve,3000));

    const userSchema = {
        email: { type: 'string',required: true },
        password: { type: 'string', required: true },
    };

    const validatedFields= {
        email:formData.get("email"),
        password:formData.get("password")
    }

    console.log(validatedFields)

    const email1= formData.get("email");
    const password1= formData.get("password");

    console.log(email1);
    console.log(password1);

    const userCollection= await getCollection('users');
    if(!userCollection){
        return {error:{email:"Server error"}};
    }
    
    //ver si el email ya estaba
    const existingUser= await userCollection.findOne({email: email1})
    console.log(existingUser)
    if(existingUser){
        return {error:{email:"Correo ya usado"}};
    }

    const hashedPassword=await bcrypt.hash(validatedFields.password, 10)

    const result=await userCollection.insertOne({
        email: email1,
        password: hashedPassword
    });
    console.log(result);

    redirect('/dashboard');
}