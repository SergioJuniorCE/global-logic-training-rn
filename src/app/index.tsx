import { Button, Text, TextInput, View } from 'react-native';
import { useRef, useState } from 'react';

export default function Index() {
  const [todos, setTodos] = useState<string[]>([]);

  const todoRef = useRef<TextInput>(null);

  const handleAddTodo = () => {
    if (todoRef.current) {
      console.log('ASD', todoRef.current.value);
      setTodos([...todos, todoRef.current.value]);
      todoRef.current.clear();
    }
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <TextInput
          placeholder="Add a todo"
          ref={todoRef}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            padding: 10,
          }}
        />
        <Button title="Add" onPress={handleAddTodo} color="black" />
        <Button title="Clear" onPress={handleClearTodos} />
      </View>
      {todos.map((todo, index) => (
        <Text key={index} style={{ fontSize: 20, margin: 10, color: 'black' }}>
          {todo}
        </Text>
      ))}
    </View>
  );
}
