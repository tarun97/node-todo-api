// const mongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongodb server');
  }
  // console.log('connected to mongodb server successfully');
  // db.collection('Todos').find({
  //  _id:new ObjectID('5b0f9414621c43ab3d2008c2')
  // }).toArray().then((doc)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(doc,undefined,2));
  // },(err)=>{
  //   console.log('unable to find object');
  // });
  db.collection('User').find({name:'tarun'}).toArray( ).then((doc)=>{
    console.log(`Users`);
    console.log(JSON.stringify(doc,undefined,2));
  },(err)=>{
    console.log('unable to find object');
  });
//  db.close();
});
