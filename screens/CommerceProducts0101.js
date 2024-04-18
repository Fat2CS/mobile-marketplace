import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const CommerceProducts0101 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.commerceProducts010101}>
      <View style={styles.scrollPage}>
        <View style={[styles.cardProductDetails, styles.btnCtaIconLayout]}>
          <View style={styles.cardProductDetailsInner}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.picerieParent}>
                <Text style={[styles.picerie, styles.picerieTypo]}>
                  Épicerie
                </Text>
                <Text style={[styles.foodCook, styles.cardTypo]}>
                  Food Cook
                </Text>
              </View>
              <View style={styles.frameGroup}>
                <View
                  style={[styles.iconsBtnParent, styles.titleCategoryFlexBox]}
                >
                  <Image
                    style={styles.iconsBtn}
                    contentFit="cover"
                    source={require("../assets/iconsbtn31.png")}
                  />
                  <Text style={[styles.text, styles.textTypo1]}>4.8</Text>
                </View>
                <Text style={[styles.valuations, styles.valuationsTypo]}>
                  39 évaluations
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.listProducts, styles.headerPosition]}>
          <View style={[styles.cardProduct, styles.cardLayout3]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-1295.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Noix de coco râpée
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct1, styles.cardLayout3]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-1296.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Noix de coco râpée
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterInner,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct2, styles.cardLayout3]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-1297.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Noix de coco râpée
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.rectangleView,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct3, styles.cardLayout2]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-1298.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Artichaut
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild2,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct4, styles.cardLayout1]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-1299.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Piments
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild4,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn8.png")}
            />
          </View>
          <View style={[styles.cardProduct5, styles.cardLayout]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-1295.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Avocat
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild6,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct6, styles.cardLayout3]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-12923.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Tomates
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild8,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct7, styles.cardLayout2]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-12911.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Concombre
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild10,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct8, styles.cardLayout1]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
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
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>
                    Pastèque
                  </Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild12,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn7.png")}
            />
          </View>
          <View style={[styles.cardProduct9, styles.cardLayout]}>
            <View style={[styles.frameContainer, styles.cardLayout3]}>
              <View style={styles.rectangleWrapper}>
                <Image
                  style={[styles.frameChild, styles.wrapperLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-1296.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameSpaceBlock]}>
                <View style={styles.cardTitleParent}>
                  <Text style={[styles.cardTitle, styles.cardTypo]}>Café</Text>
                  <Text style={[styles.cardSubtitle, styles.picerieTypo]}>
                    Polynésie Française
                  </Text>
                </View>
                <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.cardPrice, styles.cardTypo]}>
                      500 F
                    </Text>
                    <Text style={[styles.cardSmallText, styles.valuationsTypo]}>
                      Les 500g
                    </Text>
                  </View>
                  <View style={styles.btnCounter}>
                    <View
                      style={[
                        styles.btnCounterChild14,
                        styles.counterChildPosition,
                      ]}
                    />
                    <View style={[styles.btnMinus, styles.btnPosition]}>
                      <Image
                        style={[styles.btnMinusChild, styles.childLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Text style={[styles.text1, styles.textTypo]}>-</Text>
                    </View>
                    <Image
                      style={[styles.btnCounterItem, styles.childLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-21.png")}
                    />
                    <Text style={[styles.text2, styles.textClr]}>+</Text>
                    <View style={[styles.counter, styles.counterChildPosition]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text3, styles.textTypo]}>1</Text>
                        <Text style={[styles.text4, styles.textTypo]}>2</Text>
                        <Text style={[styles.text4, styles.textTypo]}>3</Text>
                        <Text style={[styles.text4, styles.textTypo]}>4</Text>
                        <Text style={[styles.text4, styles.textTypo]}>5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.iconsBtn1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/iconsbtn8.png")}
            />
          </View>
        </View>
        <View style={[styles.header, styles.headerPosition]}>
          <Pressable
            style={[styles.titleCategory, styles.iconsBtn13Position]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconsLayout}
              contentFit="cover"
              source={require("../assets/iconsbtn5.png")}
            />
            <Text
              style={[styles.fruitsLgumes, styles.textTypo1]}
            >{`Fruits & Légumes`}</Text>
          </Pressable>
          <View style={[styles.logo, styles.counterChildPosition]}>
            <Image
              style={styles.logoIcon}
              contentFit="cover"
              source={require("../assets/logo1.png")}
            />
            <Text style={styles.ohie}>Ohie !</Text>
          </View>
          <Image
            style={[styles.btnCtaIcon, styles.btnCtaIconLayout]}
            contentFit="cover"
            source={require("../assets/btncta1.png")}
          />
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.divtabIcons, styles.divtabIconsPosition]}>
          <View style={[styles.divicoHome, styles.divicoIconLayout]}>
            <Image
              style={[styles.iconsBtn12, styles.timePosition]}
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
          source={require("../assets/btncta4.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.textPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.textPosition]} />
          <Image
            style={[styles.capIcon, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/cap2.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection2.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <Pressable
        style={styles.btnCta}
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
            style={[styles.iconsBtn13, styles.iconsBtn13Position]}
            contentFit="cover"
            source={require("../assets/iconsbtn13.png")}
          />
          <View style={styles.iconsBtn14}>
            <Image
              style={[styles.iconsBtnChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-201.png")}
            />
            <Text style={[styles.text71, styles.textClr]}>1</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnCtaIconLayout: {
    height: 40,
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  picerieTypo: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.cardSubtitle_size,
    textAlign: "left",
  },
  cardTypo: {
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
  },
  titleCategoryFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo1: {
    lineHeight: 28,
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    textAlign: "left",
  },
  valuationsTypo: {
    fontSize: FontSize.textButtonSmall_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  headerPosition: {
    left: 24,
    width: 327,
    position: "absolute",
  },
  cardLayout3: {
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
  counterChildPosition: {
    display: "none",
    position: "absolute",
  },
  btnPosition: {
    right: "2.19%",
    width: "33.75%",
    height: "88.75%",
    left: "64.06%",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    display: "flex",
    lineHeight: 21,
    fontSize: FontSize.textButtonSmall_size,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.bodySmall,
  },
  textClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  iconsLayout: {
    height: 21,
    width: 21,
  },
  cardLayout2: {
    top: 376,
    height: 180,
    width: 155,
    borderWidth: 1,
    borderColor: Color.colorTurquoise_100,
    borderStyle: "solid",
    borderRadius: Border.br_lgi,
    position: "absolute",
  },
  cardLayout1: {
    top: 188,
    height: 180,
    width: 155,
    borderWidth: 1,
    borderColor: Color.colorTurquoise_100,
    borderStyle: "solid",
    borderRadius: Border.br_lgi,
    position: "absolute",
  },
  cardLayout: {
    top: 564,
    height: 180,
    width: 155,
    borderWidth: 1,
    borderColor: Color.colorTurquoise_100,
    borderStyle: "solid",
    borderRadius: Border.br_lgi,
    position: "absolute",
  },
  iconPosition: {
    borderTopRightRadius: Border.br_lgi,
    borderTopLeftRadius: Border.br_lgi,
  },
  iconsBtn13Position: {
    top: 11,
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
  textPosition: {
    top: "0%",
    left: "0%",
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
  picerie: {
    color: Color.complementary,
    textAlign: "left",
  },
  foodCook: {
    color: Color.black,
    lineHeight: 16,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    textAlign: "left",
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
    fontSize: FontSize.h5Headline_size,
    color: Color.colorNavajowhite,
    marginLeft: 4,
  },
  iconsBtnParent: {
    alignItems: "center",
  },
  valuations: {
    color: Color.colorDarkgray_200,
  },
  frameGroup: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  cardProductDetailsInner: {
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cardProductDetails: {
    top: 110,
    left: 25,
    width: 327,
  },
  frameChild: {
    borderTopRightRadius: Border.br_lgi,
    borderTopLeftRadius: Border.br_lgi,
  },
  rectangleWrapper: {
    paddingTop: Padding.p_12xs,
  },
  cardTitle: {
    color: Color.black,
    lineHeight: 16,
    fontSize: FontSize.bodyLarge_size,
    fontWeight: "500",
    textAlign: "left",
    alignSelf: "stretch",
  },
  cardSubtitle: {
    color: Color.grayMedium,
    textAlign: "left",
    alignSelf: "stretch",
  },
  cardTitleParent: {
    alignSelf: "stretch",
  },
  cardPrice: {
    fontSize: FontSize.cardPrice_size,
    textTransform: "uppercase",
    color: Color.primary,
    textAlign: "left",
  },
  cardSmallText: {
    marginTop: -2,
    color: Color.grayDark,
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
  text1: {
    height: "96.71%",
    textAlign: "center",
    left: "0%",
    top: "0%",
    color: Color.grayDark,
    position: "absolute",
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
  text2: {
    width: "34.38%",
    display: "flex",
    lineHeight: 21,
    fontSize: FontSize.textButtonSmall_size,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.bodySmall,
    left: "64.06%",
    top: "4.17%",
  },
  text3: {
    height: 16,
    width: 18,
    textAlign: "center",
    color: Color.grayDark,
  },
  text4: {
    marginTop: 6,
    height: 16,
    width: 18,
    textAlign: "center",
    color: Color.grayDark,
  },
  parent: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  counter: {
    left: 43,
    width: 18,
    height: 24,
    top: 0,
    overflow: "hidden",
  },
  btnCounter: {
    height: 24,
    width: 64,
  },
  frameParent1: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameView: {
    height: 94,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
  frameContainer: {
    alignItems: "center",
    left: 0,
    top: 0,
  },
  iconsBtn1: {
    top: 6,
    right: 6,
    position: "absolute",
    overflow: "hidden",
  },
  cardProduct: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    width: 155,
    top: 752,
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
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    width: 155,
    top: 752,
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
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    width: 155,
    left: 0,
    top: 0,
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
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_lgi,
    width: 155,
    top: 0,
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
    top: 174,
    height: 932,
  },
  fruitsLgumes: {
    fontSize: FontSize.h1Head_size,
    marginLeft: 16,
    color: Color.black,
  },
  titleCategory: {
    alignItems: "center",
    flexDirection: "row",
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
  btnCtaIcon: {
    top: 5,
    left: 277,
    borderRadius: Border.br_mini,
    width: 40,
  },
  header: {
    top: 44,
    height: 50,
  },
  scrollPage: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  iconsBtn12: {
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
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    height: "100%",
    borderWidth: 1,
    borderStyle: "solid",
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
    backgroundColor: Color.black,
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
    color: Color.black,
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
    backgroundColor: Color.white,
    top: "0%",
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
  iconsBtn13: {
    left: 10,
    height: 21,
    width: 21,
    overflow: "hidden",
  },
  iconsBtnChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text71: {
    fontSize: FontSize.size_5xs,
    lineHeight: 16,
    left: "0%",
    top: "0%",
    height: "100%",
    fontFamily: FontFamily.textButtonDefault,
    fontWeight: "500",
    width: "100%",
  },
  iconsBtn14: {
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
  btnCta: {
    right: 8,
    bottom: 85,
    width: 46,
    height: 43,
    position: "absolute",
  },
  commerceProducts010101: {
    borderRadius: Border.br_6xl,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default CommerceProducts0101;
