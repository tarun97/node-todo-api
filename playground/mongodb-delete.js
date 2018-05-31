// const mongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongodb server');
  }
  //deleteMany
  // db.collection('Todos').deleteMany({text:"eat lunch"}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:"eat lunch"}).then((result)=>{
  //   console.log(result);
  // })

  //findoneanddelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //   console.log(result);
    // })
    // 
    // db.collection('User').deleteMany({name:"tarun"}).then((res)=>{
    //   console.log(res);
    // });

    db.collection('User').findOneAndDelete({
      _id:new ObjectID("5b0ee81ae6faf61da01af026")
    }).then((result)=>{
      console.log(result);
    });
//  db.close();
});
