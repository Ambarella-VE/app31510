import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path } from "react-native-svg"

const Index = ({pathD,svgProps}) => (
  <View style={styles.view}>
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...svgProps}>
      <Path d={pathD} />
    </Svg>
  </View>
)

const styles = StyleSheet.create({
  view: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    flex:1
  }
})

export default Index
