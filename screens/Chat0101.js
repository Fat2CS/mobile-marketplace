import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Chat0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat010101}>
      <View style={styles.scrollPage}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <View style={styles.logo}>
            <Image
              style={styles.logoIcon}
              contentFit="cover"
              source={require("../assets/logo1.png")}
            />
            <Text style={styles.ohie}>Ohie !</Text>
          </View>
          <Pressable
            style={[styles.titleCategory, styles.headerFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconsLayout}
              contentFit="cover"
              source={require("../assets/iconsbtn5.png")}
            />
            <Text style={styles.foodCook}>Food Cook</Text>
          </Pressable>
          <Image
            style={styles.componentPinLocationIcon}
            contentFit="cover"
            source={require("../assets/componentpinlocation.png")}
          />
        </View>
        <View style={[styles.chatContent01, styles.chatLayout]}>
          <View style={styles.btnCta}>
            <Text style={[styles.body1white, styles.textTypo]}>
              Aujourd’hui
            </Text>
          </View>
          <View style={styles.chat01}>
            <View style={[styles.chatAvatarParent, styles.chatLayout]}>
              <Image
                style={styles.chatAvatarIcon}
                contentFit="cover"
                source={require("../assets/chatavatar.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.wrapper}>
                  <Text style={[styles.text, styles.textTypo]}>· · ·</Text>
                </View>
                <Text style={[styles.text1, styles.textTypo]}>16:10</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn1, styles.timePosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn34.png")}
            />
          </View>
          <Image
            style={[styles.divicoSearchIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicosearch4.png")}
          />
          <Image
            style={[styles.divicoHeartIcon, styles.divtabIconsPosition]}
            contentFit="cover"
            source={require("../assets/divicoheart.png")}
          />
          <Image
            style={[styles.divicoUserIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicouser.png")}
          />
        </View>
        <Image
          style={styles.btnCtaIcon}
          contentFit="cover"
          source={require("../assets/btncta4.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.text2Position]} />
          <Image
            style={[styles.capIcon, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/cap2.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection2.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <View style={styles.btnCta1}>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-197.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-191.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-192.png")}
          />
          <Image
            style={[styles.iconsBtn2, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn13.png")}
          />
          <View style={styles.iconsBtn3}>
            <Image
              style={[styles.iconsBtnChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-201.png")}
            />
            <Text style={[styles.text2, styles.text2Position]}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  chatLayout: {
    width: 327,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  divtabIconsPosition: {
    height: 60,
    bottom: 0,
    position: "absolute",
  },
  divicoIconLayout: {
    width: 69,
    height: 60,
    bottom: 0,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  statusBarPosition: {
    top: "0%",
    left: "0%",
  },
  text2Position: {
    height: "100%",
    top: "0%",
    left: "0%",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: "90.22%",
    height: "96.67%",
  },
  groupPosition: {
    bottom: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  logoIcon: {
    width: 39,
    height: 38,
  },
  ohie: {
    fontSize: FontSize.size_xl,
    lineHeight: 14,
    fontFamily: FontFamily.freehandRegular,
    color: Color.colorTeal,
    marginTop: 3,
    textAlign: "center",
  },
  logo: {
    display: "none",
    alignItems: "center",
  },
  foodCook: {
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  titleCategory: {
    width: 216,
    alignItems: "center",
  },
  componentPinLocationIcon: {
    height: 32,
    width: 27,
  },
  header: {
    top: 44,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
    width: 327,
    position: "absolute",
    left: 24,
  },
  body1white: {
    color: Color.complementary,
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
  },
  btnCta: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  chatAvatarIcon: {
    height: 28,
    width: 27,
  },
  text: {
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.black,
  },
  wrapper: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    backgroundColor: Color.grayUltraLight,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  text1: {
    fontSize: FontSize.cardSubtitle_size,
    color: Color.grayLight,
    marginTop: 8,
  },
  frameParent: {
    marginLeft: 8,
    flex: 1,
  },
  chatAvatarParent: {
    flexDirection: "row",
    left: 0,
    top: 0,
  },
  chat01: {
    alignSelf: "stretch",
    height: 55,
    marginTop: 16,
  },
  chatContent01: {
    top: 122,
    height: 761,
    alignItems: "center",
    left: 24,
    width: 327,
  },
  scrollPage: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  iconsBtn1: {
    marginTop: -11,
    marginLeft: -10.5,
    left: "50%",
    height: 21,
    width: 21,
  },
  divicoHome: {
    left: 0,
  },
  divicoSearchIcon: {
    marginLeft: -111.5,
    left: "50%",
  },
  divicoHeartIcon: {
    marginLeft: 42.5,
    width: 68,
    left: "50%",
  },
  divicoUserIcon: {
    right: 0,
  },
  divtabIcons: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: Color.supplementaryUltraLight,
    left: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  btnCtaIcon: {
    marginLeft: -31.5,
    top: 3,
    width: 64,
    height: 64,
    left: "50%",
    position: "absolute",
  },
  tabBar: {
    marginLeft: -187.5,
    height: 85,
    left: "50%",
    bottom: 0,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    opacity: 0.35,
    bottom: "0%",
    position: "absolute",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: "64.6%",
    width: "74.07%",
    top: "17.7%",
    right: "17.7%",
    bottom: "17.7%",
    left: "8.23%",
    borderRadius: 1,
    backgroundColor: Color.black,
    position: "absolute",
  },
  battery: {
    height: "25.68%",
    width: "6.48%",
    top: "39.32%",
    right: "3.84%",
    bottom: "35%",
    left: "89.68%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.avenir,
    width: 54,
    color: Color.black,
    textAlign: "center",
    left: 0,
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  statusBar: {
    height: "5.42%",
    bottom: "94.58%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  groupChild: {
    top: "3.33%",
    right: "5.33%",
    left: "4.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: "0%",
  },
  groupItem: {
    right: "9.78%",
    width: "90.22%",
    height: "96.67%",
    top: "0%",
    left: "0%",
  },
  groupInner: {
    height: "91.9%",
    width: "85.78%",
    top: "4.76%",
    right: "11.11%",
    left: "3.11%",
  },
  iconsBtn2: {
    top: 11,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  iconsBtnChild: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text2: {
    fontSize: FontSize.size_5xs,
    lineHeight: 16,
    color: Color.white,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    height: "100%",
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  iconsBtn3: {
    left: 29,
    width: 16,
    height: 16,
    top: 0,
    position: "absolute",
  },
  ellipseParent: {
    height: "97.67%",
    width: "97.83%",
    top: "2.33%",
    right: "2.17%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  btnCta1: {
    right: 8,
    bottom: 85,
    width: 46,
    height: 43,
    display: "none",
    position: "absolute",
  },
  chat010101: {
    borderRadius: Border.br_6xl,
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Chat0101;
