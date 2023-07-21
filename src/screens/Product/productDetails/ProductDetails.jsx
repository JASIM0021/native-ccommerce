import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./productDetails.style";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants";

const ProductDetails = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (type) => {
    if (type == "inc") {
      setCounter((prev) => prev + 1);
    } else if (type == "dec") {
      if (counter > 0) setCounter((prev) => prev - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={38} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={38} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.pixabay.com/photo/2023/06/20/10/06/cocktail-8076619_640.jpg",
          }}
        />
        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Product</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$220.90</Text>
            </View>
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((_, index) => {
                return <Ionicons name="star" size={24} color={"gold"} />;
              })}
              <Text style={styles.ratingText}> (4.9)</Text>
            </View>
            <View style={styles.rating}>
              <TouchableOpacity
                onPress={() => {
                  handleCounter("inc");
                }}
              >
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={styles.ratingText}> {counter}</Text>
              <TouchableOpacity
                onPress={() => {
                  handleCounter("dec");
                }}
              >
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Details</Text>
            <Text style={styles.descriptionText}>
              The stunning "Elegance Royale" furniture is an exquisite piece
              that exudes opulence and sophistication. Crafted from rich
              mahogany woodThe stunning "Elegance Royale" furniture is an
            </Text>
          </View>
          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="location-outline" size={20} />
                <Text> Location </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={20}
                />
                <Text> Free delivery </Text>
              </View>
            </View>
          </View>
          <View style={styles.cartRow}>
            <TouchableOpacity style={styles.cartBtn}>
              <Text style={styles.cartbtnText}>by now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addCart}>
              <Fontisto
                name="shopping-bag"
                size={22}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
