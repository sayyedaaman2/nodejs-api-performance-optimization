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
orderSchema.index({ userId: 1 });
orderSchema.index({ createdAt: -1 });

export default mongoose.model("Order",orderSchema);