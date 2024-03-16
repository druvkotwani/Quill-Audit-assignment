import About from "./components/About";
import BeforeAfter from "./components/BeforeAfter";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Navbar from "./components/Navbar";
import RequestAudit from "./components/RequestAudit";

const aboutContent = {
  heading1: "CarpeDiem Pension's Flexible, Blockchain-Enabled Future",
  text1: "CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.",
  img1: "/images/about-image1.png",

  heading2: "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting",
  text2: "CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.",
  img2: "/images/about-image2.png",

  heading3: "QuillAudits' Strategic Approach to CDP Security Audits",
  text3: "We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.",

  heading4: ""

}

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/images/herobg.png')]">

        <Navbar />
        <HeroSection />

      </div>
      <BeforeAfter />
      <RequestAudit />
      <About heading={aboutContent.heading1} text={aboutContent.text1} img={aboutContent.img1} />
      <About heading={aboutContent.heading2} text={aboutContent.text2} img={aboutContent.img2} />
      <List />
      <Footer />
    </main>
  );
}
