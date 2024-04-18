import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Product01011 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.product010102}>
      <View style={styles.scrollPage}>
        <View style={styles.loremIpsumDolorSitAmetCoParent}>
          <Text
            style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet odio vel lacus accumsan, congue mattis lectus lobortis.`}</Text>
          <View style={[styles.btnCta, styles.btnShadowBox]}>
            <Text style={styles.body1whiteTypo}>Ajouter</Text>
          </View>
        </View>
        <Text style={[styles.proposDuCommerant, styles.textPosition]}>
          À propos du commerçant
        </Text>
        <View style={styles.scrollPageInner}>
          <View style={styles.frameParent}>
            <View style={styles.parentLayout}>
              <Image
                style={[styles.uru1Icon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/uru-1.png")}
              />
              <Text
                style={[
                  styles.bananesTahitiFruitsContainer,
                  styles.containerFlexBox,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Bananes
`}</Text>
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer, styles.kiloContainerLayout]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`500 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer2, styles.containerPosition1]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`300 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer4, styles.containerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`650 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer6, styles.kiloContainerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`500 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[
                  styles.xpfLeKiloContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`730 XPF
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
                  styles.containerFlexBox,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={styles.bananes}>{`Bananes
`}</Text>
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer, styles.kiloContainerLayout]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`500 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer2, styles.containerPosition1]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`300 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer4, styles.containerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`650 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[styles.fLeKiloContainer6, styles.kiloContainerPosition]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`500 F
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
                  <Text style={styles.tahitiFruits}>Tahiti fruits</Text>
                </Text>
              </Text>
              <Text
                style={[
                  styles.xpfLeKiloContainer,
                  styles.kiloContainerPosition,
                ]}
              >
                <Text style={styles.bananesTahitiFruitsContainer1}>
                  <Text style={[styles.f, styles.textTypo1]}>{`730 XPF
