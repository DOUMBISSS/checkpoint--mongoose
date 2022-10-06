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

// Person.create([
//     {name: 'Doumbia Fode',age:23,email:'fode77doumbia@gmail.com',contacts: ["0777880082","0789800862"],favoriteFoods : ["foutou","pizza","pates","garba"]},

//     {name: 'Kouyate Karim',age:30,email:'kouyate02@gmail.com',contacts: ["0100000"],favoriteFoods : ["Riz gras","sauce auber","pates"]},

//     {name: 'Doumbia Siaka',age:19,email:'doumbia21siaka@gmail.com',contacts: ["0757860082"],favoriteFoods : ["foutou","pizza"]},

//     {name: 'Doumbia Mamadou',age:30,email:'doumbia21Mamadou@gmail.com',contacts: ["0757860082"],favoriteFoods : ["foutou","pizza"]}

// ])



// Person.find().then((person) =>{
//     console.log(person)
// })       

// Person.findOne({favoriteFoods : "pizza"}).then((person) =>{
//     console.log(person)
// })          


// let id = "633ec7b1bf817dec2679768a";
// Person.findById(id).then((person) => {
//         console.log(person)
// })   


// let id = "633ec7b1bf817dec26797688";
// Person.findOneAndUpdate({id}, { $push: { favoriteFoods: 'Hamburger'} }).then((person)=>{
//     console.log(person);
// })    

// let id = ""633ec7b1bf817dec2679768a"";
// Person.findOneAndRemove(id).then((person) => {
//         console.log(person)
// })  


// let id = "633eceb1b85223bca1beac9f";
// Person.remove({'_id' : id}).then((person)=>{
//     console.log(person);
// }); 


// Person.findOneAndUpdate({name :'DOUMBIA FODE'},{ age: 20 } ).then((person)=>{
//     console.log(person);
// })

// Person.find({favoriteFoods : "pizza"}).sort({name :'asc'}).limit(2).select('-age').then((person)=>{
//     console.log(person)
// })