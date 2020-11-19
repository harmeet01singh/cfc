import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin';

export function DonationList(props) {
    return (
        <List {...props} >
            <Datagrid rowClick="edit">
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='manager' />
                <TextField source='mail' />
                <EditButton basePath='/branches' />
                <DeleteButton basePath='/branches' />
            </Datagrid>
        </List>
    )
}