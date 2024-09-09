const {mongoose,mongoClient,ServerAoiVersion}=require('mongoose')
const url='localhost:27017/stbBase'
const connectDB=async()=>{
    try{   
        let connect =await mongoose.connect(url)
        console.log('MongoDB Connected...')
        return connect
    }catch(e)
    {   
        console.log(e)
    }
}
module.exports=connectDB