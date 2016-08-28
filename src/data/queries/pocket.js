
import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import PocketItemType from '../types/PocketItemType';

let items = [];

const pocket = {
    type: new List(PocketItemType),
    resolve() {

        items.push({ title: "x" });
        items.push({ title: "y" });
        items.push({ title: "z" });

        return items;
    },
};

export default pocket;
