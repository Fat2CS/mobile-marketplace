import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Signup01014 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup010102}>
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
        style={styles.signup010102Child}
        contentFit="cover"
        source={require("../assets/group-3771.png")}
      />
      <View style={[styles.body, styles.bodyPosition]}>
        <Text style={[styles.h2, styles.h2Typo]}>Je crée mon compte</Text>
        <View style={styles.socialMedia}>
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
            <View style={styles.inputtextLargeBorder}>
              <View style={styles.nameokParent}>
                <Text style={[styles.nameok, styles.ouTypo]}>NameOk</Text>
                <Image
                  style={[styles.iconsBtn, styles.iconsLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsbtn20.png")}
                />
              </View>
            </View>
            <View style={styles.inputpasswordLarge}>
              <View
                style={[styles.password4245Parent, styles.inputtextLargeBorder]}
              >
                <Text style={[styles.password4245, styles.ouTypo]}>
                  Password4245§
                </Text>
                <Image
                  style={styles.buttonIcoShowPasswordIcon}
                  contentFit="cover"
                  source={require("../assets/button-ico-show-password.png")}
                />
              </View>
              <Text style={styles.votreMotDe}>
                Votre mot de passe doit comporter au moins 8 caractères et au
                moins une lettre minuscule et une lettre majuscule, un caractère
                spécial et un chiffre
              </Text>
            </View>
          </View>
          <View style={[styles.textAlert, styles.inputBorder]}>
            <Text style={[styles.cetteApplicationEstContainer, styles.ouTypo]}>
              <Text
                style={styles.cetteApplicationEst}
              >{`Cette application est destinée aux habitants de Tahiti. 
`}</Text>
              <Text style={styles.uneApplicationArrive}>{`
Une application arrive bientôt dans votre région ! Soyez prévenu par e-mail dès qu’elle sera sortie, en cliquant sur le bouton “Etre averti”.`}</Text>
            </Text>
          </View>
          <Pressable
            style={styles.addressZipcode}
            onPress={() => navigation.navigate("Signup0101")}
          >
            <View style={styles.inputWithBtnPromo}>
              <View style={[styles.input, styles.inputBorder]}>
                <Text style={[styles.texteValid, styles.ouTypo]}>33650</Text>
              </View>
              <View style={[styles.btnCta, styles.btnFlexBox]}>
                <Image
                  style={[styles.iconsBtn1, styles.iconsLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsbtn41.png")}
                />
                <Text style={[styles.body1white, styles.ouTypo]}>Retirer</Text>
              </View>
            </View>
          </Pressable>
          <View style={styles.textValidatecgv}>
            <Text style={styles.enCliquantSurContainer}>
              <Text
                style={styles.enCliquantSur}
              >{`En cliquant sur “Etre averti”, vous sacceptez la `}</Text>
              <Text style={styles.politiqueDeConfidentialit}>
                politique de confidentialité
              </Text>
            </Text>
          </View>
          <View style={[styles.btnCta1, styles.btnFlexBox]}>
            <Text style={[styles.body1white1, styles.body1white1Typo]}>
              Etre averti
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.header, styles.bodyPosition]}
        onPress={() => navigation.navigate("Signin0101")}
      >
        <View style={styles.titleCategory}>
          <Image
            style={styles.iconsLayout}
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
  bodyPosition: {
    left: 24,
    position: "absolute",
  },
  h2Typo: {
    fontSize: FontSize.h1Head_size,
    color: Color.black,
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
    borderStyle: "solid",
    top: 14,
    position: "absolute",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  inputtextLargeBorder: {
    paddingVertical: Padding.p_2xs,
    borderWidth: 1,
    borderColor: Color.primary,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    borderStyle: "solid",
  },
  inputBorder: {
    borderColor: Color.complementary,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  btnFlexBox: {
    paddingHorizontal: Padding.p_lg,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    flexDirection: "row",
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
  signup010102Child: {
    height: "4.68%",
    width: "10.4%",
    top: "17.73%",
    right: "11.2%",
    bottom: "77.59%",
    left: "78.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  h2: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.bodySmall,
    lineHeight: 28,
  },
  buttonsConnectIcon1: {
    borderRadius: Border.br_3xs,
    marginLeft: 24,
  },
  socialMedia: {
    marginTop: 32,
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
  },
  nameok: {
    textAlign: "left",
    color: Color.black,
    flex: 1,
  },
  iconsBtn: {
    marginLeft: 14,
  },
  nameokParent: {
    alignSelf: "stretch",
    height: 28,
    flexDirection: "row",
    alignItems: "center",
  },
  password4245: {
    color: Color.grayDark,
    textAlign: "left",
    flex: 1,
  },
  buttonIcoShowPasswordIcon: {
    width: 28,
    marginLeft: 14,
    height: 28,
  },
  password4245Parent: {
    flexDirection: "row",
    alignItems: "center",
  },
  votreMotDe: {
    fontSize: FontSize.textButtonSmall_size,
    color: Color.complementary,
    width: 338,
    display: "none",
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  inputpasswordLarge: {
    marginTop: 8,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  password: {
    alignSelf: "stretch",
  },
  cetteApplicationEst: {
    color: Color.black,
  },
  uneApplicationArrive: {
    color: Color.grayDark,
  },
  cetteApplicationEstContainer: {
    textAlign: "left",
    flex: 1,
  },
  textAlert: {
    padding: Padding.p_base,
    marginTop: 16,
    borderColor: Color.complementary,
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  texteValid: {
    letterSpacing: 1.6,
    textAlign: "left",
    color: Color.black,
    lineHeight: 28,
  },
  input: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.supplementaryUltraLight,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_sm,
    borderColor: Color.complementary,
    flex: 1,
  },
  iconsBtn1: {
    overflow: "hidden",
  },
  body1white: {
    marginLeft: 4,
    color: Color.tertiaryLight,
    textAlign: "left",
  },
  btnCta: {
    backgroundColor: Color.complementary,
    shadowColor: "rgba(238, 73, 97, 0.23)",
    marginLeft: 8,
    paddingVertical: 0,
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
    marginTop: 16,
    alignSelf: "stretch",
  },
  enCliquantSur: {
    fontFamily: FontFamily.bodySmall,
  },
  politiqueDeConfidentialit: {
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
  },
  enCliquantSurContainer: {
    fontSize: FontSize.bodySmall_size,
    color: Color.grayDark,
    textAlign: "left",
    flex: 1,
  },
  textValidatecgv: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 16,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  body1white1: {
    fontSize: FontSize.bodyLarge_size,
    color: Color.tertiaryLight,
  },
  btnCta1: {
    backgroundColor: Color.primary,
    shadowColor: "rgba(2, 198, 176, 0.23)",
    height: 64,
    paddingVertical: Padding.p_9xs,
    marginTop: 16,
  },
  formsignup: {
    paddingBottom: Padding.p_141xl,
    width: 327,
    marginTop: 32,
    alignItems: "center",
  },
  body: {
    top: 207,
    alignItems: "center",
  },
  seConnecter: {
    marginLeft: 16,
    color: Color.black,
    lineHeight: 28,
    fontSize: FontSize.h1Head_size,
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
  },
  signup010102: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.tertiary,
    width: "100%",
    height: 789,
    flex: 1,
  },
});

export default Signup01014;
