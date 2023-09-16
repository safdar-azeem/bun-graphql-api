import type { QueryResolvers } from './../../../types.generated'
export const me: NonNullable<QueryResolvers['me']> = async (_parent, _arg, { user, error }) => {
   if (error) throw error
   return user
}
