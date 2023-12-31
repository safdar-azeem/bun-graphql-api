import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: { input: string; output: string | number }
   String: { input: string; output: string }
   Boolean: { input: boolean; output: boolean }
   Int: { input: number; output: number }
   Float: { input: number; output: number }
   DateTime: { input: Date | string; output: Date | string }
}

export type AuthData = {
   __typename?: 'AuthData'
   token: Scalars['String']['output']
}

export type Mutation = {
   __typename?: 'Mutation'
   login?: Maybe<AuthData>
   register?: Maybe<RegisterResponse>
}

export type MutationLoginArgs = {
   email: Scalars['String']['input']
   password: Scalars['String']['input']
}

export type MutationRegisterArgs = {
   email?: InputMaybe<Scalars['String']['input']>
   name?: InputMaybe<Scalars['String']['input']>
   password?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
   __typename?: 'Query'
   me?: Maybe<User>
}

export type RegisterResponse = {
   __typename?: 'RegisterResponse'
   message: Scalars['String']['output']
}

export type User = {
   __typename?: 'User'
   _id: Scalars['ID']['output']
   avatar?: Maybe<Scalars['String']['output']>
   createdAt?: Maybe<Scalars['DateTime']['output']>
   name: Scalars['String']['output']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
   resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
   | ResolverFn<TResult, TParent, TContext, TArgs>
   | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
   subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
   resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
   subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
   resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
   | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
   | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
   | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
   | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
   parent: TParent,
   context: TContext,
   info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
   obj: T,
   context: TContext,
   info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
   next: NextResolverFn<TResult>,
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
   AuthData: ResolverTypeWrapper<AuthData>
   String: ResolverTypeWrapper<Scalars['String']['output']>
   DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
   Mutation: ResolverTypeWrapper<{}>
   Query: ResolverTypeWrapper<{}>
   RegisterResponse: ResolverTypeWrapper<RegisterResponse>
   User: ResolverTypeWrapper<User>
   ID: ResolverTypeWrapper<Scalars['ID']['output']>
   Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
   AuthData: AuthData
   String: Scalars['String']['output']
   DateTime: Scalars['DateTime']['output']
   Mutation: {}
   Query: {}
   RegisterResponse: RegisterResponse
   User: User
   ID: Scalars['ID']['output']
   Boolean: Scalars['Boolean']['output']
}

export type AuthDataResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['AuthData'] = ResolversParentTypes['AuthData'],
> = {
   token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
   name: 'DateTime'
}

export type MutationResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
   login?: Resolver<
      Maybe<ResolversTypes['AuthData']>,
      ParentType,
      ContextType,
      RequireFields<MutationLoginArgs, 'email' | 'password'>
   >
   register?: Resolver<
      Maybe<ResolversTypes['RegisterResponse']>,
      ParentType,
      ContextType,
      Partial<MutationRegisterArgs>
   >
}

export type QueryResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
   me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
}

export type RegisterResponseResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse'],
> = {
   message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
   ContextType = any,
   ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
   _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
   avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
   AuthData?: AuthDataResolvers<ContextType>
   DateTime?: GraphQLScalarType
   Mutation?: MutationResolvers<ContextType>
   Query?: QueryResolvers<ContextType>
   RegisterResponse?: RegisterResponseResolvers<ContextType>
   User?: UserResolvers<ContextType>
}
