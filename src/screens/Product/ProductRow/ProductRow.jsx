import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../../constants";
import ProductCardView from "../productCard/ProductCardView";
import styles from "./productRow.styles";

const product = [1, 2, 3, 4, 5, 6, 7];

const ProductRow = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({ item }) => {
          return <ProductCardView />;
        }}
        contentContainerStyle={{
          columnGap: SIZES.medium,
        }}
        horizontal
      />
    </View>
  );
};

export default ProductRow;
