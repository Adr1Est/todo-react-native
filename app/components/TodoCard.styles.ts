import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#FF521B",
    padding: 10,
    backgroundColor: "#272654",
    borderRadius: 15,
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
    justifyContent: "flex-end",
    gap: 5,
  }
});