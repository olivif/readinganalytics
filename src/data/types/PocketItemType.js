import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PocketItemType = new ObjectType({
  name: 'PocketItem',
  fields: {
    title: { type: new NonNull(StringType) }
  },
});

export default PocketItemType;