import * as React from 'react';
import { Box } from '@material-ui/core';
import {
   List,
   TextField,
   Show,
   SimpleShowLayout,
   DateField,
   SimpleForm,
   TextInput,
   DateTimeInput,
   ReferenceInput,
   BooleanInput,
   AutocompleteInput,
   BooleanField,
   required
} from 'react-admin';
import { P } from '@mapbul-pub/utils';
import { Routes } from '@mapbul-pub/ui';
import { SortedGrid, PosterInput } from 'components';
import { RowLayout, SectionTitle } from 'ui';
import { withCreatePage, withEditPage } from 'hocs';
import { ICategoryDTOEx } from 'interfaces';
import { FieldProps } from 'types';
import { useSmall } from 'hooks';

export const CategoryList = (props: any) => {
   const { isSmall } = useSmall();
   return (
      <List title="All categories" {...props}>
         <SortedGrid {...props}>
            <TextField source={P<ICategoryDTOEx>((p) => p.id)} />
            <TextField source={P<ICategoryDTOEx>((p) => p.name)} />
            <TextField source={P<ICategoryDTOEx>((p) => p.enName)} />
            {!isSmall && <BooleanField source={P<ICategoryDTOEx>((p) => p.forArticle)} />}
         </SortedGrid>
      </List>
   );
};

export const CategoryShow = (props: any) => (
   <Show {...props}>
      <SimpleShowLayout>
         <TextField source={P<ICategoryDTOEx>((p) => p.id)} />
         <TextField source={P<ICategoryDTOEx>((p) => p.parentId)} />
         <TextField source={P<ICategoryDTOEx>((p) => p.name)} />
         <TextField source={P<ICategoryDTOEx>((p) => p.enName)} />
         <DateField label="Added date" source={P<ICategoryDTOEx>((p) => p.addedDate)} />
      </SimpleShowLayout>
   </Show>
);

const CommonForm: React.FC<FieldProps<ICategoryDTOEx>> = (props) => {
   const { isEdit, record } = props;
   return (
      <SimpleForm {...props} redirect="list">
         <SectionTitle label="Main" />
         <RowLayout>
            <TextInput source={P<ICategoryDTOEx>((p) => p.id)} disabled fullWidth />
            <ReferenceInput
               source={P<ICategoryDTOEx>((p) => p.parentId)}
               reference={Routes.categories}
               perPage={1000}
               fullWidth
            >
               <AutocompleteInput optionText={P<ICategoryDTOEx>((p) => p.name)} defaultValue="1" />
            </ReferenceInput>
         </RowLayout>
         <RowLayout>
            <TextInput source={P<ICategoryDTOEx>((p) => p.name)} validate={required()} fullWidth />
            <TextInput source={P<ICategoryDTOEx>((p) => p.enName)} defaultValue="" fullWidth />
         </RowLayout>
         <BooleanInput
            source={P<ICategoryDTOEx>((p) => p.forArticle)}
            defaultValue={false}
            fullWidth
         />
         <SectionTitle label="Misc" />
         <RowLayout style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Box style={{ minWidth: '100%' }}>
               <PosterInput
                  imageFile={P<ICategoryDTOEx>((p) => p.iconFile)}
                  image={P<ICategoryDTOEx>((p) => p.icon)}
                  label="icon"
                  isEdit={isEdit}
                  imageSource={record?.icon}
                  validate={required()}
               />
            </Box>
            <Box style={{ minWidth: '100%' }}>
               <PosterInput
                  imageFile={P<ICategoryDTOEx>((p) => p.pinFile)}
                  image={P<ICategoryDTOEx>((p) => p.pin)}
                  label="pin"
                  isEdit={isEdit}
                  imageSource={record?.pin}
                  validate={required()}
               />
            </Box>
         </RowLayout>
         <RowLayout>
            <DateTimeInput
               source={P<ICategoryDTOEx>((p) => p.addedDate)}
               defaultValue={new Date()}
               fullWidth
            />
            <TextInput source={P<ICategoryDTOEx>((p) => p.color)} validate={required()} fullWidth />
         </RowLayout>
      </SimpleForm>
   );
};

export const CategoryCreate = withCreatePage(CommonForm);

export const CategoryEdit = withEditPage<ICategoryDTOEx>(CommonForm);
