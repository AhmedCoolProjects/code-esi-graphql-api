import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    profession: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://firebasestorage.googleapis.com/v0/b/codeesi.appspot.com/o/persons%2Favatardefault_92824.png?alt=media&token=42a28eda-0172-4f9f-b6d4-f3ed3a5808a1",
    },
    category: {
      type: String,
      required: true,
      enum: ["board", "member", "guest"],
    },
    post: {
      type: String,
      required: true,
      enum: ["prof", "student", "laureate", "other"],
    },
    is_hidden: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Person = mongoose.model("persons", PersonSchema);
export default Person;
