import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Signup01013 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup010101}>
      <Image
        style={styles.image40Icon}
        contentFit="cover"
        source={require("../assets/image-401.png")}
      />
      <Image
        style={[styles.image39Icon, styles.ouPosition]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={styles.signup010101Child}
        contentFit="cover"
        source={require("../assets/group-377.png")}
      />
      <View style={styles.body}>
        <Text style={[styles.h2, styles.h2Clr]}>Je crée mon compte</Text>
        <View style={styles.buttonsSocialMedia}>
          <Image
            style={styles.buttonsIconLayout}
            contentFit="cover"
            source={require("../assets/buttonsconnect4.png")}
          />
          <Image
            style={[styles.buttonsConnectIcon1, styles.buttonsIconLayout]}
            contentFit="cover"
            source={require("../assets/buttonsconnect3.png")}
          />
        </View>
        <View style={styles.separator}>
          <Text style={[styles.ou, styles.ouTypo]}>ou</Text>
          <View style={[styles.separatorChild, styles.separatorLayout]} />
          <View style={[styles.separatorItem, styles.separatorLayout]} />
        </View>
        <View style={styles.formsignup}>
          <View style={styles.password}>
            <View style={styles.largeSpaceBlock}>
              <View style={styles.placeholderParent}>
                <Text style={[styles.placeholder, styles.ouTypo]}>E-mail</Text>
                <Image
                  style={[
                    styles.iconlylightOutlinesearch,
                    styles.iconsBtnLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsbtn15.png")}
                />
              </View>
            </View>
            <View style={[styles.inputpasswordLarge, styles.largeSpaceBlock]}>
              <View style={styles.placeholderParent}>
                <Text style={[styles.placeholder, styles.ouTypo]}>
                  Mot de passe
                </Text>
                <Image
                  style={[
                    styles.iconlylightOutlinesearch,
                    styles.iconsBtnLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsbtn15.png")}
                />
              </View>
            </View>
          </View>
          <Text style={styles.applicationDestineAux}>
            Application destinée aux habitants de Tahiti
          </Text>
          <Pressable
            style={styles.addressZipcode}
            onPress={() => navigation.navigate("Signup01014")}
          >
            <View style={styles.inputWithBtnPromo}>
              <View style={styles.input}>
                <Text
                  style={[styles.codePromo, styles.ouTypo]}
                  numberOfLines={1}
                >
                  Code Postal
                </Text>
              </View>
              <View style={[styles.btnCta, styles.btnFlexBox]}>
                <Text style={[styles.body1white, styles.ouTypo]}>
                  Appliquer
                </Text>
              </View>
            </View>
          </Pressable>
          <View style={styles.textValidatecgv}>
            <Text style={styles.enCliquantSurContainer}>
              <Text
                style={styles.enCliquantSur}
              >{`En cliquant sur “Inscription”, vous acceptez les termes des `}</Text>
              <Text style={styles.conditionsDutilisation}>
                Conditions d’Utilisation
              </Text>
              <Text style={styles.enCliquantSur}>{` et la `}</Text>
              <Text style={styles.conditionsDutilisation}>
                politique de confidentialité
              </Text>
            </Text>
          </View>
          <View style={[styles.btnCta1, styles.btnFlexBox]}>
            <Text style={[styles.body1white1, styles.body1white1Typo]}>
              Continuer
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate("Signin0101")}
      >
        <View style={styles.titleCategory}>
          <Image
            style={styles.iconsBtnLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn5.png")}
          />
          <Text style={[styles.seConnecter, styles.body1white1Typo]}>
            Se connecter
          </Text>
        </View>
        <Pressable
          style={[styles.logo, styles.ouPosition]}
          onPress={() => navigation.navigate("Home0101")}
        >
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <Text style={styles.ohie}>Ohie !</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ouPosition: {
    top: 0,
    position: "absolute",
  },
  h2Clr: {
    color: Color.black,
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
  },
  buttonsIconLayout: {
    height: 56,
    width: 56,
  },
  ouTypo: {
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
  },
  separatorLayout: {
    height: 1,
    width: 123,
    borderTopWidth: 1,
    borderColor: Color.supplementary,
    top: 14,
    borderStyle: "solid",
    position: "absolute",
  },
  iconsBtnLayout: {
    height: 21,
    width: 21,
  },
  largeSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  btnFlexBox: {
    paddingHorizontal: Padding.p_lg,
    backgroundColor: Color.primary,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  body1white1Typo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    textAlign: "left",
  },
  image40Icon: {
    top: 116,
    width: 375,
    height: 696,
    left: 0,
    position: "absolute",
  },
  image39Icon: {
    left: 76,
    width: 300,
    height: 211,
  },
  signup010101Child: {
    height: "4.68%",
    width: "10.4%",
    top: "17.73%",
    right: "11.2%",
    bottom: "77.59%",
    left: "78.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  h2: {
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
  },
  buttonsConnectIcon1: {
    borderRadius: Border.br_3xs,
    marginLeft: 24,
  },
  buttonsSocialMedia: {
    marginTop: 32,
    display: "none",
    flexDirection: "row",
  },
  ou: {
    marginLeft: -8.5,
    left: "50%",
    color: Color.supplementary,
    textAlign: "center",
    lineHeight: 28,
    top: 0,
    position: "absolute",
  },
  separatorChild: {
    left: 0,
  },
  separatorItem: {
    left: 185,
  },
  separator: {
    width: 307,
    height: 28,
    marginTop: 32,
    display: "none",
  },
  placeholder: {
    color: Color.grayMedium,
    textAlign: "left",
    lineHeight: 28,
    flex: 1,
  },
  iconlylightOutlinesearch: {
    marginLeft: 14,
    display: "none",
  },
  placeholderParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  inputpasswordLarge: {
    marginTop: 8,
  },
  password: {
    alignSelf: "stretch",
    display: "none",
  },
  applicationDestineAux: {
    color: Color.complementary,
    marginTop: 48,
    fontSize: FontSize.bodyLarge_size,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.bodySmall,
    lineHeight: 28,
  },
  codePromo: {
    color: Color.grayLight,
    textAlign: "left",
    height: 28,
    lineHeight: 28,
    overflow: "hidden",
    flex: 1,
  },
  input: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.supplementaryUltraLight,
    borderColor: Color.colorOldlace,
    borderWidth: 1,
    paddingLeft: Padding.p_5xs,
    borderStyle: "solid",
    flexDirection: "row",
    flex: 1,
  },
  body1white: {
    color: Color.tertiaryLight,
    textAlign: "left",
  },
  btnCta: {
    paddingVertical: 0,
    marginLeft: 8,
  },
  inputWithBtnPromo: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  addressZipcode: {
    marginTop: 48,
    alignSelf: "stretch",
  },
  enCliquantSur: {
    fontFamily: FontFamily.bodySmall,
  },
  conditionsDutilisation: {
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
  },
  enCliquantSurContainer: {
    fontSize: FontSize.bodySmall_size,
    color: Color.grayDark,
    height: 42,
    textAlign: "left",
    flex: 1,
  },
  textValidatecgv: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 48,
    alignSelf: "stretch",
    display: "none",
    flexDirection: "row",
  },
  body1white1: {
    color: Color.tertiaryLight,
    fontSize: FontSize.bodyLarge_size,
  },
  btnCta1: {
    shadowColor: "rgba(2, 198, 176, 0.23)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 64,
    paddingVertical: Padding.p_9xs,
    marginTop: 48,
  },
  formsignup: {
    alignSelf: "stretch",
    marginTop: 32,
    alignItems: "center",
  },
  body: {
    top: 254,
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    left: 24,
    position: "absolute",
  },
  seConnecter: {
    marginLeft: 16,
    color: Color.black,
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
  },
  titleCategory: {
    top: 13,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
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
    left: 282,
    display: "none",
    alignItems: "center",
  },
  header: {
    top: 144,
    height: 55,
    width: 327,
    left: 24,
    position: "absolute",
  },
  signup010101: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.tertiary,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default Signup01013;
