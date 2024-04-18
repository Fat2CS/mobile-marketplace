import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Forgotpassword0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotpassword010101}>
      <Image
        style={[styles.image40Icon, styles.image40IconPosition]}
        contentFit="cover"
        source={require("../assets/image-401.png")}
      />
      <Image
        style={[styles.image39Icon, styles.logoPosition]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={styles.forgotpassword010101Child}
        contentFit="cover"
        source={require("../assets/group-377.png")}
      />
      <View style={styles.form}>
        <Text style={styles.h2}>Mot de passe oublié</Text>
        <View style={styles.textInstruction}>
          <Text
            style={[styles.indiquezVotreAdresse, styles.placeholderTypo]}
          >{`Indiquez votre adresse e-mail utilisée lors de la création de votre compte. 

Un email contenant les instructions de réinitialisation va vous être envoyé.`}</Text>
        </View>
        <View style={styles.password}>
          <View style={styles.largeSpaceBlock}>
            <View style={styles.placeholderParent}>
              <Text style={[styles.placeholder, styles.placeholderTypo]}>
                E-mail
              </Text>
              <Image
                style={[styles.iconlylightOutlinesearch, styles.iconsBtnLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn15.png")}
              />
            </View>
          </View>
          <View style={[styles.inputpasswordLarge, styles.largeSpaceBlock]}>
            <View style={styles.placeholderParent}>
              <Text style={[styles.placeholder, styles.placeholderTypo]}>
                Password
              </Text>
              <Image
                style={[styles.iconlylightOutlinesearch, styles.iconsBtnLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn15.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.btnCta, styles.btnCtaFlexBox]}>
          <Text style={[styles.body1white, styles.h1Typo]}>Envoyer</Text>
        </View>
        <Pressable
          style={[styles.divbuttonForgotpw, styles.btnCtaFlexBox]}
          onPress={() => navigation.navigate("Signup01011")}
        >
          <Text style={[styles.crerUnCompte, styles.placeholderTypo]}>
            Créer un compte
          </Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <View style={[styles.titleCategory, styles.image40IconPosition]}>
          <Image
            style={styles.iconsBtnLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn5.png")}
          />
          <Text style={[styles.h1, styles.h1Typo]}>Se connecter</Text>
        </View>
        <Pressable
          style={[styles.logo, styles.logoPosition]}
          onPress={() => navigation.navigate("Home0101")}
        >
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <Text style={styles.ohie}>Ohie !</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image40IconPosition: {
    left: 0,
    position: "absolute",
  },
  logoPosition: {
    top: 0,
    position: "absolute",
  },
  placeholderTypo: {
    textAlign: "left",
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
  },
  iconsBtnLayout: {
    height: 21,
    width: 21,
  },
  largeSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_sm,
    width: 338,
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
  },
  btnCtaFlexBox: {
    justifyContent: "center",
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  h1Typo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    textAlign: "left",
  },
  image40Icon: {
    top: 116,
    width: 375,
    height: 696,
  },
  image39Icon: {
    left: 76,
    width: 300,
    height: 211,
  },
  forgotpassword010101Child: {
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
    color: Color.black,
    fontFamily: FontFamily.bodySmall,
    lineHeight: 28,
    fontSize: FontSize.h1Head_size,
  },
  indiquezVotreAdresse: {
    color: Color.black,
    flex: 1,
  },
  textInstruction: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 32,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  placeholder: {
    color: Color.grayMedium,
    lineHeight: 28,
    flex: 1,
  },
  iconlylightOutlinesearch: {
    marginLeft: 14,
    display: "none",
  },
  placeholderParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputpasswordLarge: {
    marginTop: 8,
    display: "none",
  },
  password: {
    marginTop: 32,
  },
  body1white: {
    fontSize: FontSize.bodyLarge_size,
    color: Color.tertiaryLight,
  },
  btnCta: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.primary,
    shadowColor: "rgba(2, 198, 176, 0.23)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 64,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_9xs,
    alignSelf: "stretch",
  },
  crerUnCompte: {
    color: Color.grayDark,
  },
  divbuttonForgotpw: {
    padding: Padding.p_base,
  },
  form: {
    top: 207,
    left: 21,
    paddingBottom: Padding.p_141xl,
    alignItems: "center",
    position: "absolute",
  },
  h1: {
    marginLeft: 16,
    color: Color.black,
    lineHeight: 28,
    fontSize: FontSize.h1Head_size,
    fontWeight: "500",
  },
  titleCategory: {
    top: 13,
    flexDirection: "row",
    alignItems: "center",
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
    left: 24,
    width: 327,
    height: 55,
    position: "absolute",
  },
  forgotpassword010101: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.tertiary,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default Forgotpassword0101;
