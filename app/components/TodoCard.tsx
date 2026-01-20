import { styles } from "@/app/components/TodoCard.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { useTodoStore } from "../store/todoStore";

interface TodoCardProps {
  text: string;
  isDone: boolean;
  id: number
}

export default function TodoCard({ text, isDone, id }: TodoCardProps){
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <View style={styles.cardContainer}>
      <Text 
        style={isDone ? styles.completedTodo : styles.cardText}
      >
        {text}
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => alert("Aun no hago nada :(")}>
          <Ionicons name="create-outline" color="#009FB7" size={30}/>
        </Pressable>
        <Pressable onPress={() => deleteTodo(id)}>
          <Ionicons name="close-circle-outline" color="#C5283D" size={30}/>
        </Pressable>
      </View>
    </View>
  )
};