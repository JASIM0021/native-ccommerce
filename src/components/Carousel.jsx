import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../constants";

const Carousel = () => {
  const slides = [
    "https://cdn.pixabay.com/photo/2023/06/20/10/06/cocktail-8076619_640.jpg",
    "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg",
    "https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524_640.jpg",
    "https://cdn.pixabay.com/photo/2017/03/30/15/46/churros-2188869_640.jpg",
    "https://cdn.pixabay.com/photo/2015/05/31/12/50/shop-791582_640.jpg",
  ];
  return (
    <View style={styles.caroselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inActiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
