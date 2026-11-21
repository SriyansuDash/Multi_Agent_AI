import mongoose from 'mongoose';

const userSchama = new mongoose.Schema({
    firebaseUid:{
        type: String,
        unique: true
    },
    userName :{ type: String , required:true },
    userEmail: {type: String , required:true , unique:true},
    password: { type: String , required: true },
    avatar: {type: String}
},{
    timestamps:true
});

const userModel = mongoose.model('user', userSchema);
export default userModel