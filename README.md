# React PDF Starter Toolkit in Next.js and TypeScript

Welcome to the React PDF Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF with Nextjs and TypeScript. It showcases how React PDF can be integrated and rendered as part of a Next.js project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/reactpdf/starter-rp-next-ts.git
   cd starter-rp-next-ts
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm, yarn, pnpm or bun.

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Example Project

This repository includes an example project to demonstrate React PDF in action.

1. **Start the Development Server**: Use the following command to start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```tsx
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPProviderProps,
  RPLayoutProps,
} from "@pdf-viewer/react";

interface Props {
  showToolbar?: boolean;
  providerProps?: RPProviderProps;
  defaultLayoutProps?: RPLayoutProps;
}

const AppPDFViewer = (props: Props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPDefaultLayout {...defaultLayoutProps}>
          <RPPages />
        </RPDefaultLayout>
      ) : (
        <div style={{ width: "100%", height: "550px" }}>
          <RPPages />
        </div>
      )}
    </RPProvider>
  );
};

export default PDFViewer;
```

2. **Import Config Component**: Import the Config component

```tsx
import { RPConfig, RPConfigProps } from "@pdf-viewer/react";
import { FC } from "react";

const PDFConfig: FC<RPConfigProps> = ({ children }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default PDFConfig;
```

3. **Disable SSR for AppPDFViewer**: Disable SSR for the AppPDFViewer component by using `dynamic` from `next/dynamic` and set `ssr: false`

```tsx
"use client";
import dynamic from "next/dynamic";

export const LazyAppPDFViewer = dynamic(() => import("./AppPDFViewer"), {
  ssr: false,
});
```

4. **Disable SSR for RPConfig**: Disable SSR for RPConfig by using `dynamic` from `next/dynamic` and set `ssr: false`

```tsx
"use client";
import dynamic from "next/dynamic";

export const LazyPDFConfig = dynamic(() => import("./PDFConfig"), {
  ssr: false,
});
```

5. **Use the LazyPdfConfig component in layout**: Add the React PDF component to your page

```jsx
import "./globals.css";
import { LazyPDFConfig } from "./components/LazyPDFConfig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <LazyPDFConfig licenseKey="your-license-key">
          <main>{children}</main>
        </LazyPDFConfig>
      </body>
    </html>
  );
}
```

6. **Use the LazyAppPDFViewer component in page**: Add the React PDF component to your page

```jsx
import { LazyPdfConfig } from "./components/LazyPdfConfig";
import { LazyAppPDFViewer } from "./components/LazyAppPDFViewer";

export default function Home() {
  return (
    <div className="w-[1028px] h-[700px] mx-auto">
      <h1>RP Starter Toolkit: Nextjs + Javascript</h1>
      <br />
      <h2>Default Toolbar</h2>
      <LazyAppPDFViewer />
      <h2>Without Toolbar</h2>
      <LazyAppPDFViewer showToolbar={false} />
      <h2>Mobile</h2>
      <LazyAppPDFViewer defaultLayoutProps={{ style: { width: "500px" } }} />
    </div>
  );
}
```

## Examples

For more examples, please refer to the `src/App.jsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf.dev) site.

---

Thank you for using React PDF! We hope this toolkit helps you build amazing Next.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
