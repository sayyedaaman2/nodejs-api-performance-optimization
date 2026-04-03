

export const globalErrorHandler = (error,req,res,next)=>{

    if(error){
        console.error(`Some Internal Error : ${error} `)
        return res.status(500).send({
            success : false,
            message : "Some Internal Error"
        })
    }

    next();

}