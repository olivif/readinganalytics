
import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import PocketItemType from '../types/PocketItemType';

import pocketClient from '../../core/pocketClient';

let items = [];

const pocket = {
    type: new List(PocketItemType),
    resolve() {

        //pocketClient.getArchive(pocketConsumerKey, user.accessToken);

        items.push({ title: "x" });
        items.push({ title: "y" });
        items.push({ title: "z" });

        return items;
    },
};

export default pocket;
