import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Commerce0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.commerce010101}>
      <View style={[styles.scrollPage, styles.tabBarLayout]}>
        <Text style={[styles.horaires, styles.text2Typo]}>Horaires</Text>
        <View style={[styles.cardProductDetails, styles.tabBarLayout]}>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.picerieParent}>
                <Text style={[styles.picerie, styles.picerieTypo]}>
                  Épicerie
                </Text>
                <Text style={[styles.foodCook, styles.text2Typo]}>
                  Food Cook
                </Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn31.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>4.8</Text>
                </View>
                <Text style={[styles.valuations, styles.text1Typo]}>
                  39 évaluations
                </Text>
              </View>
            </View>
            <View style={styles.componentPinLocationParent}>
              <View style={styles.componentPinLocation}>
                <Image
                  style={[styles.vectorIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
                <View style={styles.iconsMap}>
                  <Text style={[styles.text1, styles.text1FlexBox]}>98</Text>
                </View>
              </View>
              <Text
                style={[styles.rueDesRempartsContainer, styles.picerieTypo]}
              >
                <Text
                  style={styles.rueDesRemparts}
                >{` rue des remparts, `}</Text>
                <Text style={styles.papeete}>Papeete</Text>
              </Text>
            </View>
            <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
              <Text style={[styles.loremIpsumDolor, styles.h3013h00Typo]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut.
                Sed laoreet odio vel lacus accumsan, congue mattis lectus
                lobortis.
              </Text>
            </View>
          </View>
          <View style={styles.btnCtaParent}>
            <View style={styles.btnShadowBox}>
              <Image
                style={[styles.iconsBtn1, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn32.png")}
              />
              <Text style={[styles.body1white, styles.picerieTypo]}>
                Appeler
              </Text>
            </View>
            <View style={[styles.btnCta1, styles.btnShadowBox]}>
              <Image
                style={styles.iconsLayout}
                contentFit="cover"
                source={require("../assets/iconsbtn29.png")}
              />
              <Text style={[styles.body1white, styles.picerieTypo]}>
                J’y vais
              </Text>
            </View>
          </View>
          <View style={[styles.bannerImgCommerce, styles.divitemLayout]}>
            <View style={[styles.divitem, styles.divitemLayout]}>
              <Image
                style={styles.divbannerItemIcon}
                contentFit="cover"
                source={require("../assets/divbanneritem1.png")}
              />
              <View style={styles.divsliderbannerItem}>
                <View
                  style={[
                    styles.divsliderbannerItemChild,
                    styles.divsliderbannerItemLayout,
                  ]}
                />
                <View
                  style={[
                    styles.divsliderbannerItemItem,
                    styles.divsliderbannerItemLayout,
                  ]}
                />
                <View
                  style={[
                    styles.divsliderbannerItemItem,
                    styles.divsliderbannerItemLayout,
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bestSeller}>
          <Text style={[styles.lesProduitsDu, styles.text2Typo]}>
            Les produits du commerce
          </Text>
        </View>
        <View style={styles.frameView}>
          <View style={styles.btnCatProductsParent}>
            <View style={styles.btnLayout}>
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text style={[styles.nouveauts, styles.nouveautsPosition]}>
                  Nouveautés
                </Text>
              </View>
            </View>
            <View style={[styles.btnCatProducts1, styles.btnLayout]}>
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories1.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text style={[styles.nouveauts, styles.nouveautsPosition]}>
                  Promotions
                </Text>
              </View>
            </View>
            <View style={[styles.btnCatProducts1, styles.btnLayout]}>
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories2.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text style={[styles.nouveauts, styles.nouveautsPosition]}>
                  Coups de coeur
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.btnCatProductsGroup}>
            <View style={styles.btnLayout}>
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories3.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text style={[styles.nouveauts, styles.nouveautsPosition]}>
                  Épicerie salée
                </Text>
              </View>
            </View>
            <View style={[styles.btnCatProducts1, styles.btnLayout]}>
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories4.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text style={[styles.nouveauts, styles.nouveautsPosition]}>
                  Épicerie sucrée
                </Text>
              </View>
            </View>
            <View style={[styles.btnCatProducts1, styles.btnLayout]}>
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories5.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text style={[styles.nouveauts, styles.nouveautsPosition]}>
                  Animalerie
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.btnCatProductsGroup}>
            <View style={styles.btnLayout}>
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories7.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text style={[styles.nouveauts, styles.nouveautsPosition]}>
                  Crémerie
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.btnCatProducts1, styles.btnLayout]}
              onPress={() => navigation.navigate("CommerceProducts0101")}
            >
              <Image
                style={[styles.btnImgCategoriesIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/btnimgcategories8.png")}
              />
              <View style={[styles.categoriesTitle, styles.nouveautsPosition]}>
                <Text
                  style={[styles.nouveauts, styles.nouveautsPosition]}
                >{`Fruits & Légumes`}</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <Text
          style={[styles.h3013h00, styles.h3013h00Typo]}
        >{`06h30 - 13h00, 15h30 - 19h30 du lundi  au samedi
06h30 - 13h00 le dimanche`}</Text>
        <View style={[styles.header, styles.headerLayout]}>
          <Image
            style={[styles.iconsBtn3, styles.iconsPosition]}
            contentFit="cover"
            source={require("../assets/iconsbtn33.png")}
          />
          <Pressable
            style={[styles.wrapper, styles.headerLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/frame-466.png")}
            />
          </Pressable>
          <View style={styles.logo}>
            <Image
              style={styles.logoIcon}
              contentFit="cover"
              source={require("../assets/logo1.png")}
            />
            <Text style={styles.ohie}>Ohie !</Text>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarLayout]}>
        <View style={[styles.divtabIcons, styles.iconLayout]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn4, styles.iconsLayout]}
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
            style={[styles.divicoHeartIcon, styles.iconLayout]}
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
      <View style={[styles.statusBar, styles.text2Position]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.text2Position]} />
          <Image
            style={[styles.capIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.textClr]}>9:41</Text>
        </View>
      </View>
      <Pressable
        style={styles.btnCta2}
        onPress={() => navigation.navigate("Chat0101")}
      >
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
            style={[styles.iconsBtn5, styles.iconsPosition]}
            contentFit="cover"
            source={require("../assets/iconsbtn13.png")}
          />
          <View style={styles.iconsBtn6}>
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-201.png")}
            />
            <Text style={[styles.text2, styles.textClr]}>1</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarLayout: {
    width: 375,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  picerieTypo: {
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  textTypo: {
    fontSize: FontSize.h5Headline_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  text1Typo: {
    fontSize: FontSize.textButtonSmall_size,
    fontFamily: FontFamily.bodySmall,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  h3013h00Typo: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  btnShadowBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_lg,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(2, 198, 176, 0.23)",
    borderRadius: Border.br_xl,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  divitemLayout: {
    height: 275,
    width: 375,
    top: 0,
    position: "absolute",
  },
  divsliderbannerItemLayout: {
    height: 5,
    borderRadius: Border.br_mini,
  },
  iconLayout: {
    height: 60,
    position: "absolute",
  },
  nouveautsPosition: {
    height: 30,
    marginLeft: -52,
    width: 104,
    left: "50%",
    position: "absolute",
  },
  btnLayout: {
    height: 90,
    width: 104,
    overflow: "hidden",
  },
  headerLayout: {
    height: 50,
    position: "absolute",
  },
  iconsPosition: {
    top: 11,
    height: 21,
    width: 21,
    position: "absolute",
    overflow: "hidden",
  },
  divicoIconLayout: {
    width: 69,
    bottom: 0,
    height: 60,
    position: "absolute",
  },
  text2Position: {
    top: "0%",
    left: "0%",
  },
  textClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
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
  horaires: {
    top: 522,
    color: Color.colorGray_100,
    width: 160,
    height: 18,
    textAlign: "left",
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    left: 24,
    position: "absolute",
  },
  picerie: {
    color: Color.complementary,
    fontSize: FontSize.cardSubtitle_size,
  },
  foodCook: {
    lineHeight: 16,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
  },
  picerieParent: {
    width: 154,
  },
  iconsBtn: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  text: {
    lineHeight: 28,
    color: Color.colorNavajowhite,
    marginLeft: 4,
    textAlign: "left",
  },
  iconsBtnParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  valuations: {
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  frameContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameGroup: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text1: {
    marginTop: -8,
    marginLeft: -6.5,
    width: 13,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
    lineHeight: 16,
    left: "50%",
    top: "50%",
    fontSize: FontSize.textButtonSmall_size,
    fontFamily: FontFamily.bodySmall,
    justifyContent: "center",
  },
  iconsMap: {
    height: "59.26%",
    width: "54.17%",
    top: "14.81%",
    right: "22.92%",
    bottom: "25.93%",
    left: "22.92%",
    position: "absolute",
  },
  componentPinLocation: {
    width: 24,
    height: 27,
  },
  rueDesRemparts: {
    color: Color.grayMedium,
    fontSize: FontSize.cardSubtitle_size,
  },
  papeete: {
    color: Color.grayDark,
    fontSize: FontSize.bodySmall_size,
  },
  rueDesRempartsContainer: {
    marginLeft: 8,
  },
  componentPinLocationParent: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  loremIpsumDolor: {
    alignSelf: "stretch",
  },
  loremIpsumDolorSitAmetCoWrapper: {
    paddingHorizontal: 17,
    paddingVertical: 0,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    top: 299,
    left: 25,
    width: 327,
    position: "absolute",
  },
  iconsBtn1: {
    overflow: "hidden",
  },
  body1white: {
    fontSize: FontSize.cardPrice_size,
    color: Color.tertiaryLight,
    marginLeft: 8,
  },
  btnCta1: {
    marginLeft: 32,
  },
  btnCtaParent: {
    top: 462,
    left: 57,
    flexDirection: "row",
    position: "absolute",
  },
  divbannerItemIcon: {
    width: 380,
    height: 248,
  },
  divsliderbannerItemChild: {
    width: 20,
    backgroundColor: Color.primary,
    borderRadius: Border.br_mini,
  },
  divsliderbannerItemItem: {
    backgroundColor: Color.colorGainsboro,
    width: 5,
    marginLeft: 4,
  },
  divsliderbannerItem: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  divitem: {
    left: 1,
    alignItems: "center",
  },
  bannerImgCommerce: {
    left: 0,
  },
  cardProductDetails: {
    height: 498,
    left: 0,
    top: 0,
  },
  lesProduitsDu: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  bestSeller: {
    top: 608,
    width: 205,
    height: 19,
    left: 24,
    position: "absolute",
  },
  btnImgCategoriesIcon: {
    marginLeft: -52,
    height: 60,
    width: 104,
    left: "50%",
    top: 0,
  },
  nouveauts: {
    marginTop: -15,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    top: "50%",
    fontSize: FontSize.h5Headline_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    justifyContent: "center",
    color: Color.black,
  },
  categoriesTitle: {
    bottom: 0,
  },
  btnCatProducts1: {
    marginLeft: 8,
  },
  btnCatProductsParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  btnCatProductsGroup: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameView: {
    top: 643,
    height: 380,
    left: 24,
    position: "absolute",
  },
  h3013h00: {
    top: 556,
    left: 41,
    width: 293,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  iconsBtn3: {
    left: 306,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    left: 0,
    top: 0,
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
    top: -6,
    left: 282,
    display: "none",
    alignItems: "center",
    position: "absolute",
  },
  header: {
    top: 44,
    width: 327,
    left: 24,
  },
  scrollPage: {
    left: 0,
    top: 0,
    height: 812,
  },
  iconsBtn4: {
    marginTop: -11,
    marginLeft: -10.5,
    left: "50%",
    top: "50%",
    position: "absolute",
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
    bottom: 0,
    left: "50%",
  },
  divicoUserIcon: {
    right: 0,
  },
  divtabIcons: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: Color.supplementaryUltraLight,
    bottom: 0,
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
    bottom: 0,
    left: "50%",
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
    left: "0%",
    bottom: "0%",
    height: "100%",
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
    position: "absolute",
    backgroundColor: Color.white,
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
    top: "50%",
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
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
    left: "0%",
    top: "0%",
  },
  groupInner: {
    height: "91.9%",
    width: "85.78%",
    top: "4.76%",
    right: "11.11%",
    left: "3.11%",
  },
  iconsBtn5: {
    left: 10,
  },
  text2: {
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    lineHeight: 16,
    color: Color.white,
    left: "0%",
    top: "0%",
    height: "100%",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    width: "100%",
  },
  iconsBtn6: {
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
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  btnCta2: {
    right: 8,
    bottom: 85,
    width: 46,
    height: 43,
    position: "absolute",
  },
  commerce010101: {
    borderRadius: Border.br_6xl,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Commerce0101;
