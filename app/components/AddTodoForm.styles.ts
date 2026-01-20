import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContainer:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#020122",
    justifyContent: "flex-start",
    gap: 15,
    padding: 30,
  },
  textInput: {
    backgroundColor: "#272654",
    width: "100%",
    color: "#f2f2f2",
    fontSize: 25,
    borderRadius: 15,
    padding: 10,
  },
  buttonContainer:{
    flex: 1,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  button: {
    width: 150,
    backgroundColor: "#FF521B",
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    width: "100%",
    textAlign: "center",
    color: "#f2f2f2",
    fontSize: 15,
  },
});