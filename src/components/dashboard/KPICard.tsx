import { StyleSheet, Text, View } from "react-native";

export function KpiCard(props: { title: string; value: number }) {
  const { title, value } = props;
  return (
    <View>
      <View style={styles.overviewItem}>
        <Text style={styles.overviewItemText}>{title}</Text>
        <Text style={styles.overviewItemNumber}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overviewItem: {
    backgroundColor: "#ffe4bf",
    padding: 8,
    borderRadius: 12,
    borderColor: "#ffdeac",
    borderWidth: 2,
    width: 100,
  },
  overviewItemText: {
    color: "#26519F",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 8,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  overviewItemNumber: {
    color: "#000",
    textAlign: "center",
    fontSize: 24,
  },
});
