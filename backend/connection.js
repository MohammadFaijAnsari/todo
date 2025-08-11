// Connection  With Database
const mongoose=require('mongoose');

const mongo=()=>{mongoose.connect('mongodb://localhost:27017/todo-list')
.then(()=>{
    console.log("MongoDb Connected");
}).catch(err=>{
    console.log("Connection Error",er);
})
}
module.exports=mongo;