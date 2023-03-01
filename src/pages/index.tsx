import { Poppins } from "next/font/google";
import PageSEO from "@/components/PageSEO";
import Header from "@/components/navbar/Header";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <PageSEO
        title="ReadmeEase | Create README Files Effortlessly"
        description="Create beautiful and professional readme.md files effortlessly with ReadmeEase."
      />
      <Header />
      <main className={poppins.className}>ReadmeEase</main>
    </>
  );
}
