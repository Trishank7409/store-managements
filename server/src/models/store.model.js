import mongoose,{Schema} from 'mongoose';

const storeSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    employees:{
        type:Number,
        required:true
    },
    openTime:{
        type:String,
        required:true
    },
    closeTime:{
        type:String,
        required:true
    },
},{timestamps:true})

const Store = mongoose.model('Store',storeSchema);

export default Store;