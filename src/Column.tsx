import React from "react";
import { Flex, FlexProps } from "./Flex";

export type ColumnProps = Omit<FlexProps, "direction">;

export function Column(props: ColumnProps) {
  return <Flex direction="vertical" {...props} />;
}
