import TodoCard from "@/app/components/TodoCard";
import { styles } from "@/app/lib/sharedStyles";
import { useTodoStore } from "@/app/store/todoStore";
import { FlatList, View } from "react-native";

export default function Index() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.todosContainer}
        contentContainerStyle={styles.todosContainerContent}
        data={todos}
        renderItem={({item}) => <TodoCard text={item.task} isDone={item.isDone} id={item.id}/>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
