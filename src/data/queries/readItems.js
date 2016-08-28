
import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import ReadItemType from '../types/ReadItemType';

import pocketClient from '../../core/pocketClient';

let items = [];

const readItems = {
    type: new List(ReadItemType),
    resolve() {

        //pocketClient.getArchive(pocketConsumerKey, user.accessToken);

        items.push({ title: "x" });
        items.push({ title: "y" });
        items.push({ title: "z" });

        return items;
    },
};

export default readItems;
