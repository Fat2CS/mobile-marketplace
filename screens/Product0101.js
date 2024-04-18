import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Product0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.product010101}>
      <View style={styles.scrollPage}>
        <View style={[styles.foodCookParent, styles.parentPosition]}>
          <Text style={[styles.foodCook, styles.textTypo]}>Food Cook</Text>
          <Text
            style={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.`}</Text>
          <View style={[styles.btnCta, styles.btnShadowBox]}>
            <Pressable onPress={() => navigation.navigate("Commerce0101")}>
              <Text style={styles.body1white2Typo}>Voir commerçant</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.cardTrustpilotParent, styles.parentPosition]}>
          <View style={styles.cardSpaceBlock}>
            <View style={styles.frameParent}>
              <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
                <View style={styles.frameWrapper}>
                  <View style={styles.iconsBtnParent}>
                    <Image
                      style={styles.iconsBtn}
                      contentFit="cover"
                      source={require("../assets/iconsbtn9.png")}
                    />
                    <Text style={[styles.h5, styles.textTypo]}>4,8</Text>
                  </View>
                </View>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleClr]}>
                  il y a 2h
                </Text>
              </View>
              <Text style={[styles.cardTitile, styles.pastqueTypo]}>
                sadwolf227
              </Text>
              <View style={styles.cardDescriptionWrapper}>
                <Text style={styles.cardDescription}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardTrustpilot1, styles.cardSpaceBlock]}>
            <View style={styles.frameParent}>
              <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
                <View style={styles.frameWrapper}>
                  <View style={styles.iconsBtnParent}>
                    <Image
                      style={styles.iconsBtn}
                      contentFit="cover"
                      source={require("../assets/iconsbtn9.png")}
                    />
                    <Text style={[styles.h5, styles.textTypo]}>4,1</Text>
                  </View>
                </View>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleClr]}>
                  il y a 2h
                </Text>
              </View>
              <Text style={[styles.cardTitile, styles.pastqueTypo]}>
                greenkoala518
              </Text>
              <View style={styles.cardDescriptionWrapper}>
                <Text style={styles.cardDescription}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardTrustpilot1, styles.cardSpaceBlock]}>
            <View style={styles.frameParent}>
              <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
                <View style={styles.frameWrapper}>
                  <View style={styles.iconsBtnParent}>
                    <Image
                      style={styles.iconsBtn}
                      contentFit="cover"
                      source={require("../assets/iconsbtn9.png")}
                    />
                    <Text style={[styles.h5, styles.textTypo]}>4,7</Text>
                  </View>
                </View>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleClr]}>
                  il y a 2h
                </Text>
              </View>
              <Text style={[styles.cardTitile, styles.pastqueTypo]}>
                crazyelephant681
              </Text>
              <View style={styles.cardDescriptionWrapper}>
                <Text style={styles.cardDescription}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardTrustpilot1, styles.cardSpaceBlock]}>
            <View style={styles.frameParent}>
              <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
                <View style={styles.frameWrapper}>
                  <View style={styles.iconsBtnParent}>
                    <Image
                      style={styles.iconsBtn}
                      contentFit="cover"
                      source={require("../assets/iconsbtn9.png")}
                    />
                    <Text style={[styles.h5, styles.textTypo]}>4,4</Text>
                  </View>
                </View>
                <Text style={[styles.cardSubtitle, styles.cardSubtitleClr]}>
                  il y a 2h
                </Text>
              </View>
              <Text style={[styles.cardTitile, styles.pastqueTypo]}>
                silverlion355
              </Text>
              <View style={styles.cardDescriptionWrapper}>
                <Text style={styles.cardDescription}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.btnCta1}>
            <Text style={styles.body1white1}>Voir plus</Text>
          </View>
        </View>
        <Text style={[styles.proposDuCommerant, styles.avisClientsTypo]}>
          À propos du commerçant
        </Text>
        <Text style={[styles.avisClients, styles.avisClientsTypo]}>
          Avis clients
        </Text>
        <Text style={styles.vousAimerezAussi}>Vous aimerez aussi...</Text>
        <View style={styles.cardProductDetails}>
          <View style={[styles.frameParent5, styles.headerLayout]}>
            <View style={styles.originePolynsieFranaiseParent}>
              <Text style={[styles.originePolynsieFranaise, styles.laPiceTypo]}>
                Origine Polynésie Française
              </Text>
              <Text style={[styles.pastque, styles.pastqueTypo]}>Pastèque</Text>
            </View>
            <View style={styles.f430FParent}>
              <Text style={[styles.f430FContainer, styles.textTypo]}>
                <Text style={styles.f}>500 F</Text>
                <Text style={styles.f1}> 430 F</Text>
              </Text>
              <Text style={[styles.laPice, styles.laPiceTypo]}>La pièce</Text>
            </View>
          </View>
          <Text style={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet
            odio vel lacus accumsan, congue mattis lectus lobortis.
          </Text>
          <View style={[styles.frameParent6, styles.frameParentFlexBox]}>
            <View style={styles.iconsBtnParent}>
              <Image
                style={styles.iconsBtn}
                contentFit="cover"
                source={require("../assets/iconsbtn10.png")}
              />
              <Text style={[styles.text, styles.textLayout]}>4.8</Text>
              <Text style={[styles.valuations, styles.textLayout]}>
                39 évaluations
              </Text>
            </View>
            <Image
              style={styles.image29Icon}
              contentFit="cover"
              source={require("../assets/image-29.png")}
            />
          </View>
          <View style={[styles.btnCta2, styles.btnShadowBox]}>
            <Image
              style={styles.iconsLayout1}
              contentFit="cover"
              source={require("../assets/iconsbtn11.png")}
            />
            <Text style={[styles.body1white2, styles.body1white2Typo]}>
              Ajouter au panier
            </Text>
          </View>
          <View style={[styles.iconsBtn6, styles.iconsLayout]}>
            <Image
              style={[styles.iconsBtnChild, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
            <Text style={[styles.text1, styles.text1Position]}>1</Text>
          </View>
          <View style={[styles.bannerImgProduct, styles.divitemLayout]}>
            <View style={[styles.divitem, styles.divitemLayout]}>
              <Image
                style={styles.divbannerItemIcon}
                contentFit="cover"
                source={require("../assets/divbanneritem.png")}
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
        <View style={styles.scrollPageInner}>
          <View style={styles.frameParent7}>
            <View style={styles.parentLayout}>
              <Image
                style={[styles.uru1Icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/uru-1.png")}
              />
              <Text
                style={[
                  styles.bananesTahitiFruitsContainer,
                  styles.containerPosition2,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Bananes
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer, styles.kiloContainerLayout]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`500 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.uru2Parent}>
              <Image
                style={[styles.uru2Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/uru-2.png")}
              />
              <Text
                style={[
                  styles.patatesDoucesTahitiContainer,
                  styles.containerPosition1,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Patates douces
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer2, styles.containerPosition1]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`300 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.uru2Parent}>
              <Image
                style={[styles.uru3Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/uru-3.png")}
              />
              <Text
                style={[
                  styles.tomatesTahitiFruitsContainer,
                  styles.containerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Tomates
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer4, styles.containerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`650 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.uru4Parent, styles.parentLayout]}>
              <Image
                style={[styles.uru1Icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/uru-4.png")}
              />
              <Text
                style={[
                  styles.pimentsTahitiFruitsContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Piments
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer6, styles.kiloContainerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`500 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.uru4Parent, styles.parentLayout]}>
              <Image
                style={[styles.uru1Icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/uru-5.png")}
              />
              <Text
                style={[
                  styles.pimentsTahitiFruitsContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Raisin
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[
                  styles.xpfLeKiloContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`730 XPF
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <Pressable
              style={[styles.uru4Parent, styles.parentLayout]}
              onPress={() => navigation.navigate("Product01011")}
            >
              <Image
                style={[styles.uru1Icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/uru-1.png")}
              />
              <Text
                style={[
                  styles.bananesTahitiFruitsContainer,
                  styles.containerPosition2,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Bananes
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer, styles.kiloContainerLayout]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`500 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </Pressable>
            <View style={styles.uru2Parent}>
              <Image
                style={[styles.uru2Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/uru-2.png")}
              />
              <Text
                style={[
                  styles.patatesDoucesTahitiContainer,
                  styles.containerPosition1,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Patates douces
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer2, styles.containerPosition1]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`300 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.uru2Parent}>
              <Image
                style={[styles.uru3Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/uru-3.png")}
              />
              <Text
                style={[
                  styles.tomatesTahitiFruitsContainer2,
                  styles.containerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Tomates
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer4, styles.containerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`650 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.uru4Parent, styles.parentLayout]}>
              <Image
                style={[styles.uru1Icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/uru-4.png")}
              />
              <Text
                style={[
                  styles.pimentsTahitiFruitsContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Piments
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer6, styles.kiloContainerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`500 F
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.uru4Parent, styles.parentLayout]}>
              <Image
                style={[styles.uru1Icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/uru-5.png")}
              />
              <Text
                style={[
                  styles.pimentsTahitiFruitsContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Raisin
`}</Text>
                  <Text style={styles.cardSubtitleClr}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[
                  styles.xpfLeKiloContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f2, styles.textTypo]}>{`730 XPF
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.header, styles.headerLayout]}>
          <Image
            style={[styles.iconsBtn7, styles.iconsPosition]}
            contentFit="cover"
            source={require("../assets/iconsbtn12.png")}
          />
          <Pressable
            style={[styles.titleCategory, styles.iconsPosition]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/titlecategory.png")}
            />
          </Pressable>
          <View style={[styles.logo, styles.logoPosition]}>
            <Image
              style={styles.logoIcon}
              contentFit="cover"
              source={require("../assets/logo1.png")}
            />
            <Text style={styles.ohie}>Ohie !</Text>
          </View>
        </View>
        <View style={styles.btnCta3}>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-19.png")}
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
              style={[styles.iconsBtn8, styles.iconsPosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn13.png")}
            />
            <View style={[styles.iconsBtn9, styles.logoPosition]}>
              <Image
                style={[styles.iconsBtnChild, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-201.png")}
              />
              <Text style={[styles.text1, styles.text1Position]}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn10, styles.timePosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn14.png")}
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
          style={styles.btnCtaIcon}
          contentFit="cover"
          source={require("../assets/btncta2.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.text1Position]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.text1Position]} />
          <Image
            style={[styles.capIcon, styles.iconChildLayout]}
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
  parentPosition: {
    left: 43,
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
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
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.primary,
    alignItems: "center",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardSubtitleClr: {
    color: Color.grayMedium,
    fontSize: FontSize.textButtonSmall_size,
  },
  pastqueTypo: {
    color: Color.black,
    lineHeight: 16,
    fontSize: FontSize.bodyLarge_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  cardSpaceBlock: {
    padding: Padding.p_base,
    borderRadius: Border.br_mini,
  },
  avisClientsTypo: {
    width: 153,
    color: Color.colorGray_100,
    left: 24,
    fontFamily: FontFamily.bodySmall,
    height: 14,
    textAlign: "left",
    fontSize: FontSize.h5Headline_size,
    position: "absolute",
  },
  headerLayout: {
    width: 327,
    position: "absolute",
  },
  laPiceTypo: {
    fontSize: FontSize.cardSubtitle_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  textLayout: {
    lineHeight: 28,
    marginLeft: 4,
    textAlign: "left",
  },
  body1white2Typo: {
    color: Color.tertiaryLight,
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  iconsLayout: {
    height: 16,
    width: 16,
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Position: {
    top: "0%",
    left: "0%",
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
  containerPosition2: {
    left: "7.64%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  kiloContainerLayout: {
    width: "53.33%",
    top: "77.23%",
  },
  iconPosition: {
    bottom: "62%",
    height: "38%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  containerPosition1: {
    left: "5.14%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  containerPosition: {
    left: "3.47%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  parentLayout: {
    height: 101,
    width: 72,
  },
  kiloContainerPosition: {
    left: "11.39%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  iconsPosition: {
    top: 11,
    height: 21,
    width: 21,
    position: "absolute",
  },
  logoPosition: {
    display: "none",
    position: "absolute",
  },
  groupLayout: {
    width: "95.08%",
    height: "96.67%",
  },
  groupPosition: {
    bottom: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  foodCook: {
    height: 14,
    textAlign: "left",
    color: Color.complementary,
    fontSize: FontSize.h5Headline_size,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  loremIpsumDolor: {
    lineHeight: 13,
    width: 289,
    marginTop: 16,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.textButtonSmall_size,
    textAlign: "left",
  },
  btnCta: {
    marginTop: 16,
  },
  foodCookParent: {
    top: 719,
    alignItems: "center",
  },
  iconsBtn: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  h5: {
    color: Color.colorBurlywood,
    marginLeft: 3,
    textAlign: "left",
    fontSize: FontSize.h5Headline_size,
    fontWeight: "500",
  },
  iconsBtnParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    justifyContent: "center",
    flexDirection: "row",
  },
  cardSubtitle: {
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
  },
  frameGroup: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  cardTitile: {
    marginTop: 8,
    textAlign: "center",
  },
  cardDescription: {
    color: Color.grayDark,
    fontSize: FontSize.bodySmall_size,
    width: 268,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  cardDescriptionWrapper: {
    height: 56,
    width: 268,
    marginTop: 8,
  },
  frameParent: {
    height: 104,
  },
  cardTrustpilot1: {
    marginTop: 8,
  },
  body1white1: {
    color: Color.primary,
    textAlign: "center",
    fontSize: FontSize.cardPrice_size,
    fontFamily: FontFamily.bodySmall,
  },
  btnCta1: {
    borderColor: Color.primary,
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginTop: 8,
    alignItems: "center",
  },
  cardTrustpilotParent: {
    top: 1072,
    height: 739,
    alignItems: "center",
  },
  proposDuCommerant: {
    top: 689,
  },
  avisClients: {
    top: 1042,
  },
  vousAimerezAussi: {
    top: 529,
    width: 160,
    height: 18,
    color: Color.colorGray_100,
    left: 24,
    fontSize: FontSize.bodyLarge_size,
    textAlign: "left",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    position: "absolute",
  },
  originePolynsieFranaise: {
    color: Color.complementary,
  },
  pastque: {
    textAlign: "left",
  },
  originePolynsieFranaiseParent: {
    width: 154,
  },
  f: {
    textDecoration: "line-through",
    color: Color.grayLight,
  },
  f1: {
    color: Color.primary,
  },
  f430FContainer: {
    textTransform: "uppercase",
    fontSize: FontSize.cardPrice_size,
    textAlign: "left",
  },
  laPice: {
    color: Color.grayDark,
  },
  f430FParent: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameParent5: {
    top: 299,
    left: 25,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  loremIpsumDolor1: {
    top: 344,
    left: 42,
    width: 293,
    display: "flex",
    fontSize: FontSize.bodySmall_size,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    color: Color.colorNavajowhite,
    marginLeft: 4,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    fontSize: FontSize.h5Headline_size,
  },
  valuations: {
    color: Color.colorDarkgray_200,
    marginLeft: 4,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.textButtonSmall_size,
  },
  image29Icon: {
    width: 58,
    height: 31,
  },
  frameParent6: {
    top: 414,
    left: 41,
    width: 295,
    alignItems: "center",
    position: "absolute",
  },
  iconsLayout1: {
    height: 21,
    width: 21,
  },
  body1white2: {
    marginLeft: 8,
  },
  btnCta2: {
    top: 469,
    left: 100,
    position: "absolute",
  },
  iconsBtnChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text1: {
    lineHeight: 16,
    color: Color.white,
    fontSize: FontSize.size_5xs,
    left: "0%",
    height: "100%",
    textAlign: "center",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    position: "absolute",
    width: "100%",
  },
  iconsBtn6: {
    top: 474,
    left: 121,
    opacity: 0,
    position: "absolute",
  },
  divbannerItemIcon: {
    width: 380,
    height: 248,
  },
  divsliderbannerItemChild: {
    width: 20,
    backgroundColor: Color.primary,
    height: 5,
  },
  divsliderbannerItemItem: {
    backgroundColor: Color.colorGainsboro,
    width: 5,
    marginLeft: 4,
  },
  divsliderbannerItem: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
  },
  divitem: {
    left: 1,
    alignItems: "center",
  },
  bannerImgProduct: {
    left: 2,
  },
  cardProductDetails: {
    top: -10,
    height: 503,
    width: 374,
    left: 0,
    position: "absolute",
  },
  uru1Icon: {
    height: "37.62%",
    bottom: "62.38%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  bananes: {
    color: Color.colorBlack,
    fontSize: FontSize.bodySmall_size,
  },
  bananesTahitiFruitsContainer1: {
    width: "100%",
  },
  bananesTahitiFruitsContainer: {
    top: "44.55%",
    width: "81.94%",
    fontFamily: FontFamily.bodySmall,
  },
  f2: {
    color: Color.primary,
    fontSize: FontSize.textButtonSmall_size,
  },
  leKilo: {
    fontSize: FontSize.size_5xs,
    color: Color.grayDark,
    fontFamily: FontFamily.bodySmall,
  },
  fLeKiloContainer: {
    top: "77.23%",
    left: "7.64%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  uru2Icon: {
    width: "68.06%",
    right: "31.94%",
  },
  patatesDoucesTahitiContainer: {
    width: "94.86%",
    top: "38%",
    fontFamily: FontFamily.bodySmall,
  },
  fLeKiloContainer2: {
    height: "24%",
    width: "84.44%",
    top: "76%",
  },
  uru2Parent: {
    width: 72,
    height: 100,
    marginLeft: 4,
  },
  uru3Icon: {
    right: "0%",
    width: "100%",
  },
  tomatesTahitiFruitsContainer: {
    width: "82.78%",
    top: "45%",
    left: "3.47%",
    fontFamily: FontFamily.bodySmall,
  },
  fLeKiloContainer4: {
    width: "43.75%",
    top: "78%",
  },
  pimentsTahitiFruitsContainer: {
    top: "44.55%",
    width: "81.94%",
    fontFamily: FontFamily.bodySmall,
  },
  fLeKiloContainer6: {
    top: "77.23%",
    width: "53.33%",
  },
  uru4Parent: {
    marginLeft: 4,
  },
  xpfLeKiloContainer: {
    width: "76.25%",
    top: "77.23%",
  },
  tomatesTahitiFruitsContainer2: {
    width: "75%",
    top: "45%",
    left: "3.47%",
    fontFamily: FontFamily.bodySmall,
  },
  frameParent7: {
    left: 32,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  scrollPageInner: {
    top: 565,
    height: 100,
    width: 374,
    left: 0,
    position: "absolute",
  },
  iconsBtn7: {
    left: 306,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  titleCategory: {
    left: 0,
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
    alignItems: "center",
  },
  header: {
    top: 44,
    height: 50,
    left: 24,
  },
  groupChild: {
    top: "3.33%",
    right: "0.23%",
    left: "4.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: "0%",
  },
  groupItem: {
    right: "4.92%",
    width: "95.08%",
    height: "96.67%",
    left: "0%",
    top: "0%",
  },
  groupInner: {
    height: "91.9%",
    width: "90.4%",
    top: "4.76%",
    right: "6.32%",
    left: "3.28%",
  },
  iconsBtn8: {
    left: 10,
    overflow: "hidden",
  },
  iconsBtn9: {
    left: 29,
    height: 16,
    width: 16,
    top: 0,
  },
  ellipseParent: {
    height: "97.67%",
    width: "92.83%",
    top: "2.33%",
    right: "7.17%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  btnCta3: {
    right: 9,
    bottom: 85,
    width: 46,
    height: 43,
    position: "absolute",
  },
  scrollPage: {
    width: 376,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  iconsBtn10: {
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
    left: "50%",
    bottom: 0,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderColor: Color.white,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    height: "100%",
    borderStyle: "solid",
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
    color: Color.colorGray_100,
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
    height: "5.42%",
    bottom: "94.58%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  product010101: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Product0101;
