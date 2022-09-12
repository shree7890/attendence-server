const { model, Schema } = require("mongoose");

const adminSchema = new Schema(
  {
    timeLimit: {
      type: Number,
      required: true,
      max: 30,
      min: 5,
      default: 5,
    },
    status: {
      type: String,
      required: true,
      enum: ["RUNNING", "COMPLETED"],
      default: "RUNNING",
    },
  },
  { timestamps: true }
);

const AdminAttendence = model("AdminAttendence", adminSchema);
module.exports = AdminAttendence;
