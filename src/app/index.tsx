import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRef, useState } from 'react';

export default function Index() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>('');

  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
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
      }}
    >
      <TextInput placeholder="Add a todo" value={todo} onChangeText={setTodo} />
      <Pressable
        onPress={handleAddTodo}
        style={{ backgroundColor: 'black', padding: 10, borderRadius: 5 }}
      >
        <Text className="text-white">Add</Text>
      </Pressable>
      <Pressable onPress={handleClearTodos} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
        <Text className="text-white">Clear</Text>
      </Pressable>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text className="text-2xl">{item}</Text>
        )}
      />
    </View>
  );
}
