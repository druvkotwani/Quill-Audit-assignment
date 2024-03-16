import React from 'react'
import ListItem from './ListItem'


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
const List = () => {
    return (
        <div className='px-4 flex flex-col gap-8 py-6 text-[#00000a]'>
            <h1 className='font-bold  text-[34px]  leading-[42.5px] '>CarpeDiem Pension's Journey Through our Audit Process</h1>

            {
                list.map((item, index) => (
                    <ListItem key={index} index={index} heading={item.heading} text={item.text} subText={item.subText} />
                ))
            }
        </div>
    )
}

export default List