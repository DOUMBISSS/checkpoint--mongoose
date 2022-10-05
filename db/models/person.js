import mongoose from 'mongoose';

let personSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        unique: true,
        uppercase: true
    },
    age:Number,
    contacts :Array,
    favoriteFoods:[String],
    date: { type: Date, default: Date.now },
})

  export default  mongoose.model('Persons', personSchema)