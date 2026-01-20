import { styles } from "@/app/components/AddTodoForm.styles";
import { useTodoStore } from "@/app/store/todoStore";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddTodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if(!newTodo) return alert("Escribe una nueva tarea")
    addTodo(newTodo);
    setNewTodo("");
  }

  const handleDelete = () => {
    setNewTodo("");
  }

  return(
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Nueva tarea..."
        clearButtonMode="always"
        keyboardType="default"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Añadir tareas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}