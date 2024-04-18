import * as React from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home0101"); // Remplacez 'Home0101' par le nom de l'écran vers lequel vous souhaitez naviguer
    }, 10000); // 10000 millisecondes = 10 secondes

    // Fonction de nettoyage pour annuler le timeout si l'écran est quitté avant les 10 secondes
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.splashscreen}>
      <View style={styles.statusBar}></View>
      <View style={styles.logo}>
        <Image
          style={[styles.forme1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/forme-1.png")}
        />
        <Image
          style={[styles.logoChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-376.png")}
        />
        <View style={styles.logo1}>
          <Text style={[styles.ohie, styles.timePosition]}>Ohie !</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  timePosition: {
    textAlign: "center",
    left: 0,
    position: "absolute",
    zIndex: 1
  },
  border: {
    width: "90.53%",
    right: "9.47%",

    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    opacity: 0.35,
    position: "absolute"
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    right: "0%",
    maxWidth: "100%"
  },
  capacity: {
    height: "64.6%",
    width: "74.07%",
    top: "17.7%",
    right: "17.7%",
    bottom: "17.7%",
    left: "8.23%",
    borderRadius: 1,
    backgroundColor: Color.colorGray_100,
    position: "absolute"
  },
  battery: {
    height: "25.68%",
    width: "6.48%",
    top: "39.32%",
    right: "3.84%",
    bottom: "35%",
    left: "89.68%",
    position: "absolute"
  },
  wifiIcon: {
    width: 15,
    height: 11
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.avenir,
    color: Color.colorGray_100,
    width: 54
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute"
  },
  statusBar: {
    height: "5.42%",
    bottom: "94.58%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%"
  },
  forme1Icon: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    maxWidth: "100%",
    width: "100%"
  },
  logoChild: {
    height: "21.36%",
    width: "14.56%",
    top: "19.11%",
    right: "36.17%",
    bottom: "59.53%",
    left: "49.27%"
  },
  ohie: {
    top: 0,
    fontSize: 42,
    lineHeight: 52,
    fontFamily: FontFamily.freehandRegular,
    color: Color.colorTeal
  },
  logo1: {
    top: 98,
    left: 87,
    width: 100,
    height: 28,
    position: "absolute"
  },
  logo: {
    height: "21.91%",
    width: "71.44%",
    top: "35.22%",
    right: "12.29%",
    bottom: "42.87%",
    left: "16.27%",
    position: "absolute"
  },
  splashscreen: {
    backgroundColor: Color.primary,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%"
  }
});

export default SplashScreen;
