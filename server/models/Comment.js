const {Schema,model} = require("mongoose")

const commentSchema = new Schema ({
      
    commentText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    commentAuthor: {
      
      type: Schema.Types.ObjectId,
      ref: "User"
      
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Picture"
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  
})

const Comments = model("Comments", commentSchema)

module.exports = Comments