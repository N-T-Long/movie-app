const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  gender: {
    type: String,
    enum: ["Nam", "Nữ", "Khác"],
  },
  birhtday: Date,
  phone: String,
  email: {
    type: String,
    required: true,
  },
  URL_avatar: String,
  like_film: [
    {
      film_ID: {
        type: mongoose.Types.ObjectId,
        ref: "films",
      },
    },
  ],
  follow_film: [
    {
      film_ID: {
        type: mongoose.Types.ObjectId,
        ref: "films",
      },
    },
  ],
  viewed_film: [
    {
      film_ID: {
        type: mongoose.Types.ObjectId,
        ref: "films",
      },
    },
  ],
  role: {
    type: String,
    required: true,
    default: "User",
    enum: ["User", "Admin"],
  },
  create_at: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", UserSchema);
