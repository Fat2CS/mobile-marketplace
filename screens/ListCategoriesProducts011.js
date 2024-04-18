import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const ListCategoriesProducts011 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listCategoriesProducts0101}>
      <View style={[styles.sectionBtnCategoriesProduct, styles.headerPosition]}>
        <View style={styles.btnCatProductsParent}>
          <View style={[styles.btnCatProducts, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Nouveautés
              </Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts1, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories1.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Promotions
              </Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts1, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories2.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Coups de coeur
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnCatProductsGroup}>
          <View style={[styles.btnCatProducts, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories3.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Épicerie salée
              </Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts1, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories4.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Épicerie sucrée
              </Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts1, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories5.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Animalerie
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnCatProductsGroup}>
          <View style={[styles.btnCatProducts, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories7.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Crémerie
              </Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts1, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories6.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.logoFlexBox]}
              >{`Viande & Poisson`}</Text>
            </View>
          </View>
          <Pressable
            style={[styles.btnCatProducts1, styles.btnLayout]}
            onPress={() => navigation.navigate("ListProducts01011")}
          >
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories8.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.logoFlexBox]}
              >{`Fruits & Légumes`}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.btnCatProductsGroup}>
          <View style={[styles.btnCatProducts, styles.btnLayout]}>
            <View style={styles.btnImgCategoriesIcon}>
              <Image
                style={styles.image28Icon}
                contentFit="cover"
                source={require("../assets/image-28.png")}
              />
            </View>
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.logoFlexBox]}
              >{`Épices & Condiments`}</Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts1, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories9.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.logoFlexBox]}
              >{`High Tech & Multimédia`}</Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts1, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories10.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>
                Électroménager
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnCatProductsGroup}>
          <View style={[styles.btnCatProducts, styles.btnLayout]}>
            <View style={styles.btnImgCategoriesIcon}>
              <Image
                style={styles.image28Icon}
                contentFit="cover"
                source={require("../assets/image-281.png")}
              />
            </View>
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.logoFlexBox]}>Outfit</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.titleSection, styles.titlePosition]}>
        <Text style={[styles.lesRayons, styles.lesRayonsTypo]}>Les rayons</Text>
      </View>
      <View style={styles.sectionMinicardProduct}>
        <View style={styles.cardSpaceBlock}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-1291.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.lesRayonsTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={styles.divcardSubtitle}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.textBtnTypo]}>
                  500 F
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
              source={require("../assets/rectangle-1291.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.lesRayonsTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={styles.divcardSubtitle}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.textBtnTypo]}>
                  500 F
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
              source={require("../assets/rectangle-1291.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.lesRayonsTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={styles.divcardSubtitle}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.textBtnTypo]}>
                  500 F
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
      <View style={[styles.titleSection1, styles.titlePosition]}>
        <Text style={[styles.lesRayons, styles.lesRayonsTypo]}>
          Ils n’attendent que vous
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={[styles.titleCategory, styles.logoFlexBox]}
          onPress={() => navigation.navigate("Home01011")}
        >
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn5.png")}
          />
          <Text style={[styles.lesProduits, styles.nouveautsTypo]}>
            Les produits
          </Text>
        </Pressable>
        <Pressable
          style={[styles.logo, styles.logoFlexBox]}
          onPress={() => navigation.navigate("Home01011")}
        >
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <Text style={styles.ohie}>Ohie !</Text>
        </Pressable>
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.statusBarPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn1, styles.btnPosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn38.png")}
            />
          </View>
          <Image
            style={[styles.divicoSearchIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicosearch3.png")}
          />
          <Image
            style={styles.divicoHeartIcon}
            contentFit="cover"
            source={require("../assets/divicoheart.png")}
          />
          <Image
            style={[styles.divicoUserIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicouser.png")}
          />
        </View>
        <View style={styles.btnCta3}>
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
            <Text style={styles.text}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 24,
    position: "absolute",
  },
  btnLayout: {
    height: 90,
    width: 104,
    overflow: "hidden",
  },
  nouveautsLayout: {
    height: 30,
    left: "50%",
    marginLeft: -52,
    width: 104,
  },
  logoFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  titlePosition: {
    height: 19,
    left: 24,
    position: "absolute",
  },
  lesRayonsTypo: {
    fontSize: FontSize.bodyLarge_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  textBtnTypo: {
    fontSize: FontSize.cardPrice_size,
    textAlign: "left",
  },
  cardSpaceBlock: {
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_12xs,
    borderColor: Color.colorTurquoise_100,
    height: 102,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  nouveautsTypo: {
    color: Color.black,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  statusBarPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  borderPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  divicoIconLayout: {
    width: 69,
    bottom: 0,
    height: 60,
    position: "absolute",
  },
  btnPosition: {
    marginTop: -11,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  btnImgCategoriesIcon: {
    height: 60,
    left: "50%",
    top: 0,
    marginLeft: -52,
    width: 104,
    position: "absolute",
  },
  nouveauts: {
    marginTop: -15,
    fontSize: FontSize.h5Headline_size,
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    top: "50%",
    height: 30,
    left: "50%",
    marginLeft: -52,
    width: 104,
    justifyContent: "center",
  },
  categoriesTitle: {
    bottom: 0,
    position: "absolute",
  },
  btnCatProducts: {
    overflow: "hidden",
  },
  btnCatProducts1: {
    marginLeft: 8,
    overflow: "hidden",
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
  image28Icon: {
    marginTop: -30,
    marginLeft: -45,
    width: 90,
    top: "50%",
    height: 60,
    left: "50%",
    position: "absolute",
  },
  sectionBtnCategoriesProduct: {
    top: 333,
    height: 606,
  },
  lesRayons: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleSection: {
    top: 298,
    width: 83,
  },
  frameChild: {
    borderTopLeftRadius: Border.br_lgi,
    borderBottomLeftRadius: Border.br_lgi,
    width: 74,
    height: 100,
  },
  divcardTitle: {
    lineHeight: 16,
    textAlign: "left",
  },
  divcardSubtitle: {
    fontSize: FontSize.cardSubtitle_size,
    color: Color.grayMedium,
    display: "none",
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  divcardTitleParent: {
    alignSelf: "stretch",
  },
  divcardPrice: {
    textTransform: "uppercase",
    color: Color.primary,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    fontSize: FontSize.cardPrice_size,
  },
  divcardDescription: {
    fontSize: FontSize.textButtonSmall_size,
    color: Color.grayDark,
    fontFamily: FontFamily.bodySmall,
    alignSelf: "stretch",
    textAlign: "left",
  },
  divcardPriceParent: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  textBtn: {
    color: Color.tertiaryLight,
    fontFamily: FontFamily.bodySmall,
  },
  btnCta: {
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    marginTop: 4,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: 16,
    justifyContent: "center",
  },
  rectangleParent: {
    height: 102,
    alignItems: "center",
    flexDirection: "row",
  },
  cardProduct1: {
    marginLeft: 16,
  },
  sectionMinicardProduct: {
    top: 142,
    paddingLeft: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    width: 375,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  titleSection1: {
    top: 107,
    width: 185,
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  lesProduits: {
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
    marginLeft: 16,
    textAlign: "left",
  },
  titleCategory: {
    top: 13,
    left: 0,
    flexDirection: "row",
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
    top: 0,
  },
  header: {
    top: 44,
    width: 327,
    height: 55,
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
    color: Color.colorGray_100,
    width: 54,
    left: 0,
    textAlign: "center",
    top: "50%",
    position: "absolute",
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
    backgroundColor: Color.white,
  },
  iconsBtn1: {
    marginLeft: -10.5,
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
    bottom: 0,
    height: 60,
    left: "50%",
    position: "absolute",
  },
  divicoUserIcon: {
    right: 0,
  },
  divtabIcons: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: Color.supplementaryUltraLight,
    bottom: 0,
    height: 60,
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
  },
  text: {
    fontSize: FontSize.size_5xs,
    lineHeight: 16,
    color: Color.white,
    top: "0%",
    height: "100%",
    left: "0%",
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
  btnCta3: {
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
    width: 375,
    bottom: 0,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  listCategoriesProducts0101: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ListCategoriesProducts011;
