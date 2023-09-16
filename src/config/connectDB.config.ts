import mongoose from 'mongoose'

const db = Bun.env.MONGODB_URI

export const connectToMongoDB = async () => {
   try {
      mongoose.set('strictQuery', false)
      await mongoose.connect(db, {
         autoIndex: true,
      })
      console.log('MongoDB connected....')
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}
