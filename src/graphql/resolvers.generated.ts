/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated'
import { AuthData } from './schema/resolvers/AuthData'
import { login as Mutation_login } from './schema/resolvers/Mutation/login'
import { register as Mutation_register } from './schema/resolvers/Mutation/register'
import { me as Query_me } from './schema/resolvers/Query/me'
import { RegisterResponse } from './schema/resolvers/RegisterResponse'
import { User } from './schema/resolvers/User'
import { DateTimeResolver } from 'graphql-scalars'
export const resolvers: Resolvers = {
   Query: { me: Query_me },
   Mutation: { login: Mutation_login, register: Mutation_register },

   AuthData: AuthData,
   RegisterResponse: RegisterResponse,
   User: User,
   DateTime: DateTimeResolver,
}
