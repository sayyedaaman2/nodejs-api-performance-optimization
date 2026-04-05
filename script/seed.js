import '../config/env.js'
import {connectDB} from '../lib/database.js'
// Models
import User from '../model/user.model.js'
import Order from '../model/order.model.js'

const seedData = async ()=>{
    try{
        await connectDB();

        for(let i=0; i<500; i++){
            const user = await User.create({
                name : `User ${i}`,
                email : `user${i}@test.com`,
                password : `pass${i}`
            });

            for (let j=0; j<20; j++){
                await Order.create({
                    product : `Product Item ${j}`,
                    price : Math.random() * 100,
                    userId : user._id,
                })
            }
        }
        console.log(`Seed completed`)
        

    }catch(error){
        throw new Error(`Error while seeding data in database : ${error}`)
    }
}
export default seedData;