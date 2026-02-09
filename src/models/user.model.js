// import mongoose from "mongoose";
// // import { required } from "zod/mini";
// export default mongoose.model("User", userSchema);

// const userSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     age: Number,
//     isActive: {
//         type: Boolean,
//         default: true,
//     },
// },
//     { timestamps: true },

// );



import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: Number,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

