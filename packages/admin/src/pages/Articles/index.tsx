import * as React from 'react';
import { P } from '@mapbul-pub/utils';
import { Routes } from '@mapbul-pub/ui';
import { IArticleDTO, ICategoryDTO, IStatusDTO } from '@mapbul-pub/types';
import {
   Show,
   ShowButton,
   SimpleShowLayout,
   RichTextField,
   DateField,
   List,
   Edit,
   Create,
   Datagrid,
   ReferenceField,
   TextField,
   EditButton,
   ReferenceInput,
   SelectInput,
   SimpleForm,
   TextInput,
   Filter,
   DateInput,
   DateTimeInput,
   AutocompleteInput
} from 'react-admin';
import { IArticleDTOEx } from 'interfaces';
import { RowLayout, SectionTitle } from 'components';
import { withEditPage } from 'hocs';

const ArticleFilter: React.FC = (props: any) => (
   <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      {/* <ReferenceInput
      label="User"
      source="userId"
      reference="users"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput> */}
   </Filter>
);

const PostPanel = ({
   id,
   record,
   resource
}: {
   id?: string;
   record?: IArticleDTO;
   resource?: string;
}) => <div dangerouslySetInnerHTML={{ __html: record?.text || '' }} />;

export const ArticleList: React.FC = (props: any) => (
   <List {...props} filters={<ArticleFilter />}>
      <Datagrid rowClick="edit" expand={<PostPanel />}>
         <TextField source={P<IArticleDTO>((p) => p.id)} label="№" />
         <ReferenceField
            label="Категория"
            source={P<IArticleDTO>((p) => p.baseCategoryId)}
            reference={Routes.categories}
         >
            <TextField source={P<ICategoryDTO>((p) => p.name)} />
         </ReferenceField>
         <TextField source={P<IArticleDTO>((p) => p.title)} label="Название" />
         <TextField source={P<IArticleDTO>((p) => p.description)} label="Описание" />

         {/* <TextField source={P<IArticleDTO>(p => p.text)} label="Текст" /> */}
         {/* <TextField source="title" />
            <TextField source="title" />
            <TextField source="title" /> */}
         {/* <EditButton />
            <ShowButton /> */}
      </Datagrid>
   </List>
);

export const ArticleEdit: React.FC = withEditPage<IArticleDTOEx>((props) => {
   return (
      <SimpleForm {...props}>
         <SectionTitle label="Main" />
         {/* <TextInput disabled source={P<IArticleDTOEx>((p) => p.id)} /> */}
         {/* <ReferenceInput label="User" source="userId" reference="users">
            <SelectInput optionText="name" />
         </ReferenceInput> */}
         <RowLayout>
            <TextInput source={P<IArticleDTOEx>((p) => p.title)} fullWidth/>
            <TextInput source={P<IArticleDTOEx>((p) => p.titleEn)} fullWidth/>
         </RowLayout>
         <RowLayout>
            <TextInput source={P<IArticleDTOEx>((p) => p.description)} fullWidth/>
            <TextInput source={P<IArticleDTOEx>((p) => p.descriptionEn)} fullWidth/>
         </RowLayout>
         <RowLayout>
            <TextInput multiline source={P<IArticleDTOEx>((p) => p.text)} fullWidth/>
            <TextInput multiline source={P<IArticleDTOEx>((p) => p.textEn)} fullWidth/>
         </RowLayout>
         <RowLayout>
            <TextInput source={P<IArticleDTOEx>((p) => p.sourceUrl)} fullWidth/>
            <TextInput source={P<IArticleDTOEx>((p) => p.sourceUrlEn)} fullWidth/>
         </RowLayout>
         <SectionTitle label="Misc" />
         <RowLayout>
            <DateTimeInput source={P<IArticleDTOEx>((p) => p.startDate)} fullWidth/>
            <DateTimeInput source={P<IArticleDTOEx>((p) => p.endDate)} fullWidth/>
         </RowLayout>
         <RowLayout>
            <DateTimeInput source={P<IArticleDTOEx>((p) => p.startDate)} fullWidth/>
            <ReferenceInput
               source={P<IArticleDTOEx>((p) => p.statusId)}
               reference={Routes.statuses}
               perPage={1000}
               fullWidth
            >
               {/* <SelectInput optionText={P<ICategoryDTOEx>(p => p.name)} /> */}
               <AutocompleteInput optionText={P<IStatusDTO>((p) => p.description)} />
            </ReferenceInput>
         </RowLayout>
         <RowLayout>
            <DateTimeInput source={P<IArticleDTOEx>((p) => p.addedDate)} fullWidth/>
            <DateTimeInput source={P<IArticleDTOEx>((p) => p.publishedDate)} fullWidth/>
         </RowLayout>

      </SimpleForm>
   );
});

export const ArticleCreate: React.FC = (props: any) => (
   <Create {...props}>
      <SimpleForm>
         <TextInput source={P<IArticleDTO>((p) => p.title)} />
         <TextInput multiline source={P<IArticleDTO>((p) => p.text)} />
      </SimpleForm>
   </Create>
);

export const ArticleShow: React.FC = (props: any) => (
   <Show {...props}>
      <SimpleShowLayout>
         <TextField source="title" />
         <TextField source="teaser" />
         <RichTextField source="body" />
         <DateField label="Publication date" source="created_at" />
      </SimpleShowLayout>
   </Show>
);
