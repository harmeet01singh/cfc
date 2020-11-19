import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { BranchList, BranchCreate, BranchEdit } from './Branches';

const AdminDash = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:5000')}>
            <Resource name='branches' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            {/* <Resource name='blogs' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='events' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='campaigns' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='newsletter' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='financials' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='reviews' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='donations' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='volunteer' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='handin' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='help' list={BranchList} create={BranchCreate} edit={BranchEdit} />
            <Resource name='feedback' list={BranchList} create={BranchCreate} edit={BranchEdit} /> */}
        </Admin>
    )
}

export default AdminDash;
