import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderBottomColor: "#FF521B",
    padding: 3,
  },
  cardText: {
    flex: 5,
    fontSize: 20,
    color: "#f2f2f2",
  },
  completedTodo: {
    flex: 5,
    fontSize: 20,
    color: "#f2f2f2",
    textDecorationLine: "line-through",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
  }
});