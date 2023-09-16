import { GraphQLError } from 'graphql'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/user.model'

export const authMiddleware = async (tokenValue) => {
   const token = tokenValue ? tokenValue.replace('Bearer ', '') : null

   if (!token) {
      return {
         user: null,
         error: new GraphQLError('Authentication token must be provided in the Authorization header'),
      }
   }

   const { _id } = jwt.verify(token, process.env.JWT_SECRET)
   if (!_id) {
      return {
         user: null,
         error: new GraphQLError('Invalid/Expired token'),
      }
   }
   const user = await UserModel.findById(_id)
   if (!user) {
      return {
         user: null,
         error: new GraphQLError('User not found'),
      }
   }
   return { user, error: null }
}
