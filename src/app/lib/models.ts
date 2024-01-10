import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String
    },
    isAdmin:{
     type:String,
     default:'false'   
    },
    isActive:{
        type:String,
        default:'false'   
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
},{timestamps:true});

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
       
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
    img:{
        type:String
    },
    color:{
        type:String
    },
    size:{
        type:String
    },
    
  
},{timestamps:true});

let UserModel;
let ProductModel;

try {
    // Check if the models already exist
    UserModel = mongoose.model('User');
    ProductModel = mongoose.model('Product');
} catch (error) {
    // Models do not exist, create them
    UserModel = mongoose.model('User', userSchema);
    ProductModel = mongoose.model('Product', productSchema);
}

export const User:any = UserModel;
export const Product:any = ProductModel;
