import { Modal, Pressable, ScrollView } from "react-native";

// import { useQuickMetrics } from "@/features/metrics/queries";
import { QuickMetricSection } from "./QuickMetricSection";

interface Props {
  open: boolean;
  onClose(): void;
}

export function DashboardQuickAddDrawer({ open, onClose }: Props) {
  //   const { data } = useQuickMetrics();
  const data = { outreach: [] };

  return (
    <Modal visible={open} animationType="slide" transparent>
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,.35)",
          alignItems: "flex-end",
        }}
        onPress={onClose}
      >
        <Pressable
          style={{
            width: "85%",
            height: "100%",
            backgroundColor: "white",
            padding: 24,
          }}
          onPress={() => {}}
        >
          <ScrollView>
            <QuickMetricSection
              title="Outreach"
              metrics={data?.outreach ?? []}
            />
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
