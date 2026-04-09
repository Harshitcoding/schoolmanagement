const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    dueDate: { type: Date },
    completed: { type: Boolean, default: false },
    subject: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
