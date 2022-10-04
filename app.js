import Database from "./db/Database.js";
import Person from './db/models/person.js';


const database = new Database();


// const person =  new Person({
//     name: 'Doumbia Fode',
//     age:23,
//     email:'fode77doumbia@gmail.com',
//     contacts: ["0777880082","0789800862"],
//     favoriteFoods : ["foutou","pizza","pates"]
// }).save()
// .then(doc => {
//   console.log('Person added to your database')
// })
// .catch(err => {
//   console.error(err)
// });

// Person.create([
//     {name: 'Doumbia Fode',age:23,email:'fode77doumbia@gmail.com',contacts: ["0777880082","0789800862"],favoriteFoods : ["foutou","pizza","pates","garba"]},

//     {name: 'Kouyate Karim',age:30,email:'kouyate02@gmail.com',contacts: ["0100000"],favoriteFoods : ["Riz gras","sauce auber","pates"]},

//     {name: 'Doumbia Siaka',age:19,email:'doumbia21siaka@gmail.com',contacts: ["0757860082"],favoriteFoods : ["foutou","pizza"]}

// ]), function (err) {
//     if (err) return handleError(err);
//   };


// Person.find({favoriteFoods : {$all :['garba','pizza','foutou']}}, (error , data)=>{
//     if (error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

// Person.findById({_id:'33ca97f2d84f8811886d2b4'},(error , data) => {
//     if (error){
//         console.log(error)
//     }
//     else {
//         console.log(data )
//     }
// });