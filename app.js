import Database from "./db/Database.js";
import person from "./db/models/person.js";
import Person from './db/models/person.js';


const database = new Database();


// const person =  new Person({
//     name: 'Doumbia Fode',
//     age:23,
//     email:'fode77doumbia@gmail.com',
//     contacts: ["0777880082","0789800862"],
//     favoriteFoods : ["foutou","pizza","pates","garba"]
// }).save()
// .then(doc => {
//   console.log('Person added to your database')
// })
// .catch(err => {
//   console.error(err)
// });

Person.create([
    {name: 'Doumbia Fode',age:23,email:'fode77doumbia@gmail.com',contacts: ["0777880082","0789800862"],favoriteFoods : ["foutou","pizza","pates","garba"]},

    {name: 'Kouyate Karim',age:30,email:'kouyate02@gmail.com',contacts: ["0100000"],favoriteFoods : ["Riz gras","sauce auber","pates"]},

    {name: 'Doumbia Siaka',age:19,email:'doumbia21siaka@gmail.com',contacts: ["0757860082"],favoriteFoods : ["foutou","pizza"]}

])



// Person.find().then((person) =>{
//     console.log(person)
// })       /////////

// Person.findOne({favoriteFoods : "pizza"}).then((person) =>{
//     console.log(person)
// })           /////////


// let id = '633ca97f2d84f8811886d2b5';
// Person.findById(id).then((person) => {
//         console.log(person)
// })    /////////////


// let id = '633dffd9863fc2fd308cced3';
// Person.findOneAndUpdate({id}, { $push: { favoriteFoods: ['Hamburger']  } }).then((person)=>{
//     console.log(person);
// })    /////////


// Person.findOneAndRemove(id,
//     function (error, success) {
//          if (error) {
//              console.log(error);
//          } else {
//              console.log(success);
//          }
//      });   /////////  


// let id = '633e03575da6a21a595970e7';
// Person.remove({id}).then((person)=>{
//     console.log(person);
// });   /////////////



// let id = '33ca97f2d84f8811886d2b4';
// Person.findByIdAndUpdate(id,age: { $gte: 18 },{ $push: { favoriteFoods: ['Hamburger']}}).then((person)=>{
//     console.log(person);
// })