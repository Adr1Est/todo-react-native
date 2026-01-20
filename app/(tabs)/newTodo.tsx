import AddTodoForm from "@/app/components/AddTodoForm";
import { styles } from "@/app/components/AddTodoForm.styles";
import { View } from "react-native";

export default function NewTodo() {
  return(
    <View style={styles.formContainer}>
      <AddTodoForm/>
    </View>
  );
}