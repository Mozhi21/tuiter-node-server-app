import mongoose from 'mongoose';
const schema = mongoose.Schema({
    username: String,
    handle:String,
    tuit: String,
    time:String,
    replies:Number,
    likes: Number,
    dislikes:Number,
    retuits:Number,
    image:String,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;
