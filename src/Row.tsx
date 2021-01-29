import React from "react";
import { Flex, FlexProps } from "./Flex";

export type RowProps = Omit<FlexProps, "direction">;

export function Row(props: RowProps) {
  return <Flex direction="horizontal" {...props} />;
}
