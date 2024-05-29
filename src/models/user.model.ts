import mongoose from "mongoose";

interface IUser extends Document{
    email:string;
}

const userSchema = new mongoose.Schema({
    email:{
        type:String,
    }
}, {timestamps:true})
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);