import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Search0102 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.search010201, styles.statusBarBg]}>
      <View style={[styles.header, styles.headerLayout]}>
        <Text
          style={[styles.queVoulezVousAcheter, styles.cardDescription5Typo]}
        >
          Que voulez-vous acheter aujourdhui ?
        </Text>
        <Text style={[styles.iaOraNa, styles.iaOraNaTypo]}>
          Ia ora na Hina !
        </Text>
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
      <Pressable
        style={[styles.searchBar, styles.borderBorder]}
        onPress={() => navigation.navigate("Search0101")}
      >
        <View style={styles.iconsBtnParent}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn15.png")}
          />
          <Text style={[styles.pastque, styles.iaOraNaTypo]}>Pastèque</Text>
          <Image
            style={[styles.iconsBtn1, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn16.png")}
          />
        </View>
      </Pressable>
      <View style={styles.searchList}>
        <Text style={[styles.votreRecherche, styles.iaOraNaTypo]}>
          Votre recherche
        </Text>
        <Text style={[styles.produits, styles.h5Typo]}>Produits</Text>
        <View style={styles.cardProductParent}>
          <Pressable
            style={[styles.cardProduct, styles.cardSpaceBlock]}
            onPress={() => navigation.navigate("Product0101")}
          >
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-12913.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.h5Typo]}>
                    Pastèque
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.cardTypo1]}>
                    Boutique du centre
                  </Text>
                  <Text style={[styles.cardSubtitle1, styles.cardTypo1]}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn17.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription, styles.cardTypo]}>
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
          <View style={[styles.cardProduct1, styles.frameSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-12913.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.h5Typo]}>
                    Pastèque
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.cardTypo1]}>
                    Boutique du centre
                  </Text>
                  <Text style={[styles.cardSubtitle1, styles.cardTypo1]}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn17.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.2</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription, styles.cardTypo]}>
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
          <View style={[styles.cardProduct1, styles.frameSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-12914.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.h5Typo]}>
                    Pastèque en morceau
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.cardTypo1]}>
                    FoodGreen
                  </Text>
                  <Text style={[styles.cardSubtitle1, styles.cardTypo1]}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn17.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>5.0</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription, styles.cardTypo]}>
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
          <View style={[styles.cardProduct1, styles.frameSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-12914.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.h5Typo]}>
                    Pastèque tranchée
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.cardTypo1]}>
                    FoodGreen
                  </Text>
                  <Text style={[styles.cardSubtitle1, styles.cardTypo1]}>
                    Origine Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn17.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.7</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription, styles.cardTypo]}>
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
        <Text style={[styles.produits, styles.h5Typo]}>Services</Text>
        <View style={styles.cardProductParent}>
          <View style={[styles.cardProduct, styles.cardSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-12915.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.h5Typo]}>
                    La petite Pastèque
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.cardTypo1]}>
                    Crèche
                  </Text>
                  <Text style={[styles.cardDescription, styles.cardTypo]}>
                    Début de description du service...
                  </Text>
                </View>
                <View style={[styles.frameParent6, styles.frameSpaceBlock]}>
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn17.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription4, styles.cardTypo]}>
                      (à domicile)
                    </Text>
                    <Text
                      style={[
                        styles.cardDescription5,
                        styles.cardDescription5Typo,
                      ]}
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
        <Text style={[styles.produits, styles.h5Typo]}>Commerces</Text>
        <View style={styles.cardProductParent}>
          <View style={[styles.cardProduct, styles.cardSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-12916.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.h5Typo]}>
                    A la Bonne Pastèque
                  </Text>
                  <Text
                    style={[styles.cardSubtitle, styles.cardTypo1]}
                  >{`Restaurant `}</Text>
                  <Text style={[styles.cardDescription, styles.cardTypo]}>
                    Début de description du service...
                  </Text>
                </View>
                <View style={[styles.frameParent6, styles.frameSpaceBlock]}>
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn17.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription4, styles.cardTypo]}>
                      (à domicile)
                    </Text>
                    <Text
                      style={[
                        styles.cardDescription5,
                        styles.cardDescription5Typo,
                      ]}
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
        <Text style={[styles.produits, styles.h5Typo]}>Activités</Text>
        <View style={styles.cardProductParent}>
          <View style={[styles.cardProduct, styles.cardSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-12917.png")}
              />
              <View style={styles.frameParent}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.h5Typo]}>
                    Cuisinez la Pastèque
                  </Text>
                  <Text
                    style={[styles.cardSubtitle, styles.cardTypo1]}
                  >{`avec Cook Home `}</Text>
                  <Text style={[styles.cardDescription, styles.cardTypo]}>
                    Début de description du service...
                  </Text>
                </View>
                <View style={[styles.frameParent6, styles.frameSpaceBlock]}>
                  <View style={styles.iconsBtnGroup}>
                    <Image
                      style={styles.iconsBtn2}
                      contentFit="cover"
                      source={require("../assets/iconsbtn17.png")}
                    />
                    <Text style={[styles.h5, styles.h5Typo]}>4.8</Text>
                  </View>
                  <View style={styles.iconsBtnGroup}>
                    <Text style={[styles.cardDescription4, styles.cardTypo]}>
                      (à domicile)
                    </Text>
                    <Text
                      style={[
                        styles.cardDescription5,
                        styles.cardDescription5Typo,
                      ]}
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
              source={require("../assets/iconsbtn6.png")}
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
          style={styles.btnCtaIcon}
          contentFit="cover"
          source={require("../assets/btncta3.png")}
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
  headerLayout: {
    width: 327,
    left: 24,
  },
  cardDescription5Typo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  iaOraNaTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
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
  h5Typo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    textAlign: "left",
  },
  cardSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xl,
    backgroundColor: Color.supplementaryUltraLight,
    alignItems: "center",
    width: 327,
  },
  cardTypo1: {
    fontSize: FontSize.cardSubtitle_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  frameSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  cardTypo: {
    color: Color.grayLight,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
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
  queVoulezVousAcheter: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.cardPrice_size,
    left: 0,
    top: 44,
    position: "absolute",
  },
  iaOraNa: {
    top: 8,
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
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
    top: 44,
    position: "absolute",
  },
  pastque: {
    marginLeft: 14,
    fontSize: FontSize.cardPrice_size,
    flex: 1,
  },
  iconsBtn1: {
    overflow: "hidden",
    marginLeft: 14,
  },
  iconsBtnParent: {
    height: 28,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  searchBar: {
    top: 129,
    borderColor: Color.supplementary,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    backgroundColor: Color.supplementaryUltraLight,
    borderRadius: Border.br_mini,
    width: 327,
    left: 24,
  },
  votreRecherche: {
    fontSize: FontSize.h5Headline_size,
  },
  produits: {
    marginTop: 9,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    color: Color.black,
  },
  frameChild: {
    width: 52,
    height: 52,
    borderRadius: Border.br_mini,
  },
  cardTitle: {
    lineHeight: 16,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    color: Color.black,
  },
  cardSubtitle: {
    color: Color.grayDark,
  },
  cardSubtitle1: {
    color: Color.grayMedium,
  },
  cardTitleParent: {
    alignSelf: "stretch",
  },
  iconsBtn2: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  h5: {
    color: Color.colorBurlywood,
    marginLeft: 4,
    fontSize: FontSize.h5Headline_size,
  },
  iconsBtnGroup: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDescription: {
    fontSize: FontSize.bodySmall_size,
  },
  frameGroup: {
    justifyContent: "space-between",
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    justifyContent: "center",
    marginLeft: 16,
    flex: 1,
  },
  iconsBtn3: {
    marginLeft: 16,
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardProduct: {
    flexDirection: "row",
  },
  cardProduct1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xl,
    backgroundColor: Color.supplementaryUltraLight,
    alignItems: "center",
    width: 327,
  },
  cardProductParent: {
    paddingBottom: Padding.p_base,
    marginTop: 9,
  },
  cardDescription4: {
    fontSize: FontSize.textButtonSmall_size,
  },
  cardDescription5: {
    color: Color.primary,
    marginLeft: 8,
    fontSize: FontSize.bodySmall_size,
  },
  frameParent6: {
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
    display: "none",
    left: "50%",
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
    height: 64,
    left: "50%",
    position: "absolute",
  },
  tabBar: {
    marginLeft: -187.5,
    width: 375,
    height: 85,
    left: "50%",
    bottom: 0,
    overflow: "hidden",
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
    maxHeight: "100%",
    opacity: 0.4,
    right: "0%",
    overflow: "hidden",
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
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  search010201: {
    borderRadius: Border.br_6xl,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Search0102;
