import type { Metadata } from "next";
import HomepageContainer from "@/components/homepage/container";
import HomepageContainerApi from "@/components/homepage/containerApi";

export const metadata: Metadata = {
  title: "Nextjs Configured Template",
  description:
    "Nextjs Configured Template with Typescript, Tailwindcss, Shadcn, RTK, RTK Query and more",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <HomepageContainer />
      <br />
      <br />
      <HomepageContainerApi />
    </main>
  );
}
