const mongoose=require("mongoose")
const uuidv1=require("uuidv1")
const crypto=require("crypto")
// bcrypt

const userSchema=new mongoose.Schema({
username:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
},
hashed_password:{
    type:String,
    required:true,
},
salt:String,
role:{
    type:Boolean,
    default:false
},
isVerified:{
    type:Boolean,
    default:false
}


},{timestamps:true})

userSchema.virtual('password')
.set(function(password){
    this.salt=uuidv1()
    this.hashed_password=this.encryptpw(password)

})

userSchema.methods={
    encryptpw:function(password){
        if(password==""){
            return ""
        }
        try{
            return this.hashed_password=crypto.createHmac('sha256',this.salt).update('password').digest('hex')
        }
        catch{
            return ""
        }
    },
    authenticate:function(password){
        return this.hashed_password===this.encryptpw(password)
    }
}
module.exports=mongoose.model('User',userSchema)
