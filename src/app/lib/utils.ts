import mongoose from "mongoose";

export const connectToDb =async()=>{
    const connection:any = {}

    try {
        if(connection['isConnected']) return;
        const db:any = await mongoose.connect(`${process.env.MONGODBURL}`);
        connection['isConnected'] = db.connections[0]?.readyState;
    } catch (error:any) {
        throw new Error(error)
    }
}

export const DebounceFn = function(fn:any,delay:number=1000){
    let timer:any;
    return function(...args){
        clearTimeout(timer);
        const context:unknown = this;
        timer=setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}