import * as React from 'react';
import { useMediaQuery, Theme, Box, CardContent, Card, Typography } from '@material-ui/core';
import {
  SimpleList,
  List,
  Datagrid,
  EmailField,
  TextField,
  EditButton,
  ShowButton,
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  AutocompleteInput,
  BooleanField,
  required
} from 'react-admin';
import { P } from '@mapbul-pub/utils';
import { ICategoryDTO } from '@mapbul-pub/types';
import { Routes } from '@mapbul-pub/ui';
import { RowLayout } from 'components';
import Poster from './Poster';

export const CategoryList: React.FC = (props: any) => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <List title="All categories" {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: ICategoryDTO) => record.name}
          secondaryText={(record: ICategoryDTO) => record.id}
          tertiaryText={(record: ICategoryDTO) => record.parentId}
        />
      ) : (
          <Datagrid rowClick="edit">
            <TextField source={P<ICategoryDTO>((p) => p.id)} />
            <TextField source={P<ICategoryDTO>((p) => p.name)} />
            <TextField source={P<ICategoryDTO>((p) => p.enName)} />
            <BooleanField source={P<ICategoryDTO>((p) => p.forArticle)} />
            {/* <EditButton />
               <ShowButton /> */}
          </Datagrid>
        )}
    </List>
  );
};

export const CategoryShow: React.FC = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source={P<ICategoryDTO>((p) => p.id)} />
      <TextField source={P<ICategoryDTO>((p) => p.parentId)} />
      <TextField source={P<ICategoryDTO>((p) => p.name)} />
      <TextField source={P<ICategoryDTO>((p) => p.enName)} />
      <DateField label="Added date" source={P<ICategoryDTO>((p) => p.addedDate)} />
    </SimpleShowLayout>
  </Show>
);

const SectionTitle = ({ label }: { label: string }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};

export const CategoryCreate: React.FC = (props: any) => (
  <Create title={''} undoable={false} {...props}>
    <SimpleForm>
      <SectionTitle label="Main" />
      <RowLayout>
        <TextInput disabled source={P<ICategoryDTO>((p) => p.id)} fullWidth />
        <ReferenceInput
          source={P<ICategoryDTO>((p) => p.parentId)}
          reference={Routes.categories}
          perPage={1000}
          fullWidth
        >
          <AutocompleteInput optionText={P<ICategoryDTO>((p) => p.name)} defaultValue="1" />
        </ReferenceInput>
      </RowLayout>
      <RowLayout>
        <TextInput source={P<ICategoryDTO>((p) => p.name)} fullWidth validate={required()} />
        <TextInput source={P<ICategoryDTO>((p) => p.enName)} fullWidth defaultValue="" />
      </RowLayout>
      <BooleanInput source={P<ICategoryDTO>((p) => p.forArticle)} fullWidth defaultValue={false} />
      <SectionTitle label="Photos" />
      <RowLayout>
        <TextInput source={P<ICategoryDTO>((p) => p.icon)} multiline fullWidth validate={required()} />
        <TextInput source={P<ICategoryDTO>((p) => p.pin)} multiline fullWidth validate={required()} />
      </RowLayout>
      <RowLayout>
        <DateInput source={P<ICategoryDTO>((p) => p.addedDate)} fullWidth defaultValue={new Date()} />
        <TextInput source={P<ICategoryDTO>((p) => p.color)} fullWidth validate={required()} />
      </RowLayout>
    </SimpleForm>
  </Create>
);

export const CategoryeEdit: React.FC = (props: any) => {
  console.log(111, props);
  return (
    <Edit title={<div>Hello</div>} undoable={false} {...props}>
      <SimpleForm>
        <Poster />
        <SectionTitle label="Main" />
        <RowLayout>
          <TextInput disabled source={P<ICategoryDTO>((p) => p.id)} fullWidth />
          <ReferenceInput
            source={P<ICategoryDTO>((p) => p.parentId)}
            reference={Routes.categories}
            perPage={1000}
            fullWidth
          >
            {/* <SelectInput optionText={P<ICategoryDTO>((p) => p.name)} /> */}
            <AutocompleteInput optionText={P<ICategoryDTO>((p) => p.name)} />
          </ReferenceInput>
        </RowLayout>
        <RowLayout>
          <TextInput source={P<ICategoryDTO>((p) => p.name)} fullWidth />
          <TextInput source={P<ICategoryDTO>((p) => p.enName)} fullWidth />
        </RowLayout>
        <BooleanInput source={P<ICategoryDTO>((p) => p.forArticle)} fullWidth />
        <SectionTitle label="Photos" />
        <RowLayout>
          {/* <img style={{ maxWidth: '100%' }} src={item.titlePhoto} title={item.title} alt="" /> */}
          <TextInput source={P<ICategoryDTO>((p) => p.pin)} multiline fullWidth validate={required()} />
        </RowLayout>
        <RowLayout>
          <TextInput source={P<ICategoryDTO>((p) => p.icon)} multiline fullWidth />
          <TextInput source={P<ICategoryDTO>((p) => p.pin)} multiline fullWidth />
        </RowLayout>
        <RowLayout>
          <DateInput source={P<ICategoryDTO>((p) => p.addedDate)} fullWidth />
          <TextInput source={P<ICategoryDTO>((p) => p.color)} fullWidth />
        </RowLayout>
      </SimpleForm>
    </Edit>
  )
};
