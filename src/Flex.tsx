import React from "react";
import { View, StyleSheet } from "react-native-web";
import { MainAxisAlignment } from "./MainAxisAlignment";
import { CrossAxisAlignment } from "./CrossAxisAlignment";
import { Axis } from "./Axis";
import { MainAxisSize } from "./MainAxisSize";

export interface FlexProps {
  children: React.ReactNode;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  direction?: Axis;
  mainAxisSize?: MainAxisSize;
}

export function Flex(props: FlexProps) {
  const style = [styles.root];

  switch (props.mainAxisAlignment) {
    case "start":
      style.push(styles.mainAxisStart);
      break;

    case "end":
      style.push(styles.mainAxisEnd);
      break;
  }

  return <View style={style}>{props.children}</View>;
}

const styles = StyleSheet.create({
  root: {},

  row: {
    flexDirection: "row",
  },

  column: {
    flexDirection: "column",
  },

  mainAxisStart: {
    justifyContent: "flex-start",
  },
});
