import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://firebasestorage.googleapis.com/v0/b/codeesi.appspot.com/o/others%2Fcodeesi.png?alt=media&token=9c69076c-3a0a-4d79-b48d-a0a0749b499a",
    },
    date: {
      type: Date,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
      required: true,
    },
    participants: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Person",
        },
      ],
    },
    organizers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Person",
        },
      ],
    },
    is_hidden: {
      type: Boolean,
      default: false,
    },
    youtube_link: {
      type: String,
    },
    github_link: {
      type: String,
    },
    facebook_link: {
      type: String,
    },
    competition_link: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    destination: {
      type: String,
    },
    destination_link: {
      type: String,
    },
    report: {
      type: String,
    },
    axes: {
      type: [String],
    },
    tags: {
      type: [String],
    },
    collaborators: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Organization",
        },
      ],
    },
    images: {
      type: [String],
    },
    category: {
      type: String,
      required: true,
      enum: [
        "competition",
        "visit",
        "collaboration",
        "meeting",
        "training",
        "project",
        "news",
        "gaming",
        "form",
        "other",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("activities", ActivitySchema);
export default Activity;
