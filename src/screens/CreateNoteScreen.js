import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styled from 'styled-components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ViewContainer from '../components/ViewContainer';

const FormItem = styled(View)`
  padding: 12px 10px 12px 10px;
`;

const Input = styled(TextInput)`
  border-bottom-width: 1px;
  border-color: grey;
  color: ${props => props.theme.text.color};
  padding-bottom: 8px;
  position: relative;
`;

const NoteSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'title is too short')
    .required('title is required'),
  note: Yup.string(),
});

const initialState = {title: '', note: ''};

export default ({navigation}) => {
  const onSubmit = values => {
    console.log(values);
    navigation.navigate('HomeScreen');
  };
  return (
    <ViewContainer>
      <Formik
        validationSchema={NoteSchema}
        initialValues={initialState}
        onSubmit={onSubmit}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <FormItem>
              <Input
                placeholder="Title"
                placeholderTextColor="grey"
                onChangeText={handleChange('title')}
                value={values.title}
              />
              {errors.title ? (
                <Text style={{color: 'red'}}>{errors.title}</Text>
              ) : null}
            </FormItem>
            <FormItem>
              <Input
                multiline
                placeholder="Note"
                placeholderTextColor="grey"
                onChangeText={handleChange('note')}
                value={values.note}
              />
              {errors.note ? (
                <Text style={{color: 'red'}}>{errors.note}</Text>
              ) : null}
            </FormItem>
            <FormItem>
              <Button onPress={handleSubmit} title="Salvar" />
            </FormItem>
          </>
        )}
      </Formik>
    </ViewContainer>
  );
};
