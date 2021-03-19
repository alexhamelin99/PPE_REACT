const mongoose = require("mongoose")

const uri ="mongodb+srv://LorenzoRipault:1234@cluster0.8dnfs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri);



mongoose.connection.once('open',function(){
    console.log('Conncetion has been made');
}).on('error',function(error){
    console.log('Connection error:',error)
});