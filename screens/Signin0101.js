import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Signin0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signin010101}>
      <Image
        style={styles.image40Icon}
        contentFit="cover"
        source={require("../assets/image-401.png")}
      />
      <Image
        style={[styles.image39Icon, styles.logoPosition]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={styles.signin010101Child}
        contentFit="cover"
        source={require("../assets/group-377.png")}
      />
      <View style={[styles.body, styles.bodyPosition]}>
        <Text style={[styles.h2, styles.h2Clr]}>Se connecter</Text>
        <View style={styles.socialMedia}>
          <Image
            style={styles.buttonsIconLayout}
            contentFit="cover"
            source={require("../assets/buttonsconnect5.png")}
          />
          <Image
            style={[styles.buttonsConnectIcon1, styles.buttonsIconLayout]}
            contentFit="cover"
            source={require("../assets/buttonsconnect6.png")}
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.ou}>ou</Text>
          <View style={[styles.separatorChild, styles.separatorLayout]} />
          <View style={[styles.separatorItem, styles.separatorLayout]} />
        </View>
        <View style={styles.formsingin}>
          <View style={styles.divinputsPassword}>
            <View style={styles.largeSpaceBlock}>
              <View style={styles.placeholderParent}>
                <Text style={[styles.placeholder, styles.motDePasseTypo]}>
                  E-mail
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
            <View style={[styles.inputpasswordLarge, styles.largeSpaceBlock]}>
              <View style={styles.placeholderParent}>
                <Text style={[styles.placeholder, styles.motDePasseTypo]}>
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
          <View style={[styles.btnCta, styles.btnCtaFlexBox]}>
            <Text style={[styles.body1white, styles.body1whiteTypo]}>
              Se connecter
            </Text>
          </View>
          <Pressable
            style={[styles.divbuttonForgotpw, styles.btnCtaFlexBox]}
            onPress={() => navigation.navigate("Forgotpassword0101")}
          >
            <Text style={[styles.motDePasse, styles.motDePasseTypo]}>
              Mot de passe oublié
            </Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.header, styles.bodyPosition]}
        onPress={() => navigation.navigate("Signup01011")}
      >
        <View style={styles.titleCategory}>
          <Image
            style={styles.iconsBtnLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn5.png")}
          />
          <Text style={[styles.crerUnCompte, styles.body1whiteTypo]}>
            Créer un compte
          </Text>
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    top: 0,
    position: "absolute",
  },
  bodyPosition: {
    width: 327,
    left: 24,
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
  separatorLayout: {
    height: 1,
    width: 123,
    borderTopWidth: 1,
    borderColor: Color.supplementary,
    borderStyle: "solid",
    top: 14,
    position: "absolute",
  },
  motDePasseTypo: {
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
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  btnCtaFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  body1whiteTypo: {
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
  signin010101Child: {
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
    color: Color.black,
    fontSize: FontSize.h1Head_size,
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
    marginLeft: -13.5,
    left: "50%",
    color: Color.supplementary,
    fontSize: FontSize.cardPrice_size,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
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
  placeholder: {
    color: Color.grayMedium,
    lineHeight: 28,
    textAlign: "left",
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
  divinputsPassword: {
    alignSelf: "stretch",
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
  motDePasse: {
    color: Color.grayDark,
  },
  divbuttonForgotpw: {
    padding: Padding.p_base,
  },
  formsingin: {
    paddingBottom: Padding.p_141xl,
    alignSelf: "stretch",
    marginTop: 32,
    alignItems: "center",
  },
  body: {
    top: 207,
    alignItems: "center",
  },
  crerUnCompte: {
    marginLeft: 16,
    color: Color.black,
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
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
  },
  signin010101: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.tertiary,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default Signin0101;
