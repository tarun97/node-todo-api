// const mongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server successfully');

  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed:'false'
  // },(err,res)=>{
  //   if(err){
  //     return console.log('unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });
  // db.collection('User').insertOne({
  //   name:'tarun',
  //   age:'21',
  //   location:'delhi'
  // },(err,res)=>{
  //   if(err){
  //     return console.log('unable to connect to mongodb server');
  //   }
  //
  //   console.log(res.ops[0]._id.getTimestamp());
  // });
  db.close();
});
