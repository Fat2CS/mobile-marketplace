import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const Home01011 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home010103}>
      <Text style={[styles.lesBonsPlans, styles.titleTypo]}>
        Les bons plans du moment
      </Text>
      <Text style={[styles.jeRecherche, styles.titleTypo]}>
        Je recherche...
      </Text>
      <View style={[styles.header, styles.headerLayout]}>
        <Text style={[styles.queSouhaitezVous, styles.headerPosition]}>
          Que souhaitez vous faire aujourd’hui ?
        </Text>
        <Text style={[styles.iaOraNa, styles.iaOraNaClr]}>
          Ia ora na Hina !
        </Text>
        <View style={[styles.logo, styles.divdiscountPosition]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <Text style={styles.ohie}>Ohie !</Text>
        </View>
      </View>
      <View style={[styles.searchBar, styles.searchBarLayout]}>
        <View style={[styles.iconsBtnParent, styles.iconsBtnParentFlexBox]}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn39.png")}
          />
          <Text style={[styles.placeholder, styles.placeholderTypo]}>
            Un commerçant, produit, service...
          </Text>
        </View>
      </View>
      <View style={[styles.discountBanPdt, styles.headerLayout]}>
        <View style={[styles.divdiscountBanner, styles.divdiscountPosition]}>
          <View style={styles.imgLayout}>
            <Image
              style={[styles.imgdiscountBannerIcon, styles.imgLayout]}
              contentFit="cover"
              source={require("../assets/imgdiscountbanner1.png")}
            />
            <LinearGradient
              style={[styles.divoverlayImg, styles.imgLayout]}
              locations={[0.4, 0.89]}
              colors={["rgba(0, 0, 0, 0.29)", "rgba(0, 0, 0, 0)"]}
            />
            <View
              style={[
                styles.divtitleDiscountBanner,
                styles.jeRecherchePosition,
              ]}
            >
              <Text
                style={[styles.pdiscountBannerSubtitle, styles.textBtnTypo]}
              >
                Du 10 au 20 mars
              </Text>
              <Text
                style={[styles.divheroTitle, styles.titleTypo]}
              >{`Promotion sur
les fruits de saison`}</Text>
            </View>
          </View>
          <View
            style={[
              styles.divsliderdiscountBanner,
              styles.iconsBtnParentFlexBox,
            ]}
          >
            <View
              style={[
                styles.divsliderdiscountBannerChild,
                styles.divsliderdiscountLayout,
              ]}
            />
            <View
              style={[
                styles.divsliderdiscountBannerItem,
                styles.divsliderdiscountLayout,
              ]}
            />
            <View
              style={[
                styles.divsliderdiscountBannerItem,
                styles.divsliderdiscountLayout,
              ]}
            />
          </View>
        </View>
      </View>
      <View style={[styles.discountBanPdt, styles.headerLayout]}>
        <View style={[styles.divdiscountBanner1, styles.divdiscountPosition]}>
          <View style={styles.imgLayout}>
            <Image
              style={[styles.imgdiscountBannerIcon, styles.imgLayout]}
              contentFit="cover"
              source={require("../assets/imgdiscountbanner1.png")}
            />
            <LinearGradient
              style={[styles.divoverlayImg, styles.imgLayout]}
              locations={[0.4, 0.89]}
              colors={["rgba(0, 0, 0, 0.29)", "rgba(0, 0, 0, 0)"]}
            />
            <View
              style={[
                styles.divtitleDiscountBanner,
                styles.jeRecherchePosition,
              ]}
            >
              <Text
                style={[styles.pdiscountBannerSubtitle, styles.textBtnTypo]}
              >
                Du 10 au 20 mars
              </Text>
              <Text
                style={[styles.divheroTitle, styles.titleTypo]}
              >{`Promotion sur
les fruits de saison`}</Text>
            </View>
          </View>
          <View
            style={[
              styles.divsliderdiscountBanner,
              styles.iconsBtnParentFlexBox,
            ]}
          >
            <View
              style={[
                styles.divsliderdiscountBannerChild,
                styles.divsliderdiscountLayout,
              ]}
            />
            <View
              style={[
                styles.divsliderdiscountBannerItem,
                styles.divsliderdiscountLayout,
              ]}
            />
            <View
              style={[
                styles.divsliderdiscountBannerItem,
                styles.divsliderdiscountLayout,
              ]}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.home010103Child, styles.btnCta4Layout]}
        onPress={() => navigation.navigate("Search0102")}
      />
      <View style={styles.cardProductParent}>
        <View style={styles.cardSpaceBlock}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-129.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.iaOraNaClr]}>
                  Pastèque
                </Text>
                <Text style={[styles.divcardSubtitle, styles.placeholderTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text style={styles.divcardDescription}>{` `}</Text>
              </View>
              <View style={styles.btnCta}>
                <Text style={[styles.textBtn, styles.textBtnTypo]}>
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.cardSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-1291.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.iaOraNaClr]}>
                  Noix de coco râpée
                </Text>
                <Text style={[styles.divcardSubtitle, styles.placeholderTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text style={styles.divcardDescription}>Le sachet de 500g</Text>
              </View>
              <View style={styles.btnCta}>
                <Text style={[styles.textBtn, styles.textBtnTypo]}>
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.cardSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-1292.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.iaOraNaClr]}>
                  Oignons
                </Text>
                <Text style={[styles.divcardSubtitle, styles.placeholderTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text style={styles.divcardDescription}>Le sachet de 500g</Text>
              </View>
              <View style={styles.btnCta}>
                <Text style={[styles.textBtn, styles.textBtnTypo]}>
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.cardSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-1293.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.iaOraNaClr]}>
                  Brocolis
                </Text>
                <Text style={[styles.divcardSubtitle, styles.placeholderTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text style={styles.divcardDescription}>Le sachet de 500g</Text>
              </View>
              <View style={styles.btnCta}>
                <Text style={[styles.textBtn, styles.textBtnTypo]}>
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn1, styles.btnPosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn40.png")}
            />
          </View>
          <Image
            style={[styles.divicoSearchIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicosearch3.png")}
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
        <View style={[styles.btnCta4, styles.btnCta4Layout]}>
          <Image
            style={[styles.btnCtaChild, styles.capIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-196.png")}
          />
          <Image
            style={[styles.btnCtaItem, styles.btnPosition]}
            contentFit="cover"
            source={require("../assets/frame-161.png")}
          />
          <View style={styles.iconsBtn2}>
            <Image
              style={[styles.btnCtaChild, styles.capIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-201.png")}
            />
            <Text style={styles.text4}>1</Text>
          </View>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.capIconLayout]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.btnPosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  headerLayout: {
    width: 327,
    left: 24,
  },
  headerPosition: {
    top: 44,
    position: "absolute",
  },
  iaOraNaClr: {
    color: Color.black,
    textAlign: "left",
  },
  divdiscountPosition: {
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  searchBarLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iconsBtnParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  placeholderTypo: {
    color: Color.grayMedium,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  imgLayout: {
    height: 144,
    width: 327,
  },
  jeRecherchePosition: {
    left: 24,
    position: "absolute",
  },
  textBtnTypo: {
    color: Color.tertiaryLight,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  divsliderdiscountLayout: {
    height: 5,
    borderRadius: Border.br_mini,
  },
  btnCta4Layout: {
    height: 64,
    position: "absolute",
  },
  cardSpaceBlock: {
    paddingRight: Padding.p_base,
    paddingLeft: Padding.p_12xs,
    borderColor: Color.colorTurquoise_100,
    height: 102,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
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
  btnPosition: {
    top: "50%",
    position: "absolute",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  statusBarPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  borderPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  lesBonsPlans: {
    top: 528,
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    left: 24,
    position: "absolute",
  },
  jeRecherche: {
    top: 387,
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    left: 24,
    position: "absolute",
  },
  queSouhaitezVous: {
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.cardPrice_size,
    left: 0,
    textAlign: "left",
  },
  iaOraNa: {
    top: 8,
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
    fontFamily: FontFamily.bodySmall,
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
  },
  header: {
    height: 61,
    top: 44,
    position: "absolute",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  placeholder: {
    marginLeft: 14,
    lineHeight: 28,
    fontSize: FontSize.cardPrice_size,
    flex: 1,
  },
  iconsBtnParent: {
    alignSelf: "stretch",
  },
  searchBar: {
    top: 129,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    width: 327,
    left: 24,
  },
  imgdiscountBannerIcon: {
    borderRadius: Border.br_mini,
    position: "absolute",
    top: 0,
    left: 0,
  },
  divoverlayImg: {
    backgroundColor: Color.overlayImg,
    borderRadius: Border.br_mini,
    position: "absolute",
    top: 0,
    left: 0,
  },
  pdiscountBannerSubtitle: {
    fontSize: FontSize.bodySmall_size,
    width: 113,
    height: 19,
    lineHeight: 16,
    color: Color.tertiaryLight,
  },
  divheroTitle: {
    color: Color.tertiary,
    textAlign: "left",
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
  },
  divtitleDiscountBanner: {
    top: 16,
  },
  divsliderdiscountBannerChild: {
    backgroundColor: Color.complementary,
    width: 20,
  },
  divsliderdiscountBannerItem: {
    backgroundColor: Color.colorGainsboro,
    width: 5,
    marginLeft: 4,
  },
  divsliderdiscountBanner: {
    marginTop: 16,
    justifyContent: "center",
  },
  divdiscountBanner: {
    left: 0,
  },
  discountBanPdt: {
    top: 195,
    height: 165,
    position: "absolute",
  },
  divdiscountBanner1: {
    display: "none",
    left: 0,
  },
  home010103Child: {
    top: 121,
    left: 296,
    width: 62,
  },
  frameChild: {
    borderTopLeftRadius: Border.br_lgi,
    borderBottomLeftRadius: Border.br_lgi,
    width: 74,
    height: 100,
  },
  divcardTitle: {
    lineHeight: 16,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    fontSize: FontSize.bodyLarge_size,
  },
  divcardSubtitle: {
    fontSize: FontSize.cardSubtitle_size,
    display: "none",
  },
  divcardTitleParent: {
    alignSelf: "stretch",
  },
  f1: {
    color: Color.grayLight,
  },
  text: {
    color: Color.primary,
  },
  f: {
    textDecoration: "line-through",
  },
  divcardPrice: {
    textTransform: "uppercase",
    fontSize: FontSize.cardPrice_size,
    textAlign: "left",
  },
  divcardDescription: {
    fontSize: FontSize.textButtonSmall_size,
    color: Color.grayDark,
    alignSelf: "stretch",
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  divcardPriceParent: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  textBtn: {
    fontSize: FontSize.cardPrice_size,
  },
  btnCta: {
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    marginTop: 4,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    marginLeft: 16,
    justifyContent: "center",
  },
  rectangleParent: {
    height: 102,
    flexDirection: "row",
    alignItems: "center",
  },
  cardProduct1: {
    marginLeft: 16,
  },
  cardProductParent: {
    top: 567,
    paddingLeft: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  iconsBtn1: {
    marginLeft: -10.5,
    marginTop: -11,
    top: "50%",
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
    width: "100%",
    overflow: "hidden",
  },
  btnCtaChild: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  btnCtaItem: {
    marginLeft: -11,
    width: 22,
    height: 22,
    marginTop: -11,
    top: "50%",
    left: "50%",
  },
  text4: {
    fontSize: FontSize.size_5xs,
    color: Color.white,
    top: "0%",
    height: "100%",
    left: "0%",
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    position: "absolute",
    width: "100%",
  },
  iconsBtn2: {
    left: 47,
    width: 16,
    height: 16,
    top: 0,
    position: "absolute",
  },
  btnCta4: {
    marginLeft: -31.5,
    top: 3,
    width: 64,
    left: "50%",
  },
  tabBar: {
    marginLeft: -182.5,
    width: 375,
    height: 85,
    overflow: "hidden",
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderColor: Color.white,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
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
    textAlign: "center",
    left: 0,
    color: Color.colorGray_100,
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
    height: 44,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  home010103: {
    borderRadius: Border.br_6xl,
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Home01011;
