import { GraphQLError } from 'graphql'
import { UserModel } from '../../../../models/user.model'
import type { MutationResolvers } from './../../../types.generated'

export const login: NonNullable<MutationResolvers['login']> = async (_parent, { email, password }, _ctx) => {
   try {
      const user = await UserModel.findOne({ email })

      if (!user) {
         throw new GraphQLError('User not found')
      }

      const isMatch = await user.comparePassword(password)
      if (!isMatch) {
         throw new GraphQLError('Password is incorrect')
      }

      const token = user.generateAuthToken()

      return { token }
   } catch (err) {
      throw new GraphQLError(err.message)
   }
}
