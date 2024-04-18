import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Home0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home010101, styles.statusBarLayout]}>
      <Text style={[styles.lesBonsPlans, styles.jeRechercheTypo]}>
        Les bons plans du moment
      </Text>
      <Text style={[styles.jeRecherche, styles.jeRechercheTypo]}>
        Je recherche...
      </Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.queSouhaitezVous, styles.queSouhaitezVousTypo]}>
          Que souhaitez vous faire aujourd’hui ?
        </Text>
        <Text style={[styles.iaOraNa, styles.iaOraNaClr]}>
          Ia ora na Hina !
        </Text>
        <View style={[styles.logo, styles.bannerPosition]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
          <Text style={styles.ohie}>Ohie !</Text>
        </View>
      </View>
      <View style={styles.btnCategoryParent}>
        <View style={styles.btnCategoryLayout}>
          <View style={[styles.btnCategoryChild, styles.btnChildPosition]} />
          <View style={[styles.hoverlayBtnProducts, styles.btnPosition]} />
          <Text style={[styles.produits, styles.produitsFlexBox]}>
            Produits
          </Text>
          <View style={[styles.iconsBtn, styles.iconsPosition]}>
            <View style={[styles.image19, styles.hoverlayChildLayout]} />
            <Image
              style={[styles.icoBtnProductsLegsIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icobtnproductslegs.png")}
            />
          </View>
        </View>
        <View style={[styles.component76, styles.btnCategoryLayout]}>
          <View style={[styles.component76Child, styles.btnChildPosition]} />
          <View style={[styles.hoverlayBtnServices, styles.btnPosition]}>
            <View
              style={[
                styles.hoverlayBtnServicesChild,
                styles.hoverlayChildLayout,
              ]}
            />
          </View>
          <Image
            style={[styles.iconsBtn1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn.png")}
          />
          <Text style={[styles.produits, styles.produitsFlexBox]}>
            Services
          </Text>
        </View>
        <View style={[styles.component76, styles.btnCategoryLayout]}>
          <View style={[styles.backBtnActivity, styles.btnLayout]} />
          <View style={[styles.hoverlayBtnActivity, styles.btnLayout]} />
          <Text style={[styles.ttlBtnActivity, styles.produitsFlexBox]}>
            Activités
          </Text>
          <Image
            style={[styles.iconsBtn1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn1.png")}
          />
        </View>
        <View style={[styles.component76, styles.btnCategoryLayout]}>
          <View style={[styles.component75Child, styles.btnChildPosition]} />
          <View style={[styles.hoverlayBtnServices, styles.btnPosition]}>
            <View
              style={[styles.hoverlayBtnBlueChild, styles.hoverlayChildLayout]}
            />
          </View>
          <Text style={[styles.produits, styles.produitsFlexBox]}>
            Boutiques
          </Text>
          <Image
            style={[styles.iconsBtn1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn2.png")}
          />
        </View>
      </View>
      <View style={[styles.searchBar, styles.searchBarPosition]}>
        <View style={styles.iconsBtnParent}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn3.png")}
          />
          <Text style={[styles.placeholder, styles.placeholderTypo]}>
            Un commerçant, produit, service...
          </Text>
        </View>
      </View>
      <View style={[styles.discountBanPdt, styles.searchBarPosition]}>
        <View style={[styles.divdiscountBanner, styles.bannerPosition]}>
          <View style={styles.imgLayout}>
            <Image
              style={[styles.imgdiscountBannerIcon, styles.imgLayout]}
              contentFit="cover"
              source={require("../assets/imgdiscountbanner.png")}
            />
            <LinearGradient
              style={[styles.divoverlayImg, styles.imgLayout]}
              locations={[0.4, 0.89]}
              colors={["rgba(0, 0, 0, 0.29)", "rgba(0, 0, 0, 0)"]}
            />
            <View style={styles.divtitleDiscountBanner}>
              <Text
                style={[styles.pdiscountBannerSubtitle, styles.textBtnTypo]}
              >
                Du 10 au 20 mars
              </Text>
              <Text
                style={[styles.divheroTitle, styles.jeRechercheTypo]}
              >{` `}</Text>
            </View>
          </View>
          <View style={styles.divsliderdiscountBanner}>
            <View style={styles.divsliderdiscountBannerChild} />
            <View
              style={[
                styles.divsliderdiscountBannerItem,
                styles.divsliderdiscountLayout,
              ]}
            />
            <View
              style={[
                styles.divsliderdiscountBannerInner,
                styles.divsliderdiscountLayout,
              ]}
            />
          </View>
        </View>
      </View>
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
                <Text style={[styles.divcardPrice, styles.jeRechercheTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text
                  style={[
                    styles.divcardDescription,
                    styles.queSouhaitezVousTypo,
                  ]}
                >
                  Le sachet de 500g
                </Text>
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
                <Text style={[styles.divcardPrice, styles.jeRechercheTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text
                  style={[
                    styles.divcardDescription,
                    styles.queSouhaitezVousTypo,
                  ]}
                >
                  Le sachet de 500g
                </Text>
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
                <Text style={[styles.divcardPrice, styles.jeRechercheTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text
                  style={[
                    styles.divcardDescription,
                    styles.queSouhaitezVousTypo,
                  ]}
                >
                  Le sachet de 500g
                </Text>
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
                <Text style={[styles.divcardPrice, styles.jeRechercheTypo]}>
                  <Text style={styles.f}>
                    <Text style={styles.f1}>500 F</Text>
                    <Text style={styles.text}>{` `}</Text>
                  </Text>
                  <Text style={styles.text}>430 F</Text>
                </Text>
                <Text
                  style={[
                    styles.divcardDescription,
                    styles.queSouhaitezVousTypo,
                  ]}
                >
                  Le sachet de 500g
                </Text>
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
      <View style={styles.iconsBtn5}>
        <Image
          style={[styles.icoBtnProductsLegsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Text style={[styles.text4, styles.hoverlayChildLayout]}>1</Text>
      </View>
      <Pressable
        style={[styles.home010101Child, styles.btnCtaIconLayout]}
        onPress={() => navigation.navigate("Search0102")}
      />
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn6, styles.timePosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn4.png")}
            />
          </View>
          <Image
            style={[styles.divicoSearchIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicosearch.png")}
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
          style={[styles.btnCtaIcon, styles.btnCtaIconLayout]}
          contentFit="cover"
          source={require("../assets/btncta.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.bannerPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.iconLayout]}
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
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  jeRechercheTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  headerPosition: {
    top: 44,
    position: "absolute",
  },
  queSouhaitezVousTypo: {
    color: Color.grayDark,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  iaOraNaClr: {
    color: Color.black,
    textAlign: "left",
  },
  bannerPosition: {
    top: 0,
    position: "absolute",
  },
  btnChildPosition: {
    bottom: "5.48%",
    right: "4.17%",
    top: "0%",
    left: "0%",
  },
  btnPosition: {
    left: "4.17%",
    top: "5.48%",
    bottom: "0%",
    right: "0%",
  },
  produitsFlexBox: {
    display: "flex",
    top: "63.01%",
    height: "10.96%",
    justifyContent: "center",
    fontSize: FontSize.bodySmall_size,
    textAlign: "center",
    alignItems: "center",
    color: Color.grayDark,
    fontFamily: FontFamily.bodySmall,
    position: "absolute",
  },
  iconsPosition: {
    left: "33.33%",
    bottom: "49.32%",
    right: "37.5%",
    top: "21.92%",
    width: "29.17%",
    height: "28.77%",
  },
  hoverlayChildLayout: {
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  btnCategoryLayout: {
    height: 73,
    width: 72,
  },
  btnLayout: {
    backgroundColor: Color.colorTurquoise_200,
    borderRadius: Border.br_mini,
    width: "95.83%",
    height: "94.52%",
    position: "absolute",
  },
  searchBarPosition: {
    width: 327,
    left: 24,
    position: "absolute",
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
  textBtnTypo: {
    color: Color.tertiaryLight,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  divsliderdiscountLayout: {
    marginLeft: 4,
    height: 5,
    borderRadius: Border.br_mini,
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
  btnCtaIconLayout: {
    height: 64,
    position: "absolute",
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
  lesBonsPlans: {
    top: 524,
    color: Color.colorGray_100,
    fontSize: FontSize.bodyLarge_size,
    left: 24,
    position: "absolute",
  },
  jeRecherche: {
    top: 384,
    color: Color.colorGray_100,
    fontSize: FontSize.bodyLarge_size,
    left: 24,
    position: "absolute",
  },
  queSouhaitezVous: {
    fontSize: FontSize.cardPrice_size,
    left: 0,
    top: 44,
    position: "absolute",
  },
  iaOraNa: {
    top: 8,
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
    fontFamily: FontFamily.bodySmall,
    color: Color.black,
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
    width: 44,
    alignItems: "center",
  },
  header: {
    width: 326,
    height: 61,
    left: 24,
  },
  btnCategoryChild: {
    backgroundColor: Color.colorCoral_100,
    borderRadius: Border.br_mini,
    left: "0%",
    width: "95.83%",
    height: "94.52%",
    position: "absolute",
  },
  hoverlayBtnProducts: {
    backgroundColor: Color.colorCoral_200,
    borderRadius: Border.br_mini,
    width: "95.83%",
    height: "94.52%",
    position: "absolute",
  },
  produits: {
    justifyContent: "center",
    left: "0%",
    width: "95.83%",
  },
  image19: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
  },
  icoBtnProductsLegsIcon: {
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
  },
  iconsBtn: {
    position: "absolute",
  },
  component76Child: {
    backgroundColor: Color.colorGold_100,
    borderRadius: Border.br_mini,
    left: "0%",
    width: "95.83%",
    height: "94.52%",
    position: "absolute",
  },
  hoverlayBtnServicesChild: {
    backgroundColor: Color.colorGold_200,
    bottom: "0%",
    height: "100%",
    right: "0%",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  hoverlayBtnServices: {
    width: "95.83%",
    height: "94.52%",
    position: "absolute",
  },
  iconsBtn1: {
    left: "33.33%",
    bottom: "49.32%",
    right: "37.5%",
    top: "21.92%",
    width: "29.17%",
    height: "28.77%",
  },
  component76: {
    marginLeft: 13,
  },
  backBtnActivity: {
    left: "4.17%",
    top: "5.48%",
    bottom: "0%",
    right: "0%",
  },
  hoverlayBtnActivity: {
    left: "0%",
    bottom: "5.48%",
    right: "4.17%",
    top: "0%",
  },
  ttlBtnActivity: {
    width: "93.06%",
    left: "2.78%",
    justifyContent: "center",
  },
  component75Child: {
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_mini,
    left: "0%",
    width: "95.83%",
    height: "94.52%",
    position: "absolute",
  },
  hoverlayBtnBlueChild: {
    backgroundColor: Color.colorDeepskyblue_200,
    bottom: "0%",
    height: "100%",
    right: "0%",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  btnCategoryParent: {
    top: 427,
    flexDirection: "row",
    left: 24,
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
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    top: 128,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_mini,
  },
  imgdiscountBannerIcon: {
    borderRadius: Border.br_mini,
    top: 0,
    position: "absolute",
    left: 0,
  },
  divoverlayImg: {
    backgroundColor: Color.overlayImg,
    borderRadius: Border.br_mini,
    top: 0,
    position: "absolute",
    left: 0,
  },
  pdiscountBannerSubtitle: {
    width: 113,
    height: 19,
    lineHeight: 16,
    fontSize: FontSize.bodySmall_size,
    color: Color.tertiaryLight,
  },
  divheroTitle: {
    color: Color.tertiary,
    fontSize: FontSize.bodyLarge_size,
  },
  divtitleDiscountBanner: {
    top: 16,
    left: 24,
    position: "absolute",
  },
  divsliderdiscountBannerChild: {
    height: 5,
    width: 5,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
  },
  divsliderdiscountBannerItem: {
    width: 5,
    backgroundColor: Color.colorGainsboro,
    marginLeft: 4,
  },
  divsliderdiscountBannerInner: {
    backgroundColor: Color.complementary,
    width: 20,
  },
  divsliderdiscountBanner: {
    marginTop: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  divdiscountBanner: {
    alignItems: "center",
    left: 0,
  },
  discountBanPdt: {
    top: 195,
    height: 165,
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
  },
  divcardDescription: {
    fontSize: FontSize.textButtonSmall_size,
    alignSelf: "stretch",
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
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.size_5xs,
    color: Color.white,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    position: "absolute",
  },
  iconsBtn5: {
    top: 672,
    left: 139,
    width: 16,
    height: 16,
    opacity: 0,
    position: "absolute",
  },
  home010101Child: {
    top: 121,
    left: 296,
    width: 62,
  },
  iconsBtn6: {
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
    overflow: "hidden",
    height: 60,
    right: "0%",
    left: "0%",
    width: "100%",
  },
  btnCtaIcon: {
    marginLeft: -31.5,
    top: 3,
    width: 64,
    left: "50%",
  },
  tabBar: {
    marginLeft: -187.5,
    height: 85,
    left: "50%",
    bottom: 0,
    width: 375,
    overflow: "hidden",
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
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
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
    right: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  home010101: {
    borderRadius: Border.br_6xl,
    height: 812,
    flex: 1,
  },
});

export default Home0101;
