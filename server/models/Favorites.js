const{ Schema, model } = require("mongoose")


const favoriteScehma = new Schema ({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    picture: {
        type: Schema.Types.ObjectId,
        ref: "Picture"
    }
})

const Favorite = model("Favorite", favoriteScehma);

module.exports = Favorite