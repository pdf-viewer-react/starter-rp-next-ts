import { LazyPdfConfig } from "./components/LazyPdfConfig";
import { LazyAppPdfViewer } from "./components/LazyAppPdfVIewer";

export default function Home() {
  return (
    <LazyPdfConfig licenseKey="your-license-key">
      <div className="w-[1028px] h-[700px] mx-auto">
        <h1>RP Starter Toolkit: Nextjs + Typescript</h1>
        <br />
        <h2>Default Toolbar</h2>
        <LazyAppPdfViewer />
        <h2>Without Toolbar</h2>
        <LazyAppPdfViewer showToolbar={false} />
        <h2>Mobile</h2>
        <LazyAppPdfViewer defaultLayoutProps={{ style: { width: "500px" } }} />
      </div>
    </LazyPdfConfig>
  );
}
