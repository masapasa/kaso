https://docs.google.com/presentation/d/1IspnAVIk8aQj6Qg8duVF14fFCp6erhOU_YETG7x0fuo/edit?usp=sharing

## Leveraging Cardano Blockchain for Academic Data Management: A Comprehensive Analysis ##

## Abstract:
The management of academic data presents unique challenges, including the need for security, transparency, and immutability. The Cardano blockchain, with its decentralized nature and robust security features, offers a promising solution to these challenges. This essay explores the problem of academic data management, assesses the market size, proposes a blockchain-based solution, evaluates its validation and traction, analyzes the competition, and outlines a strategic approach for implementation.

## 1. Introduction
Academic institutions worldwide are custodians of vast amounts of data, ranging from student records to research findings. The traditional methods of managing this data are often centralized, prone to security breaches, and lack transparency. The Cardano blockchain, known for its academic rigor and energy-efficient proof-of-stake protocol, emerges as a potential game-changer in this domain.

## 2. The Problem
Academic data management currently faces several issues:
Security Vulnerabilities: Centralized databases are attractive targets for cyberattacks, risking data breaches and loss.
Data Silos: Information is often trapped in isolated systems, hindering accessibility and collaboration.
Lack of Transparency: The verification of academic credentials can be opaque, leading to fraud and misrepresentation.
Inefficiency: Manual processes for data verification and transfer are time-consuming and error-prone.

## 3. Market Size
The global education market is vast, with over 19,000 universities and millions of other educational institutions. The academic data management market is a subset of this, with a potential size of billions of dollars, considering the need for secure record-keeping and data sharing across institutions.

## 4. The Solution: Cardano Blockchain
The proposed solution involves using the Cardano blockchain to create a decentralized ledger for academic data. Key features include:
Decentralization: Eliminating single points of failure and distributing trust among participants.
Security: Utilizing Cardano's advanced cryptographic techniques to secure data.
Transparency and Immutability: Ensuring that records are verifiable and unalterable once entered.
Smart Contracts: Automating processes like certification verification and access control.

## 5. Validation or Traction
Pilot programs and partnerships with academic institutions can serve as initial validation. For instance, the University of Nicosia uses blockchain for issuing verifiable digital diplomas. The traction can be measured by the number of institutions adopting the technology and the volume of data managed on the blockchain.

## 6. Competition
Competitors include other blockchain platforms like Ethereum and traditional academic data management systems. Cardano's advantages lie in its peer-reviewed research foundation, lower transaction costs, and higher energy efficiency.

##7. Strategy
The strategic approach involves:
Collaboration: Partnering with universities and educational bodies to tailor the solution to their needs.
Compliance: Ensuring adherence to data protection regulations like GDPR.
Education and Training: Offering workshops to familiarize stakeholders with blockchain technology.
Iterative Development: Starting with a pilot project and scaling up based on feedback and results.

## LLM based counselling platform and zk LLM

we have the LLMs (synergised with education knowledge graphs) interacting with Users/students generating the pathways

as there are concerns we develop the zkLLM framework to address the privacy and transparency

![](./images/llm_interact.png?raw=true "interact_KG")

link for demo privacy preserving prompts: https://naavi-german.vercel.app/

## 8. Conclusion
The Cardano blockchain holds significant promise for revolutionizing academic data management. By addressing the current system's shortcomings, it can offer a more secure, transparent, and efficient way to handle academic records. The success of this initiative will depend on strategic partnerships, regulatory compliance, and the ongoing development of the Cardano platform.

## Quickstart

### Docker
1. **Ensure docker is installed**:
    - If not, download and install it from [Docker's official site](https://www.docker.com/).

2. **Configure environment variables**:
    - Copy the example environment file and modify it as needed.
```bash
cp .env.example .env
```

3. **[Optional] Add your ProofSpace RSA private key**:
    - Place your RSA private key in the [application/ps_sk](application/ps_sk) file.

4. **[Optional] Create the Credential Schemas and relevant interactions from the ProofSpace UI:**
    - Create and deploy the Verifiable Credential Schemas, along with the interactions to issue them, from the ProofSpace dashboard. 
    - Update the constants, credential IDs, and schema IDs to their new values in the [proofspaceRepository](application/src/database/proofspaceRepository.js).

    **Note**: If you do not want to use ProofSpace, it is possible to run the application without it. To do this, you need to unset the `PROOFSPACE` environmental variable in the `.env` file. The application will still be fully functional without ProofSpace, but will miss some features that rely on ProofSpace.
5. **Build and run the Docker container**:
    - Execute the [build_docker](build_docker.sh) script to build and run the container. This will start an emulated Cardano node to test the infrastructure, start the backend server, seed the database, add some subjects, teachers and students to the system, and seed the students with some initial grades.
```bash
sh build_docker.sh
```
6. **Access the application**:
    - The application can be accessed at `http://localhost:3000`

## System Architecture

![Alt Components](./images/system_arch.png?raw=true "Title")

The platform consists of the following main components:

- Cardano Smart Contracts
    - Plutus scripts written in the [Aiken Programming Language](https://aiken-lang.org/), responsible for validating and verifying every modification to the academic data
- [ProofSpace](https://www.proofspace.id/)
    - SaaS solution that simplifies working with Decentralized Identifiers and the issuance of Verifiable Credentials
- ProofSpace Mobile Application
    - Provided by ProofSpace, it functions as the user's digital wallet, storing their Decentralized Identifier and allowing them to view their credentials
- Backend
    - Contains all the [off-chain code](application/src/database/cardanoRepository.js) to interact with the Cardano network, utilizing the [Lucid](https://lucid.spacebudz.io/) library
    - Responsible for [invoking the ProofSpace API](application/src/database/proofspaceRepository.js) to issue Verifiable Credentials
    - Manages an [off-chain database](application/src/models) to store stakeholders' login credentials
- Frontend
    - Primary user interface for all the stakeholders

frontend i used as the primary interface for all stakeholders, receives utxos, compose and initiate transactions, communicates to the rest api http server, which serves incoming requests from the client