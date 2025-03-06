import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useState } from 'react';

type TodoCategory = {
  id: string;
  name: string;
};

type Todo = {
  id: string;
  text: string;
  category: TodoCategory;
  deleted: boolean;
  archived: boolean;
  createdAt?: Date;
  completedAt: Date | null;
};

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({
    id: '',
    text: '',
    category: { id: '', name: '' },
    deleted: false,
    archived: false,
    completedAt: null,
  });

  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo({
      id: '',
      text: '',
      category: { id: '', name: '' },
      deleted: false,
      archived: false,
      completedAt: null,
    });
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  return (
    <View className="m-3">
      <View className="flex flex-row gap-2">
        <TextInput
          className="flex-1 border border-gray-300 rounded-md p-2"
          placeholder="Add a todo"
          value={todo.text}
          onChangeText={(text) => setTodo({ ...todo, text })}
        />
        <Pressable
          onPress={handleAddTodo}
          className="bg-green-600 rounded-md flex items-center justify-center w-20"
        >
          <Text className="text-white">Add</Text>
        </Pressable>
        <Pressable
          onPress={handleClearTodos}
          className="bg-red-600 rounded-md flex items-center justify-center w-20"
        >
          <Text className="text-white">Clear</Text>
        </Pressable>
      </View>

      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  );
}

const TodoCategoryDropdown = () => {
  return (
    <View>
      <Text>Todo Category</Text>
    </View>
  );
};

const TodoCategoryItem = ({ category }: { category: TodoCategory }) => {
  return <Text>{category.name}</Text>;
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <View className="flex flex-row gap-2">
      <Text className="text-2xl">{todo.text}</Text>
      <Pressable
        className="bg-red-600 rounded-md flex items-center justify-center w-20"
        onPress={() => {
          console.log('delete');
        }}
      >
        <Text className="text-white">Delete</Text>
      </Pressable>
    </View>
  );
};
