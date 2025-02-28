import { RPConfig, RPConfigProps } from "@pdf-viewer/react";
import { FC } from "react";

const AppProviders: FC<RPConfigProps> = ({ children }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default AppProviders;
