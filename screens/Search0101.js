import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Search0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.search010101, styles.statusBarLayout]}>
      <View style={[styles.cardProductParent, styles.titlePosition]}>
        <View style={[styles.cardProduct, styles.cardSpaceBlock1]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Pastèque
                </Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>500g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>Orange</Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>200g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Blueberries
                </Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>500g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Croissant
                </Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>10000g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Coffee with Creamer
                </Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>100g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Avocado
                </Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>5000g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>Banana</Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>1000g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>Orange</Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>500g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>Egg</Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>5000g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Coffee with Creamer
                </Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>100g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
        <View style={[styles.cardProduct1, styles.frameGroupSpaceBlock]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-12918.png")}
            />
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>Bacon</Text>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleTypo]}>
                  Boutique du centre
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
                <View style={styles.iconsBtnParent}>
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn35.png")}
                  />
                  <Text style={[styles.h5, styles.titleTypo]}>4.8</Text>
                </View>
                <View style={styles.iconsBtnParent}>
                  <Text style={styles.cardTypo}>200g</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn36.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.wantedProducts}>
        <View style={styles.cardSpaceBlock}>
          <View style={styles.rectangleParent9}>
            <Image
              style={styles.frameChild8}
              contentFit="cover"
              source={require("../assets/rectangle-1291.png")}
            />
            <View style={[styles.frameParent19, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={[styles.divcardSubtitle, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  500 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitleTypo]}
                >
                  La pièce
                </Text>
              </View>
              <View style={[styles.btnCta, styles.btnCtaSpaceBlock]}>
                <Text style={[styles.textBtn, styles.subtitleTypo]}>
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardProduct12, styles.cardSpaceBlock]}>
          <View style={styles.rectangleParent9}>
            <Image
              style={styles.frameChild8}
              contentFit="cover"
              source={require("../assets/rectangle-12919.png")}
            />
            <View style={[styles.frameParent19, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>Mangue</Text>
                <Text style={[styles.divcardSubtitle, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  500 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitleTypo]}
                >
                  La pièce
                </Text>
              </View>
              <View style={[styles.btnCta, styles.btnCtaSpaceBlock]}>
                <Text style={[styles.textBtn, styles.subtitleTypo]}>
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardProduct12, styles.cardSpaceBlock]}>
          <View style={styles.rectangleParent9}>
            <Image
              style={styles.frameChild8}
              contentFit="cover"
              source={require("../assets/rectangle-12920.png")}
            />
            <View style={[styles.frameParent19, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>Papaye</Text>
                <Text style={[styles.divcardSubtitle, styles.subtitleTypo]}>
                  Origine Polynésie Française
                </Text>
              </View>
              <View style={styles.divcardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  500 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitleTypo]}
                >
                  La pièce
                </Text>
              </View>
              <View style={[styles.btnCta, styles.btnCtaSpaceBlock]}>
                <Text style={[styles.textBtn, styles.subtitleTypo]}>
                  Ajouter
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.titleSection, styles.titleTypo]}>
        Vos produits recherchés
      </Text>
      <View style={[styles.latestSearches, styles.btnCtaSpaceBlock]}>
        <View style={styles.cardLayout}>
          <View style={styles.rectangleParent12}>
            <Image
              style={styles.frameChild11}
              contentFit="cover"
              source={require("../assets/rectangle-12921.png")}
            />
            <View style={[styles.frameParent19, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Plongée sous marine
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Rangiroa - Blue Lagoon
                </Text>
              </View>
              <Text
                style={[styles.cardDescription11, styles.cardTypo]}
              >{`Découvrez la biodiversité qui
fait la richesse de la Polynésie`}</Text>
              <View style={styles.cardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  9000 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitleTypo]}
                >
                  Par plongée
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardActivities1, styles.cardLayout]}>
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild11}
              contentFit="cover"
              source={require("../assets/rectangle-12922.png")}
            />
            <View style={[styles.frameParent19, styles.frameParentFlexBox]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.titleTypo]}>
                  Montagne
                </Text>
                <Text style={[styles.cardSubtitle1, styles.subtitleTypo]}>
                  Rangiroa - Blue Lagoon
                </Text>
              </View>
              <Text
                style={[styles.cardDescription11, styles.cardTypo]}
              >{`Découvrez la biodiversité qui
fait la richesse de la Polynésie`}</Text>
              <View style={styles.cardPriceParent}>
                <Text style={[styles.divcardPrice, styles.titleTypo]}>
                  9000 F
                </Text>
                <Text
                  style={[styles.divcardDescription, styles.cardSubtitleTypo]}
                >
                  Par plongée
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.titleSection1, styles.titleTypo]}>
        Vos dernières recherches
      </Text>
      <View style={[styles.searchBarState0, styles.headerLayout]}>
        <View style={styles.iconsBtnParent9}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn37.png")}
          />
          <Text style={[styles.placeholder, styles.iaOraNaTypo]}>
            Un commerçant, produit, service...
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.search010101Child, styles.btnCtaIconLayout]}
        onPress={() => navigation.navigate("Search01011")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.queVoulezVousAcheter, styles.headerPosition]}>
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
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn23, styles.timePosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn6.png")}
            />
          </View>
          <Image
            style={[styles.divicoSearchIcon, styles.divicoIconLayout]}
            contentFit="cover"
            source={require("../assets/divicosearch1.png")}
          />
          <Image
            style={[styles.divicoHeartIcon, styles.divtabIconsPosition]}
            contentFit="cover"
            source={require("../assets/divicoheart1.png")}
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
          source={require("../assets/btncta4.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.logoPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
  statusBarLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  titlePosition: {
    left: 24,
    position: "absolute",
  },
  cardSpaceBlock1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    width: 327,
    backgroundColor: Color.supplementaryUltraLight,
    borderRadius: Border.br_xl,
  },
  frameParentFlexBox: {
    justifyContent: "center",
    marginLeft: 16,
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  cardSubtitleTypo: {
    color: Color.grayDark,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  subtitleTypo: {
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  frameGroupSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  btnCtaSpaceBlock: {
    paddingVertical: 0,
    flexDirection: "row",
  },
  cardSpaceBlock: {
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_12xs,
    borderColor: Color.colorTurquoise_100,
    height: 102,
    borderWidth: 1,
    borderStyle: "solid",
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  cardTypo: {
    color: Color.grayLight,
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  cardLayout: {
    height: 132,
    width: 285,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.supplementaryUltraLight,
    borderRadius: Border.br_xl,
  },
  headerLayout: {
    width: 327,
    left: 24,
  },
  iaOraNaTypo: {
    lineHeight: 28,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  btnCtaIconLayout: {
    height: 64,
    position: "absolute",
  },
  headerPosition: {
    top: 44,
    position: "absolute",
  },
  logoPosition: {
    top: 0,
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
    display: "none",
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    width: 52,
    height: 52,
    borderRadius: Border.br_mini,
  },
  cardTitle: {
    lineHeight: 16,
    color: Color.black,
    fontSize: FontSize.bodyLarge_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  cardSubtitle: {
    fontSize: FontSize.cardSubtitle_size,
  },
  cardSubtitle1: {
    color: Color.grayMedium,
    fontSize: FontSize.cardSubtitle_size,
  },
  cardTitleParent: {
    alignSelf: "stretch",
  },
  iconsBtn: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  h5: {
    fontSize: FontSize.h5Headline_size,
    color: Color.colorBurlywood,
    marginLeft: 4,
  },
  iconsBtnParent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameParent: {
    marginLeft: 16,
    flex: 1,
  },
  iconsBtn1: {
    marginLeft: 16,
  },
  rectangleParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  cardProduct: {
    flexDirection: "row",
  },
  cardProduct1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    width: 327,
    backgroundColor: Color.supplementaryUltraLight,
    borderRadius: Border.br_xl,
  },
  cardProductParent: {
    top: 654,
    opacity: 0,
  },
  frameChild8: {
    borderTopLeftRadius: Border.br_lgi,
    borderBottomLeftRadius: Border.br_lgi,
    height: 100,
    width: 74,
  },
  divcardSubtitle: {
    display: "none",
    color: Color.grayMedium,
    fontSize: FontSize.cardSubtitle_size,
  },
  divcardPrice: {
    textTransform: "uppercase",
    color: Color.primary,
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
    color: Color.tertiaryLight,
    fontSize: FontSize.cardPrice_size,
  },
  btnCta: {
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_lg,
    marginTop: 4,
    alignItems: "center",
    paddingVertical: 0,
    borderRadius: Border.br_xl,
  },
  frameParent19: {
    marginLeft: 16,
  },
  rectangleParent9: {
    height: 102,
    alignItems: "center",
    flexDirection: "row",
  },
  cardProduct12: {
    marginLeft: 16,
  },
  wantedProducts: {
    top: 429,
    paddingHorizontal: Padding.p_5xl,
    paddingBottom: Padding.p_5xs,
    width: 375,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  titleSection: {
    top: 394,
    color: Color.colorGray_100,
    fontSize: FontSize.bodyLarge_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    left: 24,
    position: "absolute",
  },
  frameChild11: {
    maxHeight: "100%",
    width: 74,
    alignSelf: "stretch",
    borderRadius: Border.br_mini,
  },
  cardDescription11: {
    marginTop: 12,
  },
  cardPriceParent: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  rectangleParent12: {
    alignItems: "center",
    flexDirection: "row",
  },
  cardActivities1: {
    marginLeft: 16,
  },
  latestSearches: {
    top: 238,
    width: 376,
    left: 0,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    position: "absolute",
  },
  titleSection1: {
    top: 203,
    color: Color.colorGray_100,
    fontSize: FontSize.bodyLarge_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    left: 24,
    position: "absolute",
  },
  placeholder: {
    marginLeft: 14,
    fontSize: FontSize.cardPrice_size,
    color: Color.grayMedium,
    flex: 1,
  },
  iconsBtnParent9: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBarState0: {
    top: 129,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  search010101Child: {
    top: 121,
    left: 296,
    width: 62,
  },
  queVoulezVousAcheter: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.cardPrice_size,
    left: 0,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  iaOraNa: {
    top: 8,
    fontSize: FontSize.h1Head_size,
    left: 0,
    color: Color.black,
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
  iconsBtn23: {
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
    display: "none",
  },
  divicoUserIcon: {
    right: 0,
  },
  divtabIcons: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    left: "0%",
    right: "0%",
    overflow: "hidden",
    backgroundColor: Color.supplementaryUltraLight,
    height: 60,
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
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: Color.white,
    opacity: 0.35,
    left: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
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
    maxHeight: "100%",
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
  search010101: {
    borderRadius: Border.br_6xl,
    height: 812,
    flex: 1,
  },
});

export default Search0101;
