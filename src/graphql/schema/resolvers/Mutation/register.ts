import { GraphQLError } from 'graphql'
import { UserModel } from '../../../../models/user.model'
import type { MutationResolvers } from './../../../types.generated'

export const register: NonNullable<MutationResolvers['register']> = async (
   _parent,
   { name, email, password }
) => {
   try {
      const user = await UserModel.create({ name, email, password })
      return { message: `User ${user.name} created successfully` }
   } catch (err) {
      if (err.code === 11000) {
         throw new GraphQLError('Email already exists')
      }
      throw new GraphQLError(err.message)
   }
}