`}</Text>
                  <Text style={styles.leKilo}>Le Kilo</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
        <View style={styles.cardProductDetails}>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.originePolynsieFranaiseParent}>
              <Text style={[styles.originePolynsieFranaise, styles.laPiceTypo]}>
                Origine Polynésie Française
              </Text>
              <Text style={[styles.pastque, styles.textTypo]}>Pastèque</Text>
            </View>
            <View style={styles.f430FParent}>
              <Text style={[styles.f430FContainer, styles.textTypo1]}>
                <Text style={styles.f8}>500 F</Text>
                <Text style={styles.f9}> 430 F</Text>
              </Text>
              <Text style={[styles.laPice, styles.laPiceTypo]}>La pièce</Text>
            </View>
          </View>
          <Text style={[styles.loremIpsumDolor1, styles.containerFlexBox]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            feugiat lorem velit, ut imperdiet urna tincidunt ut. Sed laoreet
            odio vel lacus accumsan, congue mattis lectus lobortis.
          </Text>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.iconsBtnParent}>
              <Image
                style={styles.iconsBtn}
                contentFit="cover"
                source={require("../assets/iconsbtn17.png")}
              />
              <Text style={[styles.text1, styles.text1Layout]}>4.8</Text>
              <Text style={[styles.valuations, styles.text1Layout]}>
                39 évaluations
              </Text>
            </View>
            <Image
              style={styles.image29Icon}
              contentFit="cover"
              source={require("../assets/image-29.png")}
            />
          </View>
          <View style={[styles.btnCta1, styles.btnShadowBox]}>
            <Image
              style={styles.iconsLayout1}
              contentFit="cover"
              source={require("../assets/iconsbtn11.png")}
            />
            <Text style={[styles.body1white1, styles.body1whiteTypo]}>
              Ajouter au panier
            </Text>
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
        <View style={[styles.header, styles.textPosition]}>
          <Image
            style={[styles.iconsBtn2, styles.iconsPosition]}
            contentFit="cover"
            source={require("../assets/iconsbtn12.png")}
          />
          <Pressable
            style={[styles.titleCategory, styles.iconsPosition]}
            onPress={() => navigation.navigate("ListProducts01011")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/titlecategory.png")}
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
        <View style={[styles.iconsBtn3, styles.iconsLayout]}>
          <Image
            style={[styles.iconsBtnChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-201.png")}
          />
          <Text style={[styles.text2, styles.textTypo1]}>1</Text>
        </View>
        <View style={styles.btnCta2}>
          <View style={[styles.ellipseParent, styles.childPosition]}>
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
              style={[styles.iconsBtn4, styles.iconsPosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn13.png")}
            />
            <View style={[styles.iconsBtn5, styles.iconsLayout]}>
              <Image
                style={[styles.iconsBtnChild, styles.childPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-201.png")}
              />
              <Text style={[styles.text2, styles.textTypo1]}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn6, styles.btnPosition]}
              contentFit="cover"
              source={require("../assets/iconsbtn30.png")}
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
        <View style={styles.btnCta3}>
          <Image
            style={[styles.iconsBtnChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-196.png")}
          />
          <Image
            style={[styles.btnCtaItem, styles.btnPosition]}
            contentFit="cover"
            source={require("../assets/frame-16.png")}
          />
          <View style={[styles.iconsBtn7, styles.iconsLayout]}>
            <Image
              style={[styles.iconsBtnChild, styles.childPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-201.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>1</Text>
          </View>
        </View>
      </View>
      <View style={[styles.statusBar, styles.text2Position]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.childPosition]} />
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
          <Text style={[styles.time, styles.btnPosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loremIpsumDolorTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
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
  textPosition: {
    left: 24,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  containerFlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  kiloContainerLayout: {
    width: "53.33%",
    top: "77.23%",
  },
  textTypo1: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
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
  textTypo: {
    fontSize: FontSize.bodyLarge_size,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  laPiceTypo: {
    fontSize: FontSize.cardSubtitle_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  text1Layout: {
    lineHeight: 28,
    marginLeft: 4,
    textAlign: "left",
  },
  body1whiteTypo: {
    color: Color.tertiaryLight,
    fontSize: FontSize.cardPrice_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
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
  iconsPosition: {
    top: 11,
    height: 21,
    width: 21,
    position: "absolute",
  },
  iconsLayout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
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
  btnPosition: {
    top: "50%",
    position: "absolute",
  },
  text2Position: {
    top: "0%",
    left: "0%",
  },
  loremIpsumDolor: {
    lineHeight: 13,
    width: 289,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.textButtonSmall_size,
  },
  btnCta: {
    marginTop: 24,
  },
  loremIpsumDolorSitAmetCoParent: {
    top: 719,
    left: 43,
    paddingBottom: 125,
    alignItems: "center",
    position: "absolute",
  },
  proposDuCommerant: {
    top: 689,
    width: 153,
    height: 14,
    color: Color.colorGray_100,
    fontSize: FontSize.h5Headline_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  uru1Icon: {
    height: "37.62%",
    bottom: "62.38%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  bananes: {
    color: Color.colorBlack,
    fontSize: FontSize.bodySmall_size,
  },
  tahitiFruits: {
    color: Color.grayMedium,
    fontSize: FontSize.textButtonSmall_size,
  },
  bananesTahitiFruitsContainer1: {
    width: "100%",
  },
  bananesTahitiFruitsContainer: {
    left: "7.64%",
    display: "flex",
    top: "44.55%",
    width: "81.94%",
    fontFamily: FontFamily.bodySmall,
  },
  f: {
    color: Color.primary,
    fontSize: FontSize.textButtonSmall_size,
  },
  leKilo: {
    color: Color.grayDark,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.bodySmall,
  },
  fLeKiloContainer: {
    top: "77.23%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
    left: "7.64%",
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
    marginLeft: 4,
    width: 72,
    height: 100,
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
  frameParent: {
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
  text: {
    top: 529,
    width: 160,
    height: 18,
    color: Color.colorGray_100,
    left: 24,
    position: "absolute",
  },
  originePolynsieFranaise: {
    color: Color.complementary,
  },
  pastque: {
    lineHeight: 16,
    color: Color.black,
  },
  originePolynsieFranaiseParent: {
    width: 154,
  },
  f8: {
    textDecoration: "line-through",
    color: Color.grayLight,
  },
  f9: {
    color: Color.primary,
  },
  f430FContainer: {
    textTransform: "uppercase",
    fontSize: FontSize.cardPrice_size,
    fontWeight: "500",
    textAlign: "left",
  },
  laPice: {
    color: Color.grayDark,
  },
  f430FParent: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameGroup: {
    top: 299,
    left: 25,
    alignItems: "flex-end",
    width: 327,
  },
  loremIpsumDolor1: {
    top: 344,
    left: 42,
    width: 293,
    fontSize: FontSize.bodySmall_size,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.bodySmall,
  },
  iconsBtn: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  text1: {
    color: Color.colorNavajowhite,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    fontSize: FontSize.h5Headline_size,
  },
  valuations: {
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.textButtonSmall_size,
  },
  iconsBtnParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image29Icon: {
    width: 58,
    height: 31,
  },
  frameContainer: {
    top: 414,
    left: 41,
    width: 295,
    alignItems: "center",
  },
  iconsLayout1: {
    height: 21,
    width: 21,
  },
  body1white1: {
    marginLeft: 8,
  },
  btnCta1: {
    top: 469,
    left: 100,
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
    justifyContent: "center",
    flexDirection: "row",
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
    left: -1,
    width: 381,
    height: 505,
    top: 0,
    position: "absolute",
  },
  iconsBtn2: {
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
    display: "none",
    alignItems: "center",
    position: "absolute",
  },
  header: {
    top: 44,
    height: 50,
    width: 327,
  },
  iconsBtnChild: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  text2: {
    lineHeight: 16,
    color: Color.white,
    textAlign: "center",
    height: "100%",
    fontSize: FontSize.size_5xs,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconsBtn3: {
    top: 775,
    left: 203,
    opacity: 0.62,
  },
  groupChild: {
    top: "3.33%",
    right: "0.23%",
    left: "4.68%",
    bottom: "0%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  iconsBtn4: {
    left: 10,
    overflow: "hidden",
  },
  iconsBtn5: {
    left: 29,
    display: "none",
    top: 0,
  },
  ellipseParent: {
    height: "97.67%",
    width: "92.83%",
    top: "2.33%",
    right: "7.17%",
    left: "0%",
  },
  btnCta2: {
    right: 7,
    bottom: 85,
    width: 46,
    height: 43,
    position: "absolute",
  },
  scrollPage: {
    width: 374,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  iconsBtn6: {
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
    overflow: "hidden",
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
  iconsBtn7: {
    left: 47,
    top: 0,
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
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    opacity: 0.35,
    height: "100%",
    left: "0%",
    top: "0%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    right: "0%",
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
    height: "5.42%",
    bottom: "94.58%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  product010102: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Product01011;
