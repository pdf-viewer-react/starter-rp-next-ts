"use client";
import dynamic from "next/dynamic";

export const LazyAppPdfViewer = dynamic(() => import("./AppPDFViewer"), {
  ssr: false,
});
