const BookModel = require('../models/model.js')


 exports.postBooking = async (req,res)=>{
    try {
        // Create a new booking document
        const newBooking = new BookModel(req.body);
        const savedBooking = await newBooking.save();
        return res.status(200).json({
            message:"Booking successful",
            status:200,
            data:savedBooking
        })
    } catch (error) {
        console.log(error)
    }
}


exports.getLastBooking = async (req, res) => {
    try {
        // find last booking of user 
        const [data] = await BookModel.find().sort({_id:-1}).limit(1)
        
        if (data.length === 0) {
            // if no booking found then print this message
            return res.status(200).json({
                message:"No previous Booking found!",
                status:200,
                data:null
            })    
        }
        
        // have any booking then print this message
        return res.status(200).json({
            message:"last booking!",
            status:200,
            data:data
        })
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}