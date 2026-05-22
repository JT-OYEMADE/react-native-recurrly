import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  // const subscriptionId = "12345"; // This would typically come from route params or state
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link href="/subscriptions">Go Back</Link>
    </View>
  );
};

export default SubscriptionDetails;
