import { StyleSheet, Text, View } from "react-native";

export function RevenueCard(props: { revenue: number; targetRevenue: number }) {
  const { revenue, targetRevenue } = props;
  const percentage = Math.floor((revenue / targetRevenue) * 100);

  return (
    <View style={styles.summary}>
      <Text style={styles.currentRevenue}>${revenue}</Text>
      <View style={styles.summaryBottom}>
        <Text style={styles.summaryText}>{percentage}% of target</Text>
        <Text style={styles.summaryText}>target: ${targetRevenue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    backgroundColor: "#26519F",
    borderColor: "#26519F",
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  summaryText: {
    color: "#fff",
  },
  summaryBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currentRevenue: {
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
    fontWeight: 800,
  },
});
