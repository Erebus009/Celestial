const { Schema, model } = require("mongoose");

const pictureSchema = new Schema({
  pictureAuthor: {
    type: String,
    trim: true,
    required: true,
  },
  title:{
    type:String,
    trim: true,
    required: true
  },

  text: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now()
  },
  
  imagelink : {
    type: String,
    required: true,
    trim: true
  },
  comments:[
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
  

});

const Picture = model("Picture", pictureSchema);

module.exports = Picture;
