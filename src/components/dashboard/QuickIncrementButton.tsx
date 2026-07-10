import { Pressable, Text, View } from "react-native";

// import { Plus } from "lucide-react-native";

// import { useIncrementMetric } from "@/features/metrics/mutations";

export function QuickIncrementButton({ metric }) {
  const increment = useIncrementMetric();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
      }}
    >
      <Text>{metric.name}</Text>

      <Pressable onPress={() => increment.mutate(metric.id)}>
        {/* <Plus /> */}
      </Pressable>
    </View>
  );
}
