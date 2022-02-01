import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    facebook_link: {
      type: String,
    },
    instagram_link: {
      type: String,
    },
    website_link: {
      type: String,
    },
    president: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
      required: true,
    },
    members: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Person",
        },
      ],
    },

    image: {
      type: String,
      required: true,
      default:
        "https://firebasestorage.googleapis.com/v0/b/codeesi.appspot.com/o/others%2Forganisation%20organigramme_3.jpg?alt=media&token=aedeb291-db4b-495f-a2db-416a8db850b9",
    },
    description: {
      type: String,
      required: true,
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

const Organization = mongoose.model("organizations", OrganizationSchema);
export default Organization;
