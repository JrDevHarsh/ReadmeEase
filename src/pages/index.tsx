import { Poppins } from "next/font/google";
import PageSEO from "@/components/PageSEO";

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
      <main className={poppins.className}>ReadmeEase</main>
    </>
  );
}
