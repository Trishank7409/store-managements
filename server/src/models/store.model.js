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
    slots:{
        type:"Number",
        default:0,
        required:true
      },
    createdBy:{
        type: String, 
        // ref: 'User',
        required: true
    }
},{timestamps:true})

const Store = mongoose.model('Store',storeSchema);

export default Store;