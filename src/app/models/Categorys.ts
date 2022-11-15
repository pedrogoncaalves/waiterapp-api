import { model, Schema} from 'mongoose';


export const Category = model('Category', new Schema({
    icon: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true

    }
}));
