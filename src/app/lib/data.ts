import { Product, User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async(q:any,page:number)=>{
    const regexExp = new RegExp(q,"i");
    const ITEM_PER_PAGE = 10;
    try {
        connectToDb();
        const count = await User?.find({username:{$regex:regexExp}}).count();
        const users = await User?.find({username:{$regex:regexExp}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,users}
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`)
    }
}

export const fetchUser = async(id:string)=>{
    
    try {
        connectToDb();
        const user:any = await User?.findById(id);
        return user
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`)
    }
}

export const fetchProducts = async(q:any,page:number)=>{
    const regexExp = new RegExp(q,"i");
    const ITEM_PER_PAGE = 2;
    try {
        connectToDb();
        const count = await Product?.find({title:{$regex:regexExp}}).count();
        const products = await Product?.find({title:{$regex:regexExp}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,products}
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`)
    }
}

export const fetchProduct = async(id:string)=>{
    
    try {
        connectToDb();
        const product:any = await Product?.findById(id);
        return product
    } catch (error) {
        console.log(error);
        throw new Error(`${error}`)
    }
}