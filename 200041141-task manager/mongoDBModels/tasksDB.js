const mongoose = require("mongoose");


const getFirstCollection = new mongoose.Schema({
    taskName:{
        type:String,
        Date : Date,
       required : true,
    }
})


module.exports = mongoose.model("Task",getFirstCollection);