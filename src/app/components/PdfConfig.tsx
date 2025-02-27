import { RPConfig, RPConfigProps } from "@pdf-viewer/react";
import { FC } from "react";

const PDFConfig: FC<RPConfigProps> = ({ children }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default PDFConfig;
