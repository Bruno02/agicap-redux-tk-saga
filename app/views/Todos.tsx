import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selecTodosList } from 'reducers/todos';
import { Input } from 'components/input';
import { List } from 'components/list';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  input: {
    backgroundColor: '#eee',
  },
});

const Todos = () => {
  const dispatch = useDispatch();
  const list = useSelector(selecTodosList);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.root}>
      <View style={styles.root}>
        <Input
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          style={styles.input}
          blurOnSubmit={false}
        />
        <List items={list} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Todos;
