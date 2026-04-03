
if(!process.env.MONGODB_URI){
    throw new Error("MONGODB_URI is not defined");
}


export default {
    MONGODB_URI : process.env.MONGODB_URI
}