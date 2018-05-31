// const mongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongodb server');
  }

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b0fa428621c43ab3d200c7d")
  // },{
  //   $set:{
  //   completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });
  db.collection('User').findOneAndUpdate({
    _id:new ObjectID("5b0ee80fe4978712f0683a1a")
  },{
    $set:{
      name:'tar'
    },$inc:{
      age :1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  });
//  db.close();
});
