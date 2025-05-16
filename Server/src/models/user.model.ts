import mongoose from "mongoose";
export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}
const UserSchema = new mongoose.Schema<UserDocument>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true },
);
const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
