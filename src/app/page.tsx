import type { Metadata } from "next";
import Container from "@/components/hompage/container";

export const metadata: Metadata = {
  title: "Nextjs Configured Template",
  description:
    "Nextjs Configured Template with Typescript, Tailwindcss, Shadcn, RTK, RTK Query and more",
};

export default function Home() {
  return <Container />;
}
