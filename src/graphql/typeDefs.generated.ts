import type { DocumentNode } from 'graphql'
export const typeDefs = {
   kind: 'Document',
   definitions: [
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
         interfaces: [],
         directives: [],
         fields: [],
         loc: { start: 0, end: 10 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 17, end: 25 } },
         interfaces: [],
         directives: [],
         fields: [],
         loc: { start: 12, end: 25 },
      },
      {
         kind: 'ScalarTypeDefinition',
         name: { kind: 'Name', value: 'DateTime', loc: { start: 34, end: 42 } },
         directives: [],
         loc: { start: 27, end: 42 },
      },
      {
         kind: 'ObjectTypeExtension',
         name: { kind: 'Name', value: 'Query', loc: { start: 55, end: 60 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'me', loc: { start: 65, end: 67 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'User', loc: { start: 69, end: 73 } },
                  loc: { start: 69, end: 73 },
               },
               directives: [],
               loc: { start: 65, end: 73 },
            },
         ],
         loc: { start: 43, end: 75 },
      },
      {
         kind: 'ObjectTypeExtension',
         name: { kind: 'Name', value: 'Mutation', loc: { start: 89, end: 97 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'register', loc: { start: 102, end: 110 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'name', loc: { start: 111, end: 115 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 117, end: 123 } },
                        loc: { start: 117, end: 123 },
                     },
                     directives: [],
                     loc: { start: 111, end: 123 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'email', loc: { start: 125, end: 130 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 132, end: 138 } },
                        loc: { start: 132, end: 138 },
                     },
                     directives: [],
                     loc: { start: 125, end: 138 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'password', loc: { start: 140, end: 148 } },
                     type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String', loc: { start: 150, end: 156 } },
                        loc: { start: 150, end: 156 },
                     },
                     directives: [],
                     loc: { start: 140, end: 156 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'RegisterResponse', loc: { start: 159, end: 175 } },
                  loc: { start: 159, end: 175 },
               },
               directives: [],
               loc: { start: 102, end: 175 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'login', loc: { start: 178, end: 183 } },
               arguments: [
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'email', loc: { start: 184, end: 189 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 191, end: 197 } },
                           loc: { start: 191, end: 197 },
                        },
                        loc: { start: 191, end: 198 },
                     },
                     directives: [],
                     loc: { start: 184, end: 198 },
                  },
                  {
                     kind: 'InputValueDefinition',
                     name: { kind: 'Name', value: 'password', loc: { start: 200, end: 208 } },
                     type: {
                        kind: 'NonNullType',
                        type: {
                           kind: 'NamedType',
                           name: { kind: 'Name', value: 'String', loc: { start: 210, end: 216 } },
                           loc: { start: 210, end: 216 },
                        },
                        loc: { start: 210, end: 217 },
                     },
                     directives: [],
                     loc: { start: 200, end: 217 },
                  },
               ],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'AuthData', loc: { start: 220, end: 228 } },
                  loc: { start: 220, end: 228 },
               },
               directives: [],
               loc: { start: 178, end: 228 },
            },
         ],
         loc: { start: 77, end: 230 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'RegisterResponse', loc: { start: 237, end: 253 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'message', loc: { start: 258, end: 265 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 267, end: 273 } },
                     loc: { start: 267, end: 273 },
                  },
                  loc: { start: 267, end: 274 },
               },
               directives: [],
               loc: { start: 258, end: 274 },
            },
         ],
         loc: { start: 232, end: 276 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'AuthData', loc: { start: 283, end: 291 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'token', loc: { start: 296, end: 301 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 303, end: 309 } },
                     loc: { start: 303, end: 309 },
                  },
                  loc: { start: 303, end: 310 },
               },
               directives: [],
               loc: { start: 296, end: 310 },
            },
         ],
         loc: { start: 278, end: 312 },
      },
      {
         kind: 'ObjectTypeDefinition',
         name: { kind: 'Name', value: 'User', loc: { start: 319, end: 323 } },
         interfaces: [],
         directives: [],
         fields: [
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: '_id', loc: { start: 328, end: 331 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'ID', loc: { start: 333, end: 335 } },
                     loc: { start: 333, end: 335 },
                  },
                  loc: { start: 333, end: 336 },
               },
               directives: [],
               loc: { start: 328, end: 336 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'name', loc: { start: 339, end: 343 } },
               arguments: [],
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'String', loc: { start: 345, end: 351 } },
                     loc: { start: 345, end: 351 },
                  },
                  loc: { start: 345, end: 352 },
               },
               directives: [],
               loc: { start: 339, end: 352 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'avatar', loc: { start: 355, end: 361 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 363, end: 369 } },
                  loc: { start: 363, end: 369 },
               },
               directives: [],
               loc: { start: 355, end: 369 },
            },
            {
               kind: 'FieldDefinition',
               name: { kind: 'Name', value: 'createdAt', loc: { start: 372, end: 381 } },
               arguments: [],
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'DateTime', loc: { start: 383, end: 391 } },
                  loc: { start: 383, end: 391 },
               },
               directives: [],
               loc: { start: 372, end: 391 },
            },
         ],
         loc: { start: 314, end: 393 },
      },
   ],
   loc: { start: 0, end: 394 },
} as unknown as DocumentNode
