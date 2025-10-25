import React from 'react';
import { View, Text } from 'react-native';

export default function OrderConfirmationScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:22, fontWeight:'bold' }}>✅ Order Confirmed!</Text>
      <Text>Your order has been placed successfully.</Text>
    </View>
  );
}
