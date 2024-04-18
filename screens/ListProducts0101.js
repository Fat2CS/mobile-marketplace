import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ListProducts0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listProducts010101}>
      <View style={[styles.frame, styles.frameBorder]} />
      <View style={[styles.listProducts, styles.headerPosition]}>
        <View style={[styles.cardProduct, styles.cardLayout3]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1295.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct1, styles.cardLayout3]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1296.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterInner, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct2, styles.cardPosition]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1297.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Noix de coco râpée
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.rectangleView, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct3, styles.cardLayout2]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1298.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Artichaut
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild2, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct4, styles.cardLayout1]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1299.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Piments
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild4, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn8.png")}
          />
        </View>
        <View style={[styles.cardProduct5, styles.cardLayout]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1295.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Avocat
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild6, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct6, styles.cardPosition]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-12910.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Oeufs
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild8, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct7, styles.cardLayout2]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-12911.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Concombre
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild10, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct8, styles.cardLayout1]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Pressable
                style={styles.wrapperLayout}
                onPress={() => navigation.navigate("Product0101")}
              >
                <Image
                  style={[styles.icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/rectangle-12912.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <Pressable
                style={styles.cardTitleParent}
                onPress={() => navigation.navigate("Product0101")}
              >
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Pastèque
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </Pressable>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={styles.cardTypo}>
                    <Text style={styles.f}>
                      <Text style={styles.f1}>500 F</Text>
                      <Text style={styles.text56}>{` `}</Text>
                    </Text>
                    <Text style={styles.text56}>430 F</Text>
                  </Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild12, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn7.png")}
          />
        </View>
        <View style={[styles.cardProduct9, styles.cardLayout]}>
          <View style={[styles.frameParent, styles.cardPosition]}>
            <View style={styles.rectangleWrapper}>
              <Image
                style={[styles.frameChild, styles.wrapperLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-1296.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.cardTitleParent}>
                <Text style={[styles.cardTitle, styles.cardTitleTypo]}>
                  Café
                </Text>
                <Text style={styles.cardSubtitle}>Polynésie Française</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.titleCategoryFlexBox]}
              >
                <View>
                  <Text style={[styles.cardPrice, styles.cardTypo]}>500 F</Text>
                  <Text style={styles.cardSmallText}>Les 500g</Text>
                </View>
                <View style={styles.btnCounter}>
                  <View
                    style={[styles.btnCounterChild14, styles.btnChildPosition]}
                  />
                  <View style={[styles.btnMinus, styles.btnPosition]}>
                    <Image
                      style={[styles.btnMinusChild, styles.btnLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-22.png")}
                    />
                    <Text style={[styles.text, styles.textFlexBox]}>-</Text>
                  </View>
                  <Image
                    style={[styles.btnCounterItem, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                  <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
                  <View style={styles.counter}>
                    <View style={styles.parent}>
                      <Text style={styles.textLayout}>1</Text>
                      <Text style={[styles.text3, styles.textLayout]}>2</Text>
                      <Text style={[styles.text3, styles.textLayout]}>3</Text>
                      <Text style={[styles.text3, styles.textLayout]}>4</Text>
                      <Text style={[styles.text3, styles.textLayout]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.iconsBtn, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/iconsbtn8.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={[styles.titleCategory, styles.titleCategoryFlexBox]}
          onPress={() => navigation.navigate("ListCategoriesProducts01")}
        >
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/iconsbtn5.png")}
          />
          <Text
            style={[styles.fruitsLgumes, styles.cardTitleTypo]}
          >{`Fruits & Légumes`}</Text>
        </Pressable>
        <View style={[styles.logo, styles.btnChildPosition]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <Text style={styles.ohie}>Ohie !</Text>
        </View>
        <Image
          style={styles.btnCtaIcon}
          contentFit="cover"
          source={require("../assets/btncta1.png")}
        />
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn11, styles.timePosition]}
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
          style={styles.btnCtaIcon1}
          contentFit="cover"
          source={require("../assets/btncta2.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.textPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.textPosition]} />
          <Image
            style={[styles.capIcon, styles.btnLayout]}
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
  frameBorder: {
    borderWidth: 1,
    borderColor: Color.white,
    borderStyle: "solid",
    position: "absolute",
  },
  headerPosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  cardLayout3: {
    height: 180,
    width: 155,
    top: 752,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  cardPosition: {
    top: 0,
    height: 180,
    width: 155,
    position: "absolute",
  },
  wrapperLayout: {
    height: 74,
    width: 153,
  },
  frameSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  cardTitleTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  titleCategoryFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTypo: {
    textTransform: "uppercase",
    fontSize: FontSize.cardPrice_size,
    textAlign: "left",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  btnChildPosition: {
    display: "none",
    position: "absolute",
  },
  btnPosition: {
    right: "2.19%",
    width: "33.75%",
    height: "88.75%",
    left: "64.06%",
  },
  btnLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    display: "flex",
    lineHeight: 21,
    textAlign: "center",
    fontSize: FontSize.textButtonSmall_size,
    fontFamily: FontFamily.bodySmall,
    alignItems: "center",
    position: "absolute",
  },
  textLayout: {
    height: 16,
    width: 18,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 21,
    color: Color.grayDark,
    fontSize: FontSize.textButtonSmall_size,
    fontFamily: FontFamily.bodySmall,
    alignItems: "center",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  cardLayout2: {
    top: 376,
    height: 180,
    width: 155,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  cardLayout1: {
    top: 188,
    height: 180,
    width: 155,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  cardLayout: {
    top: 564,
    height: 180,
    width: 155,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iconPosition: {
    borderTopRightRadius: Border.br_lgi,
    borderTopLeftRadius: Border.br_lgi,
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
  textPosition: {
    top: "0%",
    left: "0%",
  },
  frame: {
    height: "3.08%",
    width: "6.67%",
    top: "2.34%",
    right: "64.8%",
    left: "28.53%",
    overflow: "hidden",
    bottom: "94.58%",
    backgroundColor: Color.white,
  },
  frameChild: {
    borderTopRightRadius: Border.br_lgi,
    borderTopLeftRadius: Border.br_lgi,
  },
  rectangleWrapper: {
    paddingTop: Padding.p_12xs,
  },
  cardTitle: {
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 16,
    alignSelf: "stretch",
  },
  cardSubtitle: {
    fontSize: FontSize.cardSubtitle_size,
    color: Color.grayMedium,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    alignSelf: "stretch",
  },
  cardTitleParent: {
    alignSelf: "stretch",
  },
  cardPrice: {
    color: Color.primary,
  },
  cardSmallText: {
    marginTop: -2,
    color: Color.grayDark,
    fontSize: FontSize.textButtonSmall_size,
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  btnCounterChild: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  btnMinusChild: {
    height: "98.12%",
    width: "97.69%",
    top: "1.88%",
    right: "0.46%",
    left: "1.85%",
    bottom: "0%",
  },
  text: {
    height: "96.71%",
    left: "0%",
    top: "0%",
    color: Color.grayDark,
    width: "100%",
  },
  btnMinus: {
    bottom: "7.08%",
    opacity: 0.5,
    left: "64.06%",
    top: "4.17%",
    position: "absolute",
  },
  btnCounterItem: {
    top: "5.83%",
    bottom: "5.42%",
    left: "64.06%",
    right: "2.19%",
    width: "33.75%",
    height: "88.75%",
  },
  text1: {
    width: "34.38%",
    color: Color.white,
    left: "64.06%",
    top: "4.17%",
  },
  text3: {
    marginTop: 6,
  },
  parent: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  counter: {
    left: 43,
    width: 18,
    display: "none",
    height: 24,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  btnCounter: {
    height: 24,
    width: 64,
  },
  frameContainer: {
    justifyContent: "space-between",
    marginTop: 4,
    alignSelf: "stretch",
  },
  frameGroup: {
    height: 94,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
  frameParent: {
    alignItems: "center",
    left: 0,
  },
  iconsBtn: {
    top: 6,
    right: 6,
    overflow: "hidden",
    position: "absolute",
  },
  cardProduct: {
    left: 0,
  },
  btnCounterInner: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct1: {
    left: 172,
  },
  rectangleView: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct2: {
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  btnCounterChild2: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct3: {
    left: 0,
  },
  btnCounterChild4: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct4: {
    left: 0,
  },
  btnCounterChild6: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct5: {
    left: 0,
  },
  btnCounterChild8: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct6: {
    left: 172,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  btnCounterChild10: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct7: {
    left: 172,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  f1: {
    color: Color.grayLight,
  },
  text56: {
    color: Color.primary,
  },
  f: {
    textDecoration: "line-through",
  },
  btnCounterChild12: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct8: {
    left: 172,
  },
  btnCounterChild14: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_81xl,
    left: "60.94%",
    width: "39.06%",
    display: "none",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  cardProduct9: {
    left: 172,
  },
  listProducts: {
    top: 118,
    height: 1077,
  },
  fruitsLgumes: {
    fontSize: FontSize.h1Head_size,
    lineHeight: 28,
    marginLeft: 16,
  },
  titleCategory: {
    top: 11,
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
    top: -6,
    left: 282,
    alignItems: "center",
  },
  btnCtaIcon: {
    top: 5,
    left: 277,
    borderRadius: Border.br_mini,
    width: 40,
    height: 40,
    position: "absolute",
  },
  header: {
    top: 44,
    height: 50,
  },
  iconsBtn11: {
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
  btnCtaIcon1: {
    marginLeft: -31.5,
    top: 3,
    height: 64,
    left: "50%",
    width: 64,
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
    right: "9.47%",
    borderRadius: 3,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    height: "100%",
    borderWidth: 1,
    borderColor: Color.white,
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
    height: "5.42%",
    left: "0%",
    right: "0%",
    bottom: "94.58%",
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  listProducts010101: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ListProducts0101;
