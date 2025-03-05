import { RPConfig, RPConfigProps } from "@pdf-viewer/react";
import { FC } from "react";

const AppProviders: FC<RPConfigProps> = ({ children, ...props }) => (
  <RPConfig {...props}>{children}</RPConfig>
);

export default AppProviders;
