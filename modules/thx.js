const mongoose=require("mongoose");
const requiredString={
  type:String,
  required:true
}
const thxShema=new mongoose.Schema({
  ID:requiredString,
  Thxs:{type:Number,required:true}
  
})
const thxmodule=mongoose.model("ThxSystem",thxShema)
module.exports=thxmodule