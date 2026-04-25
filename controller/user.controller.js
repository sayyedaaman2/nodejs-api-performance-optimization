import User from '../model/user.model.js';
import Order from '../model/order.model.js';


export const getUserWithOrders = async (req, res, next) => {
    try {
        
        const usersWithOrders = await User.aggregate([
            { $sort : {createdAt : -1}},
            {
                $lookup : {
                    from : "orders",
                    localField : "_id",
                    foreignField : "userId",
                    as : "orders"
                }
            }
        ])

        res.status(200).json({
            success: true,
            message: "Fetched user with orders successfully.",
            data: usersWithOrders,
        })
    } catch (error) {
        next(error);
    }
}