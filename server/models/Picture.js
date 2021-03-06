const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },

    text: {
      type: String,
      trim: true,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },

    imagelink: {
      type: String,
      required: true,
      trim: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    favorited: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
pictureSchema.virtual("commentcount").get(function () {
  return this.comments.length;
});

pictureSchema.virtual("favcount").get(function () {
  return this.favorited.length;
});

const Picture = model("Picture", pictureSchema);

module.exports = Picture;
