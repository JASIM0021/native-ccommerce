import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import Welcome from "./Welcome/Welcome";
import Carousel from "../../components/Carousel";
import Heading from "./heading/Heading";
import ProductRow from "../Product/ProductRow/ProductRow";
import { SIZES } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appbarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.textLocation}>kolkata, west bengal</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRow />
        <View style={{ height: SIZES.height / 6, width: "100%" }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
