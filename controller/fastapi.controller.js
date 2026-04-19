import User from '../model/user.model.js'

export const getUserwithProduct = async (req,res,next)=>{
    try{
        console.time("FAST_API");
        const userWithOrders = await User.aggregate([
            {
                $lookup : {
                    from : "orders",
                    localField : "_id",
                    foreignField : "userId",
                    as : "orders",
                },
            },
            {
                $project : {
                    name : 1,
                    email : 1,
                    orders : {
                        product : 1,
                        price : 1,
                    },
                },
            },
            {
                $limit : 50,
            }
        ])
        console.time("FAST_API");
        res.status(200).json(userWithOrders);
    }catch(error){
        next(error)
    }
}