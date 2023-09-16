import { YogaInitialContext, createSchema, createYoga } from 'graphql-yoga'
import { typeDefs } from './graphql/typeDefs.generated'
import { resolvers } from './graphql/resolvers.generated'
import { connectToMongoDB } from './config/connectDB.config'
import { authMiddleware } from './middleware/auth.middleware'

const yoga = createYoga({
   schema: createSchema({ typeDefs, resolvers }),
   context: async (context: YogaInitialContext) => {
      const { user, error } = await authMiddleware(context.request.headers.get('authorization'))
      return { user, error }
   },
})

await connectToMongoDB()

// @ts-ignore
const server = Bun.serve(yoga)

console.info(
   `Server is running on ${new URL(yoga.graphqlEndpoint, `http://${server.hostname}:${server.port}`)}`
)
