import { StyleSheet, Text, View } from "react-native";
import { KpiCard } from "./KPICard";
import { RevenueCard } from "./RevenueCard";

export function DashboardGrid() {
  const dashboardData = {
    revenue: {
      current: 12450,
      target: 25000,
    },

    kpis: [
      {
        id: "outreach",
        title: "Total Outreach",
        value: 81,
        icon: "phone",
      },

      {
        id: "replies",
        title: "Total Replies",
        value: 27,
        icon: "reply",
      },

      {
        id: "calls",
        title: "Calls Booked",
        value: 8,
        icon: "calendar",
      },

      {
        id: "deals",
        title: "Deals Closed",
        value: 6,
        icon: "dollar-sign",
      },
    ],
  };

  return (
    <View>
      <RevenueCard
        revenue={dashboardData.revenue.current}
        targetRevenue={dashboardData.revenue.target}
      />

      <Text style={styles.overviewItemHeader}>Activity Overview</Text>

      <View style={styles.overview}>
        {dashboardData.kpis.map((kpi) => (
          <KpiCard key={kpi.id} title={kpi.title} value={kpi.value} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overviewItemHeader: {
    color: "#26519F",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 8,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  overview: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    margin: 8,
  },
});
