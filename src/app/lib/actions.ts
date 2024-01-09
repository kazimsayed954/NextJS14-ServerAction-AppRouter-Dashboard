"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';
import { signIn } from "../auth";

export const addUser = async(formData:FormData)=>{
    // "use server";
    const {username,email,password,phone,address,isAdmin,isActive} = Object.fromEntries(formData);
    try {
        connectToDb();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.toString(),salt);
        const newUser= new User({username,email,password:hashedPassword,phone,address,isAdmin,isActive});
        await newUser.save();
      
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}

export const addProduct = async(formData:FormData)=>{
    // "use server";
    const {title,description,category,price,stock,color,size} = Object.fromEntries(formData);
    try {
        connectToDb();
        
        const newProduct= new Product({title,description,category,price,stock,color,size});
        await newProduct.save();
      
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
}

export const deleteProduct = async(formData:FormData)=>{
    const {id} = Object.fromEntries(formData);
    
    try {
        connectToDb();
        
        await Product?.findByIdAndDelete(id);
      
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
    revalidatePath('/dashboard/products');
}

export const deleteUser = async(formData:FormData)=>{
    const {id} = Object.fromEntries(formData);
    
    try {
        connectToDb();
        
        await User?.findByIdAndDelete(id);
      
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
    revalidatePath('/dashboard/users');
}

export const updateUser = async(formData:FormData)=>{
    // "use server";
    const {id,username,email,password,phone,address,isAdmin,isActive} = Object.fromEntries(formData);
    try {
        connectToDb();
        const updateFields:any = {username,email,password,phone,address,isAdmin,isActive};
        Object.keys(updateFields)?.forEach((key)=>{
             if(updateFields[key]==="" || updateFields[key]=== undefined || updateFields[key]?.length===0){ 
                delete updateFields[key]
            }})
        await User?.findByIdAndUpdate(id,updateFields);
      
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}

export const updateProduct = async(formData:FormData)=>{
    const {id,title,description,category,price,stock,color,size} = Object.fromEntries(formData);
    try {
        connectToDb();
        const updateFields:any = {title,description,category,price,stock,color,size};
        Object.keys(updateFields)?.forEach((key)=>{
            if(updateFields[key]==="" || updateFields[key]=== undefined || updateFields[key]?.length===0){ 
               delete updateFields[key]
           }})
        await Product?.findByIdAndUpdate(id,updateFields);
      
    } catch (error) {
        console.log(error)
        throw new Error(`${error}`)
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
}

export const authenticate = async(previousState:any,formData:FormData)=>{
    const { username, password } = Object.fromEntries(formData);

    try {
      await signIn("credentials", { username, password });
    } catch (err:any) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      throw err;
    }

}