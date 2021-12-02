const{ Schema, model } = require("mongoose")


const favoriteScehma = new Schema ({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    pictures: {
        type: Schema.Types.ObjectId,
        ref: "Picture"
    }
})

const Favorite = model("Favorite", favoriteScehma);

module.exports = Favorite