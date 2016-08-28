import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ReadItemType = new ObjectType({
  name: 'ReadItem',
  fields: {
    title: { type: new NonNull(StringType) }
  },
});

export default ReadItemType;