import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  parentName: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  grade: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
