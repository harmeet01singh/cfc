import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    Create,
    SimpleForm,
    TextInput,
    Edit
} from 'react-admin';

export function BlogList(props) {
    return (
        <List {...props} >
            <Datagrid rowClick="edit">
                <TextField source='title' />
                <TextField source='date' />
                <TextField source='content' multiline />
                <TextField source='image' />
                <EditButton basePath='/branches' />
                <DeleteButton basePath='/branches' />
            </Datagrid>
        </List>
    )
}

export function BlogCreate(props) {
    return (
        <Create title='Create Branch' {...props} >
            <SimpleForm>
                <TextInput source='title' />
                <TextInput source='date' />
                <TextInput source='content' multiline />
                <TextInput source='image' />
            </SimpleForm>
        </Create>
    )
}

export function BlogEdit(props) {
    return (
        <Edit undoable={false} title='Edit Branch' {...props} >
            <SimpleForm>
                <TextInput source='title' />
                <TextInput source='date' />
                <TextInput source='content' multiline />
                <TextInput source='image' />
            </SimpleForm>
        </Edit>
    )
}