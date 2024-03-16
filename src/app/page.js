import About from "./components/About";
import BeforeAfter from "./components/BeforeAfter";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Navbar from "./components/Navbar";
import RequestAudit from "./components/RequestAudit";
import Subscribe from "./components/Subscribe";

const aboutContent = {
  heading1: "CarpeDiem Pension's Flexible, Blockchain-Enabled Future",
  text1: "CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.",
  img1: "/images/about-image1.png",

  heading2: "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting",
  text2: "CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.",
  img2: "/images/about-image2.png",

  heading3: "QuillAudits' Strategic Approach to CDP Security Audits",
  text3: "We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.",

  heading4: "QuillAudits' Strategic Approach to CDP Security Audits",
  text4: "We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution."

}
const list = [
  {
    heading: "Information gathering:",
    text: [
      "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
      "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
      "Discussed client concerns and specific areas of focus for the audit."
    ]
  },
  {
    heading: "Manual Code Review:",
    text: [
      "Conducted a line-by-line review of the smart contract code, focusing on:",
    ],
    subText: [
      "Vulnerability identification: Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues, etc.",
      "Logic flaws: Identifying inconsistencies or unintended behaviours in the code logic.",
      "Tokenomics correctness: Verifying if the code accurately implements the intended economic model and token distribution mechanisms.",
      "Solidity best practices: Compliance with secure coding standards and adherence to established guidelines."
    ]
  },
  {
    heading: "Functional Testing:",
    text: [
      "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.",
      "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.",
      "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).",
      "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally."
    ]
  },
  {
    heading: "Automated Testing:",
    text: [
      "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
      "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
      "Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour."
    ]
  },
  {
    heading: "Reporting & Remediation:",
    text: [
      "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
      "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.",
      "Collaborated with the CDP team to prioritize and address the identified issues.",
      "Conducted additional verification testing after vulnerability fixes were implemented."
    ]
  }
]

const list2 = [
  {
    heading: "Unauthorized Claim/ Compound:",
    text: [
      "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time."
    ],
  },
  {
    heading: "Precision Loss in mintCDP():",
    text: [
      "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function."
    ]
  },
  {
    heading: "Multiplication Accuracy:",
    text: [
      "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations."
    ]
  },
  {
    heading: "Incorrect Share Allocation:",
    text: [
      "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources."
    ]
  },
  {
    heading: "Logic Error in Referral Handling:",
    text: [
      "Users could claim/compound a A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system. amount without making a deposit or waiting for the stipulated time."
    ]
  },
  {
    heading: "Referral Exploitation:",
    text: [
      "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity."
    ]
  }

]

const list3 = [
  {
    text: [
      "Implementation of reentrancy protection mechanisms.",
      "Accurate handling of decimal values using established libraries or best practices.",
      "Revised calculations with proper scaling factors.",
      "Fixing logic errors to ensure deposits and waiting periods are enforced.",
      "Addressing referral system vulnerabilities to prevent abuse.",
    ]
  }
]

let listText3 = "All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include"

let listText = "Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :"


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
      <List mainheading={"CarpeDiem Pension's Journey Through our Audit Process"} list={list} />
      <About heading={aboutContent.heading4} text={aboutContent.text4} />
      <List text={listText} mainheading={"Comprehensive Audit Discoveries and Remediation Strategies"} list={list2} style="lower-alpha" />
      <List text={listText3} mainheading={"Remediation & Impact:"} list={list3} />

      <Subscribe />

      <Footer />
    </main>
  );
}
