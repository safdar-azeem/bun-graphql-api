import jwt from 'jsonwebtoken';
import { model, Schema, Document } from 'mongoose';
import { User as GeneratedUser } from '../graphql/types.generated';
import { comparePassword, hashPassword } from '../utils/passwordUtils';

interface IUser extends Omit<GeneratedUser, '_id'>, Document {
   email: string;
   password: string;
   comparePassword(candidatePassword: string): Promise<boolean>;
   generateAuthToken(expiresIn?: string): string;
}

const userSchema = new Schema<IUser>({
   name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
   },
   email: {
      type: String,
      required: [true, 'Email is required'],
      index: true,
      trim: true,
      unique: true,
      validate: {
         validator: function (value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
         },
         message: 'Email is not valid',
      },
   },
   password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      maxlength: [20, 'Password must be at most 20 characters long'],
   },
   avatar: {
      type: String,
      default: null,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

userSchema.pre<IUser>('save', async function (next) {
   if (this.isModified('password')) {
      try {
         this.password = await hashPassword(this.password);
         next();
      } catch (err) {
         next(err);
      }
   } else {
      next();
   }
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
   try {
      const isMatch = await comparePassword(candidatePassword, this.password);
      return isMatch;
   } catch (err) {
      throw new Error(err);
   }
};

userSchema.methods.generateAuthToken = function (expiresIn = '1w'): string {
   const token = jwt.sign(
      {
         _id: this._id,
      },
      process.env.JWT_SECRET,
      {
         expiresIn,
      }
   );
   return token;
};

const UserModel = model<IUser>('User', userSchema);

UserModel.createIndexes();

export { UserModel };