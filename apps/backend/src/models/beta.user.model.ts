import mongoose from 'mongoose';

const betaUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: false },
    betaAccess: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const betaUser = mongoose.model('betaUser', betaUserSchema);

export default betaUser;
