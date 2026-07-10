import { Text, View } from "react-native";

import { QuickIncrementButton } from "./QuickIncrementButton";

export function QuickMetricSection({ title, metrics }) {
  return (
    <View>
      <Text>{title}</Text>

      {metrics.map((metric) => (
        <QuickIncrementButton key={metric.id} metric={metric} />
      ))}
    </View>
  );
}
