import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Search01011 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.search010102, styles.statusBarBg]}>
      <View
        style={[styles.cardProductParent, styles.cardProductParentPosition]}
      >
        <View style={styles.cardSpaceBlock1}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12924.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox1]}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={[styles.divcardSubtitle, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.divcardPriceClr]}>
                  500 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitle2Typo]}
                >
                  Le sachet de 500g
                </Text>
              </View>
              <View style={styles.btnCta}>
                <Text style={styles.textBtn}>Ajouter</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.cardSpaceBlock1]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12924.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox1]}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={[styles.divcardSubtitle, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.divcardPriceClr]}>
                  500 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitle2Typo]}
                >
                  Le sachet de 500g
                </Text>
              </View>
              <View style={styles.btnCta}>
                <Text style={styles.textBtn}>Ajouter</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.cardSpaceBlock1]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12924.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox1]}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={[styles.divcardSubtitle, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.divcardPriceClr]}>
                  500 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitle2Typo]}
                >
                  Le sachet de 500g
                </Text>
              </View>
              <View style={styles.btnCta}>
                <Text style={styles.textBtn}>Ajouter</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.vosProduitsRecherchs, styles.produitsTypo]}>
        Vos produits recherchés
      </Text>
      <View style={styles.cardActivitiesParent}>
        <View style={[styles.cardActivities, styles.cardSpaceBlock]}>
          <View style={styles.frameView}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle-12925.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox1]}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                  Plongée sous marine
                </Text>
                <Text style={styles.subtitleTypo}>Rangiroa - Blue Lagoon</Text>
              </View>
              <Text
                style={[styles.cardDescription, styles.cardTypo]}
              >{`Découvrez la biodiversité qui
fait la richesse de la Polynésie`}</Text>
              <View style={styles.cardPriceParent}>
                <Text style={[styles.divcardPrice, styles.divcardPriceClr]}>
                  9000 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitle2Typo]}
                >
                  Par plongée
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardActivities1, styles.cardSpaceBlock]}>
          <View style={styles.frameView}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle-12925.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox1]}>
              <View style={styles.divcardTitleParent}>
                <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                  Montagne
                </Text>
                <Text style={styles.subtitleTypo}>Rangiroa - Blue Lagoon</Text>
              </View>
              <Text
                style={[styles.cardDescription, styles.cardTypo]}
              >{`Découvrez la biodiversité qui
fait la richesse de la Polynésie`}</Text>
              <View style={styles.cardPriceParent}>
                <Text style={[styles.divcardPrice, styles.divcardPriceClr]}>
                  9000 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitle2Typo]}
                >
                  Par plongée
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.queVoulezVousAcheter, styles.headerPosition]}>
          Que voulez-vous acheter aujourdhui ?
        </Text>
        <Text style={styles.iaOraNa}>Ia ora na Hina !</Text>
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
      <View style={[styles.searchBarState0, styles.borderBorder]}>
        <View style={styles.iconsBtnParent}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn15.png")}
          />
          <Text style={styles.pastque}>Pastèque</Text>
          <Image
            style={[styles.iconsBtn1, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn16.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.search010102Child, styles.btnCtaIconLayout]}
        onPress={() => navigation.navigate("Search0102")}
      />
      <View style={styles.searchList}>
        <Text style={[styles.votreRecherche, styles.h5Typo]}>
          Votre recherche
        </Text>
        <Text style={[styles.produits, styles.produitsTypo]}>Produits</Text>
        <View style={styles.cardProductGroup}>
          <Pressable
            style={[styles.cardProduct2, styles.cardSpaceBlock]}
            onPress={() => navigation.navigate("Product0101")}
          >
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/rectangle-12913.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentFlexBox1]}>
                <View style={styles.divcardTitleParent}>
                  <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                    Pastèque
                  </Text>
                  <Text
                    style={[styles.cardSubtitle2, styles.cardSubtitle2Typo]}
                  >
                    Boutique du centre
                  </Text>
                  <Text style={styles.subtitleTypo}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View
                  style={[styles.frameParent4, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn10.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription2, styles.cardTypo]}>
                      500g
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.iconsBtn3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn18.png")}
              />
            </View>
          </Pressable>
          <View style={[styles.cardProduct3, styles.frameParentSpaceBlock]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/rectangle-12913.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentFlexBox1]}>
                <View style={styles.divcardTitleParent}>
                  <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                    Pastèque
                  </Text>
                  <Text
                    style={[styles.cardSubtitle2, styles.cardSubtitle2Typo]}
                  >
                    Boutique du centre
                  </Text>
                  <Text style={styles.subtitleTypo}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View
                  style={[styles.frameParent4, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn10.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.2</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription2, styles.cardTypo]}>
                      200g
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.iconsBtn3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn18.png")}
              />
            </View>
          </View>
          <View style={[styles.cardProduct3, styles.frameParentSpaceBlock]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/rectangle-12914.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentFlexBox1]}>
                <View style={styles.divcardTitleParent}>
                  <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                    Pastèque en morceau
                  </Text>
                  <Text
                    style={[styles.cardSubtitle2, styles.cardSubtitle2Typo]}
                  >
                    FoodGreen
                  </Text>
                  <Text style={styles.subtitleTypo}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View
                  style={[styles.frameParent4, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn10.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>5.0</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription2, styles.cardTypo]}>
                      500g
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.iconsBtn3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn18.png")}
              />
            </View>
          </View>
          <View style={[styles.cardProduct3, styles.frameParentSpaceBlock]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/rectangle-12914.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentFlexBox1]}>
                <View style={styles.divcardTitleParent}>
                  <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                    Pastèque tranchée
                  </Text>
                  <Text
                    style={[styles.cardSubtitle2, styles.cardSubtitle2Typo]}
                  >
                    FoodGreen
                  </Text>
                  <Text style={styles.subtitleTypo}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View
                  style={[styles.frameParent4, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn10.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.7</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription2, styles.cardTypo]}>
                      10000g
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.iconsBtn3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn18.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.produits, styles.produitsTypo]}>Services</Text>
        <View style={styles.cardProductGroup}>
          <View style={[styles.cardProduct2, styles.cardSpaceBlock]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/rectangle-12915.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentFlexBox1]}>
                <View style={styles.divcardTitleParent}>
                  <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                    La petite Pastèque
                  </Text>
                  <Text
                    style={[styles.cardSubtitle2, styles.cardSubtitle2Typo]}
                  >
                    Crèche
                  </Text>
                  <Text style={[styles.cardDescription2, styles.cardTypo]}>
                    Début de description du service...
                  </Text>
                </View>
                <View
                  style={[styles.frameParent12, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn10.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription6, styles.cardTypo]}>
                      (à domicile)
                    </Text>
                    <Text
                      style={[styles.cardDescription7, styles.divcardPriceClr]}
                    >
                      2.9 km
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.iconsBtn3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn19.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.produits, styles.produitsTypo]}>Commerces</Text>
        <View style={styles.cardProductGroup}>
          <View style={[styles.cardProduct2, styles.cardSpaceBlock]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/rectangle-12916.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentFlexBox1]}>
                <View style={styles.divcardTitleParent}>
                  <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                    A la Bonne Pastèque
                  </Text>
                  <Text
                    style={[styles.cardSubtitle2, styles.cardSubtitle2Typo]}
                  >{`Restaurant `}</Text>
                  <Text style={[styles.cardDescription2, styles.cardTypo]}>
                    Début de description du service...
                  </Text>
                </View>
                <View
                  style={[styles.frameParent12, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn10.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription6, styles.cardTypo]}>
                      (à domicile)
                    </Text>
                    <Text
                      style={[styles.cardDescription7, styles.divcardPriceClr]}
                    >
                      2.9 km
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.iconsBtn3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn19.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.produits, styles.produitsTypo]}>Activités</Text>
        <View style={styles.cardProductGroup}>
          <View style={[styles.cardProduct2, styles.cardSpaceBlock]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/rectangle-12917.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentFlexBox1]}>
                <View style={styles.divcardTitleParent}>
                  <Text style={[styles.divcardTitle, styles.produitsTypo]}>
                    Cuisinez la Pastèque
                  </Text>
                  <Text
                    style={[styles.cardSubtitle2, styles.cardSubtitle2Typo]}
                  >{`avec Cook Home `}</Text>
                  <Text style={[styles.cardDescription2, styles.cardTypo]}>
                    Début de description du service...
                  </Text>
                </View>
                <View
                  style={[styles.frameParent12, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn10.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription6, styles.cardTypo]}>
                      (à domicile)
                    </Text>
                    <Text
                      style={[styles.cardDescription7, styles.divcardPriceClr]}
                    >
                      2.9 km
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.iconsBtn3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/iconsbtn19.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoLayout]}>
            <Image
              style={[styles.iconsBtn16, styles.timePosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn34.png")}
            />
          </View>
          <Pressable
            style={[styles.divicoSearch, styles.divicoLayout]}
            onPress={() => navigation.navigate("Search0101")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/divicosearch1.png")}
            />
          </Pressable>
          <Image
            style={[styles.divicoHeartIcon, styles.divtabIconsPosition]}
            contentFit="cover"
            source={require("../assets/divicoheart1.png")}
          />
          <Image
            style={[styles.divicoUserIcon, styles.divicoLayout]}
            contentFit="cover"
            source={require("../assets/divicouser.png")}
          />
        </View>
        <Image
          style={[styles.btnCtaIcon, styles.btnCtaIconLayout]}
          contentFit="cover"
          source={require("../assets/btncta4.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.logoPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarBg: {
    backgroundColor: Color.white,
    width: "100%",
  },
  cardProductParentPosition: {
    opacity: 0,
    position: "absolute",
  },
  frameParentFlexBox1: {
    justifyContent: "center",
    marginLeft: 16,
  },
  produitsTypo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  subtitleTypo: {
    color: Color.grayMedium,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.cardSubtitle_size,
    textAlign: "left",
  },
  divcardPriceClr: {
    color: Color.primary,
    textAlign: "left",
  },
  cardSubtitle2Typo: {
    color: Color.grayDark,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  cardSpaceBlock1: {
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_12xs,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_xl,
    height: 102,
    borderWidth: 1,
    borderStyle: "solid",
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  cardSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.supplementaryUltraLight,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  cardTypo: {
    color: Color.grayLight,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  headerPosition: {
    top: 44,
    position: "absolute",
  },
  logoPosition: {
    top: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  btnCtaIconLayout: {
    height: 64,
    position: "absolute",
  },
  h5Typo: {
    fontSize: FontSize.h5Headline_size,
    textAlign: "left",
  },
  frameParentSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  divtabIconsPosition: {
    height: 60,
    bottom: 0,
    position: "absolute",
  },
  divicoLayout: {
    width: 69,
    height: 60,
    bottom: 0,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    borderTopLeftRadius: Border.br_lgi,
    borderBottomLeftRadius: Border.br_lgi,
    height: 100,
    width: 74,
  },
  divcardTitle: {
    lineHeight: 16,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
  },
  divcardSubtitle: {
    display: "none",
  },
  divcardTitleParent: {
    alignSelf: "stretch",
  },
  divcardPrice: {
    textTransform: "uppercase",
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
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
    color: Color.tertiaryLight,
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
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
    top: 938,
    paddingLeft: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    width: 375,
    opacity: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  vosProduitsRecherchs: {
    top: 903,
    color: Color.colorGray_100,
    left: 24,
    textAlign: "left",
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    opacity: 0,
    position: "absolute",
  },
  rectangleIcon: {
    maxHeight: "100%",
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    width: 74,
  },
  cardDescription: {
    marginTop: 12,
    fontSize: FontSize.bodySmall_size,
  },
  cardPriceParent: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  frameView: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  cardActivities: {
    height: 132,
    width: 285,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  cardActivities1: {
    height: 132,
    width: 285,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    marginLeft: 16,
  },
  cardActivitiesParent: {
    top: 747,
    width: 376,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    opacity: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  queVoulezVousAcheter: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    left: 0,
  },
  iaOraNa: {
    top: 8,
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
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
    alignItems: "center",
  },
  header: {
    height: 61,
    width: 327,
    left: 24,
  },
  pastque: {
    marginLeft: 14,
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    color: Color.black,
    flex: 1,
  },
  iconsBtn1: {
    overflow: "hidden",
    marginLeft: 14,
  },
  iconsBtnParent: {
    height: 28,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBarState0: {
    top: 129,
    borderColor: Color.supplementary,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    width: 327,
    borderRadius: Border.br_mini,
    backgroundColor: Color.supplementaryUltraLight,
    left: 24,
  },
  search010102Child: {
    top: 121,
    left: 296,
    width: 62,
  },
  votreRecherche: {
    fontFamily: FontFamily.bodySmall,
    color: Color.black,
  },
  produits: {
    marginTop: 9,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
  },
  frameChild2: {
    width: 52,
    height: 52,
    borderRadius: Border.br_mini,
  },
  cardSubtitle2: {
    fontSize: FontSize.cardSubtitle_size,
    color: Color.grayDark,
  },
  iconsBtn2: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  h5: {
    color: Color.colorBurlywood,
    marginLeft: 4,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  iconsBtnGroup: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  cardDescription2: {
    fontSize: FontSize.bodySmall_size,
  },
  frameParent4: {
    justifyContent: "space-between",
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent3: {
    marginLeft: 16,
    flex: 1,
  },
  iconsBtn3: {
    marginLeft: 16,
  },
  cardProduct2: {
    width: 327,
    flexDirection: "row",
  },
  cardProduct3: {
    width: 327,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.supplementaryUltraLight,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  cardProductGroup: {
    paddingBottom: Padding.p_base,
    marginTop: 9,
  },
  cardDescription6: {
    fontSize: FontSize.textButtonSmall_size,
  },
  cardDescription7: {
    marginLeft: 8,
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.bodySmall,
  },
  frameParent12: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 8,
    alignSelf: "stretch",
  },
  searchList: {
    top: 211,
    left: 24,
    position: "absolute",
  },
  iconsBtn16: {
    marginTop: -11,
    marginLeft: -10.5,
    left: "50%",
    height: 21,
    width: 21,
  },
  divicoHome: {
    display: "none",
    left: 0,
  },
  icon: {
    marginLeft: -111.5,
    height: "100%",
    display: "none",
    width: "100%",
  },
  divicoSearch: {
    left: "50%",
  },
  divicoHeartIcon: {
    marginLeft: 42.5,
    width: 68,
    left: "50%",
    display: "none",
  },
  divicoUserIcon: {
    right: 0,
    display: "none",
  },
  divtabIcons: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    left: "0%",
    right: "0%",
    overflow: "hidden",
    backgroundColor: Color.supplementaryUltraLight,
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
    overflow: "hidden",
    width: 375,
    position: "absolute",
  },
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: Color.white,
    opacity: 0.35,
    height: "100%",
    left: "0%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    opacity: 0.4,
    right: "0%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
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
    color: Color.colorGray_100,
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
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  search010102: {
    borderRadius: Border.br_6xl,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Search01011;
