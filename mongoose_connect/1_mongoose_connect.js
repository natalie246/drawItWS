var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://drawIt:dbpass@ds037622.mongolab.com:37622/dbdrawit');
var salarySchema = require('./schema_salary').salarySchema;
var salarySchema2 = require('./schema_salary2').salarySchema2;
var Classes = mongoose.model('Salary',salarySchema);
var Classes2 = mongoose.model('Salary2',salarySchema2);

// function updateGirls(callback)
// {
//   var girls = [];
//   var query_female = User.find().where('gender','female');
//   query_female.exec(function(err,female_result)
//   {  
//     callback(female_result);   
//   });
// }

function answer1(newUser,callback){ 

  console.log("im in answer1 function");

      var class_data = JSON.parse(newUser);
            var newtable = new Classes({
             lower_class: class_data['lower_class'],
             second_class: class_data['second_class'],
             third_class: class_data['third_class'],
             fourth_class: class_data['fourth_class'],
             fifth_class: class_data['fifth_class'],
             sixth_class: class_data['sixth_class'],
             seventh_class: class_data['seventh_class'],
             eighth_class: class_data['eighth_class'],
             ninth_class:class_data['ninth_class'],
             upper_class: class_data['upper_class'],
            });

    console.log("newtable1111111:  "+newtable);

    newtable.save(function (err, doc) {
                      if(err){
                          if(err.code == 11000){
                              console.log('duplicate');
                          }  
                      }
                      else{
                          // console.log('doc',doc);
                      }
                });
                 callback("succses");   
}; 
    

var answer2 = function(newUser,callback){ 

  console.log("im in answer2 function");

      var class_data = JSON.parse(newUser);
            var newtable = new Classes2({
             lower_class: class_data['lower_class'],
             second_class: class_data['second_class'],
             third_class: class_data['third_class'],
             fourth_class: class_data['fourth_class'],
             fifth_class: class_data['fifth_class'],
             sixth_class: class_data['sixth_class'],
             seventh_class: class_data['seventh_class'],
             eighth_class: class_data['eighth_class'],
             ninth_class:class_data['ninth_class'],
             upper_class: class_data['upper_class'],
            });

    //console.log(newtable);

    newtable.save(function (err, doc) {
                      if(err){
                          if(err.code == 11000){
                              console.log('duplicate');
                          }  
                      }
                      else{
                          // console.log('doc',doc);
                      }
                });
                callback("succses");   

}; 

exports.answer1 = answer1;
exports.answer2 = answer2;



// exports.updateGirls = updateGirls;





            // mongoose.connection.once('open', function(){

            //       console.log("im in mongooooooo");


            //         newtable.save(function(err, doc){
            //           console.log("\nSaved document " + doc);
            //           mongoose.disconnect();
            //         });
              

            // });


// var myNewUser = [];

//                 myNewUser[i] = new User({
//                                        lower_class:newUser.data[i].lower_class,
//                                         second_class:newUser.data[i].second_class,
//                                         third_class:newUser.data[i].third_class,
//                                         fourth_class:newUser.data[i].fourth_class,
//                                          fifth_class:newUser.data[i].fifth_class,
//                                         second_class:newUser.data[i].second_class,
//                                         third_class:newUser.data[i].third_class,
//                                         fourth_class:newUser.data[i].fourth_class,
                     
//                                     });
//                 console.log("newUser.data[0].lower_class:   " + newUser.data[0].lower_class);

                // myNewUser[i].save(function (err, doc) {
                //       if(err){
                //           if(err.code == 11000){
                //               console.log('duplicate');
                //           }  
                //       }
                //       else{
                //           // console.log('doc',doc);
                //       }
                // });



// mongoose.connection.once('open', function(){
     
//     var newtable = new Classes({
// 		    lower_class: "3%",
// 			second_class: "3%",
// 			third_class: "3%",
// 			fourth_class: "3%",
// 			fifth_class: "3%",
// 			sixth_class: "3%",
// 			seventh_class: "3%",
// 			eighth_class: "3%",
// 			ninth_class: "3%",
// 			upper_class: "3%" 
//     });

//     	console.log("new:  " + newtable.isNew);

//     	newtable.save(function(err, doc){
//     		console.log("\nSaved document " + doc);
//     		mongoose.disconnect();
//     	});

// });  



// var userSchema = require('./schema_user').userSchema;
// var User = mongoose.model('UserM', userSchema);

// // var query = User.find();
// // query.where(newUser.data.id);
// // query.exec(function(err, user){
// //   if(!user){
   
 
// var addUser = function(newUser){ //newUser is a fb object 
// var myNewUser = [];
// var theUserExist = null;
//     for(var i=0; i<newUser.data.length; i++)
//     {
//               if(newUser.data[i].gender != null)
//             {
//               //console.log(myNewUser);
//                 myNewUser[i] = new User({name:newUser.data[i].name,
//                                         id:newUser.data[i].id,
//                                         gender:newUser.data[i].gender,
//                                         picture:newUser.data[i].picture.data.url,
//                                         age: "22",
//                                         location: "Ramat-Gan",
//                                         education: "Shenkar"
//                                     });

//                 myNewUser[i].save(function (err, doc) {
//                       if(err){
//                           if(err.code == 11000){
//                               console.log('duplicate');
//                           }  
//                       }
//                       else{
//                           // console.log('doc',doc);
//                       }
//                 });
//             } 
//     }

// }; 
    
         
// function updateGirls(callback)
// {
//   var girls = [];
//   var query_female = User.find().where('gender','female');
//   query_female.exec(function(err,female_result)
//   {  
//     callback(female_result);   
//   });
// }

//   function updateBoys(callback)
// {
//   var boys = [];
//   var query_male = User.find().where('gender','male');
//   query_male.exec(function(err,male_result)
//   {
//     callback(male_result); 
//   });
// }
  

// exports.addUser = addUser;
// exports.updateGirls = updateGirls;
// exports.updateBoys = updateBoys;



// /////////////////////////////////////////////////////////////////////////////////////////////
