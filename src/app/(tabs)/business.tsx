import { format } from "date-fns";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const businessName = "Texan Web Pro";
  const currentMonth = new Date();
  const currentRevenue = 0;
  const percentage = 0;
  const target = 9000;
  const [outreachTotal, setOutreachTotal] = useState(0);
  const [repliesTotal, setRepliesTotal] = useState(0);
  const [callsBookedTotal, setCallsBookedTotal] = useState(0);
  const [dealsClosedTotal] = useState(0);
  const [seoTotal, setSeoTotal] = useState(0);

  function handleOutreachPress() {
    return setOutreachTotal(outreachTotal + 1);
  }

  function handleRepliesPress() {
    return setRepliesTotal(repliesTotal + 1);
  }

  function handleCallsBookedPress() {
    return setCallsBookedTotal(callsBookedTotal + 1);
  }

  function handleDealsBookedPress() {
    return true;
    // open deal modal
  }

  function handleSeoPress() {
    return setSeoTotal(seoTotal + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{businessName}</Text>
        <Text style={styles.headerText}>
          {format(currentMonth, "MMMM yyyy")}
        </Text>
      </View>
      <View style={styles.summary}>
        <Text style={styles.currentRevenue}>${currentRevenue}</Text>
        <View style={styles.summaryBottom}>
          <Text style={styles.summaryText}>{percentage}% of target</Text>
          <Text style={styles.summaryText}>target: ${target}</Text>
        </View>
      </View>
      <Text style={styles.overviewItemHeader}>Activity Overview</Text>
      <View style={styles.overview}>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewItemText}>Total Outreach</Text>
          <Text style={styles.overviewItemNumber}>{outreachTotal}</Text>
        </View>
        <TouchableOpacity
          style={styles.overviewItem}
          onPress={handleRepliesPress}
        >
          <Text style={styles.overviewItemText}>Total Replies</Text>
          <Text style={styles.overviewItemNumber}>{repliesTotal}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.overviewItem}
          onPress={handleCallsBookedPress}
        >
          <Text style={styles.overviewItemText}>Calls Booked</Text>
          <Text style={styles.overviewItemNumber}>{callsBookedTotal}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.overviewItem}
          onPress={handleDealsBookedPress}
        >
          <Text style={styles.overviewItemText}>Deals Closed</Text>
          <Text style={styles.overviewItemNumber}>{dealsClosedTotal}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.overview}>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewItemText}>Website SEO</Text>
          <Text style={styles.overviewItemNumber}>{seoTotal}</Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewItemText}>New Projects</Text>
          <Text style={styles.overviewItemNumber}>{outreachTotal}</Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewItemText}>Projects Finished</Text>
          <Text style={styles.overviewItemNumber}>{outreachTotal}</Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewItemText}>Recurring Clients</Text>
          <Text style={styles.overviewItemNumber}>{outreachTotal}</Text>
        </View>
      </View>

      <Text style={styles.overviewItemHeader}>Actions</Text>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Text style={styles.actionText}>Website</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleSeoPress}>
              Article Published
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSeoPress}>
            <Text style={styles.buttonText}>Tool Made</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSeoPress}>
            <Text style={styles.buttonText}>Fix Patched</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <Text style={styles.actionText}>In-Person</Text>
          <TouchableOpacity style={styles.button} onPress={handleOutreachPress}>
            <Text style={styles.buttonText}>Event Attended</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOutreachPress}>
            <Text style={styles.buttonText}>Call Made</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOutreachPress}>
            <Text style={styles.buttonText}>Card Given</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Text style={styles.actionText}>Instagram</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleOutreachPress}>
              DM Sent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleOutreachPress}>
              Comment Left
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleOutreachPress}>
              Account Followed
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <Text style={styles.actionText}>LinkedIn</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleOutreachPress}>
              DM Sent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleOutreachPress}>
              Comment Left
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleOutreachPress}>
              Invite Sent
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// "primary": "#26519F", // Reliance Blue
// "secondary": "#87AFDD", // Reliance Light
// "tertiary": "#6c242b",
// "accent-pink": "#C1666B", // Patient Pink
// "accent-tan": "#D4B483", // Trusted Tan
// "surface": "#fff8f3",
// "on-surface": "#281900",
// "surface-container": "#ffebd1",
// "surface-container-high": "#ffe4bf",
// "error": "#ba1a1a",
// "on-primary": "#ffffff",
// "background": "#fff8f3",
// "tertiary-fixed-dim": "#ffb3b5",
// "on-secondary": "#ffffff",
// "on-tertiary-fixed-variant": "#792e34",
// "on-secondary-fixed-variant": "#1c4971",
// "inverse-on-surface": "#ffeed9",
// "tertiary-fixed": "#ffdada",
// "secondary-fixed-dim": "#a2caf9",
// "surface-container-low": "#fff2e2",
// "on-tertiary": "#ffffff",
// "surface-bright": "#fff8f3",
// "on-tertiary-fixed": "#3f020c",
// "surface-tint": "#335caa",
// "tertiary-container": "#8a3a40",
// "surface-container-highest": "#ffdeac",
// "on-surface-variant": "#434751",
// "outline-variant": "#c3c6d3",
// "on-secondary-container": "#2f5982",
// "inverse-primary": "#afc6ff",
// "on-primary-fixed-variant": "#134391",
// "on-primary-fixed": "#001944",
// "primary-container": "#26519f",
// "outline": "#747782",
// "on-error": "#ffffff",
// "surface-variant": "#ffdeac",
// "secondary-container": "#a7cfff",
// "on-secondary-fixed": "#001d35",
// "surface-container-lowest": "#ffffff",
// "on-surface": "#281900",
// "surface-dim": "#f7d5a2",
// "surface-container": "#ffebd1",
// "on-primary-container": "#b2c8ff",
// "surface-container-high": "#ffe4bf",
// "on-error-container": "#93000a",
// "secondary-fixed": "#d0e4ff",
// "primary-fixed": "#d9e2ff",
// "inverse-surface": "#412d07",
// "on-tertiary-container": "#ffb5b7",
// "error-container": "#ffdad6",
// "on-background": "#281900",
// "primary-fixed-dim": "#afc6ff"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff8f3",
    paddingHorizontal: 16,
    minHeight: 900,
  },
  header: {
    alignItems: "center",
    margin: 8,
  },
  headerText: {
    color: "#26519F",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  summary: {
    backgroundColor: "#26519F",
    borderColor: "#26519F",
    borderWidth: 2,
    borderRadius: 12,
    padding: 8,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  summaryText: {
    color: "#afc6ff",
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
  overview: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    margin: 8,
  },
  overviewItemHeader: {
    color: "#26519F",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 8,
    textTransform: "uppercase",
    fontWeight: "600",
  },
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
  actions: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff2e2",
    borderColor: "#ffe4bf",
    borderWidth: 2,
    borderRadius: 12,
    padding: 8,
    margin: 8,
  },
  actionText: {
    color: "#26519F",
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: 8,
  },
  button: {
    width: 150,
    backgroundColor: "#C1666B",
    padding: 8,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "800",
  },
});
