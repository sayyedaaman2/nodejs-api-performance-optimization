import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
    product : String,
    price : Number,

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
}, {
    timestamps : true, versionKey : false
})

export default mongoose.model("Order",orderSchema);