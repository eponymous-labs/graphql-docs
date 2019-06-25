// @flow

import React from 'react';

import { SchemaDocsView } from './components/SchemaDocsView';
import { Schema } from './model';


export class GraphQLDocs extends React.Component {
    shouldComponentUpdate(nextProps){
        return this.props.schema !== nextProps.schema
    }

    render() {
        return <SchemaDocsView schema={new Schema(this.props.schema)} />;
    }
}
