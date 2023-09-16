import jwt from 'jsonwebtoken'
import { model, Schema } from 'mongoose'
import { comparePassword, hashPassword } from '../utils/passwordUtils'

const userSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Name is required'],
      trim: (value) => value.trim(),
   },
   email: {
      type: String,
      required: [true, 'Email is required'],
      index: true,
      trim: (value) => value.trim(),
      unique: [true, 'Email already exist'],
      validate: {
         validator: function (value) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
               throw new Error('Email is not valid')
            }
         },
      },
   },
   password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      maxlength: 20,
      validate: {
         validator: function (value) {
            if (value.length < 6) {
               throw new Error('Password must be at least 6 characters long')
            } else if (value.length > 20) {
               throw new Error('Password must be at most 20 characters long')
            }
         },
      },
   },
   avatar: {
      type: String,
      default: null,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
})

userSchema.pre('save', async function (next) {
   try {
      if (this.isModified('password')) {
         this.password = await hashPassword(this.password)
      }
      next()
   } catch (err) {
      next(err)
   }
})

userSchema.methods.comparePassword = async function (candidatePassword) {
   try {
      const isMatch = await comparePassword(candidatePassword, this.password)
      return isMatch
   } catch (err) {
      throw new Error(err)
   }
}

userSchema.methods.generateAuthToken = function (expiresIn = '1w') {
   const token = jwt.sign(
      {
         _id: this._id,
      },
      process.env.JWT_SECRET,
      {
         expiresIn,
      }
   )
   return token
}

const UserModel = model('User', userSchema)

UserModel.createIndexes()

export { UserModel }
