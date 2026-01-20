import { styles } from "@/app/components/TodoCard.styles";
import { Text, View } from "react-native";

export default function EmptyDataCard() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>Nada que hacer!</Text>
    </View>
  )
}