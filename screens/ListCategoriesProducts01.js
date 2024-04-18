import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const ListCategoriesProducts01 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.listCategoriesProducts0101, styles.statusBarBg]}>
      <View style={[styles.bestSeller, styles.bestPosition]}>
        <Text style={[styles.vosDerniersAchats, styles.lesProduitsTypo]}>
          Vos derniers achats
        </Text>
        <View style={[styles.bestSellerChild, styles.bestBorder]} />
      </View>
      <View style={[styles.bestSeller1, styles.bestPosition]}>
        <Text style={[styles.vosDerniersAchats, styles.lesProduitsTypo]}>
          Les rayons
        </Text>
        <View style={[styles.bestSellerItem, styles.bestBorder]} />
      </View>
      <View style={styles.cardProductParent}>
        <View style={styles.cardSpaceBlock}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-1294.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.divcardTypo]}>
                  Noix de coco
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
              source={require("../assets/rectangle-1292.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.divcardTypo]}>
                  Oignons nouveaux
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
              source={require("../assets/rectangle-1293.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.divcardTypo]}>
                  Brocolis
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
              source={require("../assets/rectangle-1294.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.divcardTypo]}>
                  Noix de coco
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
      <View style={styles.frameParent2}>
        <View style={styles.btnCatProductsParent}>
          <View style={styles.btnLayout}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.timePosition]}>
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
              <Text style={[styles.nouveauts, styles.timePosition]}>
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
              <Text style={[styles.nouveauts, styles.timePosition]}>
                Coups de coeur
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnCatProductsGroup}>
          <View style={styles.btnLayout}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories3.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.timePosition]}>
                Épicerie salée
              </Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts4, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories4.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.timePosition]}>
                Épicerie sucrée
              </Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts4, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories5.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.timePosition]}>
                Animalerie
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnCatProductsGroup}>
          <View style={styles.btnLayout}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories6.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.timePosition]}
              >{`Viande & Poisson`}</Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts4, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories7.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.timePosition]}>
                Crémerie
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.btnCatProducts4, styles.btnLayout]}
            onPress={() => navigation.navigate("ListProducts0101")}
          >
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories8.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.timePosition]}
              >{`Fruits & Légumes`}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.btnCatProductsGroup}>
          <View style={styles.btnLayout}>
            <View style={styles.btnImgCategoriesIcon}>
              <Image
                style={[styles.image28Icon, styles.timePosition]}
                contentFit="cover"
                source={require("../assets/image-28.png")}
              />
            </View>
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.timePosition]}
              >{`Épices & Condiments`}</Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts4, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories9.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text
                style={[styles.nouveauts, styles.timePosition]}
              >{`High Tech & Multimédia`}</Text>
            </View>
          </View>
          <View style={[styles.btnCatProducts4, styles.btnLayout]}>
            <Image
              style={styles.btnImgCategoriesIcon}
              contentFit="cover"
              source={require("../assets/btnimgcategories10.png")}
            />
            <View style={[styles.categoriesTitle, styles.nouveautsLayout]}>
              <Text style={[styles.nouveauts, styles.timePosition]}>
                Électroménager
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <Pressable
          style={styles.titleCategory}
          onPress={() => navigation.navigate("Home0101")}
        >
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn5.png")}
          />
          <Text style={[styles.lesProduits, styles.divcardTypo]}>
            Les produits
          </Text>
        </Pressable>
        <Pressable
          style={styles.logo}
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
      <View style={[styles.statusBar, styles.borderPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
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
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.borderPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn6.png")}
            />
          </View>
          <Image
            style={[styles.divicoSearchIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicosearch.png")}
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
        <Image
          style={styles.btnCtaIcon}
          contentFit="cover"
          source={require("../assets/btncta.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarBg: {
    backgroundColor: Color.white,
    width: "100%",
  },
  bestPosition: {
    paddingRight: Padding.p_base,
    paddingLeft: Padding.p_5xl,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    left: 0,
    position: "absolute",
  },
  lesProduitsTypo: {
    lineHeight: 28,
    fontSize: FontSize.h1Head_size,
    textAlign: "left",
    color: Color.black,
  },
  bestBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.supplementary,
    borderStyle: "solid",
    marginLeft: 8,
  },
  divcardTypo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  textBtnTypo: {
    fontSize: FontSize.cardPrice_size,
    textAlign: "left",
  },
  cardSpaceBlock: {
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_12xs,
    borderColor: Color.colorTurquoise_100,
    height: 102,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    paddingBottom: Padding.p_5xs,
    borderStyle: "solid",
    paddingRight: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  nouveautsLayout: {
    height: 30,
    left: "50%",
    marginLeft: -52,
    width: 104,
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  btnLayout: {
    height: 90,
    width: 104,
    overflow: "hidden",
  },
  borderPosition: {
    left: "0%",
    position: "absolute",
  },
  divicoIconLayout: {
    width: 69,
    bottom: 0,
    height: 60,
    position: "absolute",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  vosDerniersAchats: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.bodySmall,
  },
  bestSellerChild: {
    marginLeft: 8,
    flex: 1,
  },
  bestSeller: {
    top: 107,
  },
  bestSellerItem: {
    width: 216,
    marginLeft: 8,
  },
  bestSeller1: {
    top: 276,
  },
  frameChild: {
    borderTopLeftRadius: Border.br_lgi,
    borderBottomLeftRadius: Border.br_lgi,
    width: 74,
    height: 100,
  },
  divcardTitle: {
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 16,
    textAlign: "left",
    color: Color.black,
  },
  divcardSubtitle: {
    fontSize: FontSize.cardSubtitle_size,
    color: Color.grayMedium,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  divcardTitleParent: {
    alignSelf: "stretch",
  },
  divcardPrice: {
    textTransform: "uppercase",
    color: Color.primary,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  divcardDescription: {
    fontSize: FontSize.textButtonSmall_size,
    color: Color.grayDark,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
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
  cardProductParent: {
    top: 151,
    paddingHorizontal: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    left: 0,
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
    height: 30,
    left: "50%",
    marginLeft: -52,
    width: 104,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    justifyContent: "center",
    color: Color.black,
    alignItems: "center",
  },
  categoriesTitle: {
    bottom: 0,
    position: "absolute",
  },
  btnCatProducts1: {
    marginLeft: 10,
  },
  btnCatProductsParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  btnCatProducts4: {
    marginLeft: 8,
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
    height: 60,
    left: "50%",
  },
  frameParent2: {
    top: 344,
    left: 23,
    width: 332,
    height: 359,
    position: "absolute",
  },
  lesProduits: {
    marginLeft: 16,
    textAlign: "left",
    color: Color.black,
    lineHeight: 28,
    fontSize: FontSize.h1Head_size,
  },
  titleCategory: {
    top: 13,
    alignItems: "center",
    flexDirection: "row",
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
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  header: {
    top: 44,
    left: 24,
    width: 327,
    height: 55,
    position: "absolute",
  },
  border: {
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: Color.white,
    opacity: 0.35,
    borderWidth: 1,
    left: "0%",
    borderStyle: "solid",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
    overflow: "hidden",
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
    height: 44,
    right: "0%",
    top: 0,
    width: "100%",
    backgroundColor: Color.white,
  },
  iconsBtn1: {
    marginTop: -11,
    marginLeft: -10.5,
    top: "50%",
    position: "absolute",
    left: "50%",
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
    right: "0%",
    bottom: 0,
    height: 60,
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
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  listCategoriesProducts0101: {
    borderRadius: Border.br_6xl,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ListCategoriesProducts01;
