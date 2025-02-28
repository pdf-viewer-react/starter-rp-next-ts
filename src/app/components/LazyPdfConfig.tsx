"use client";
import dynamic from "next/dynamic";

export const LazyPDFConfig = dynamic(() => import("./PDFConfig"), {
  ssr: false,
});
