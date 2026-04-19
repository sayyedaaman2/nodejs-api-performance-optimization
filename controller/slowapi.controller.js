import User from "../model/user.model.js"
import Order from '../model/order.model.js'


export const getUserwithProduct = async (req,res,next)=>{
    try{
        console.time("API_TIME")

        const users = await User.find(); // 

        let result = [];

        for (let user of users){
            const orders  = await Order.find({userId : user._id});

            result.push({
                user,
                orders, 
            })
        }

        console.timeEnd("API_TIME");
        res.json(result);
    }catch(error){
        next(error)
    }
}