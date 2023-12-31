import jwt from 'jsonwebtoken'
import { GraphQLError } from 'graphql'
import { UserModel, IUser } from '../models/user.model'

interface AuthResult {
   user: IUser | null;
   error: GraphQLError | null;
}

export const authMiddleware = async (tokenValue: string | null): Promise<AuthResult> => {
   if (!tokenValue) {
      return {
         user: null,
         error: new GraphQLError('Authentication token must be provided in the Authorization header'),
      };
   }

   try {
      const { _id } = jwt.verify(tokenValue.replace('Bearer ', ''), process.env.JWT_SECRET) as { _id: string };
      if (!_id) {
         return {
            user: null,
            error: new GraphQLError('Invalid/Expired token'),
         };
      }

      const user = await UserModel.findById(_id);
      if (!user) {
         return {
            user: null,
            error: new GraphQLError('User not found'),
         };
      }
      return { user, error: null };
   } catch (error) {
      return {
         user: null,
         error: new GraphQLError('Invalid token format'),
      };
   }
};