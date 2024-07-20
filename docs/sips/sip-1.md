---
sip: 1
title: SIP Purpose and Guidelines
status: Draft
type: Meta
author: Mohamed Amer <mohamedamer@subjektify.dev>,
created: 2024-07-09
---

## What is a SIP?

SIP stands for Subjektify Improvement Proposal. A SIP is a design document providing information to the Subjektify community, or describing a new feature for Subjektify or its processes or environment. The SIP should provide a concise technical specification of the feature and a rationale for the feature. The SIP author is responsible for building consensus within the community and documenting dissenting opinions.

## SIP Rationale

We intend for SIPs to be the primary mechanisms for proposing new features, for collecting community technical input on an issue, and for documenting the design decisions that have gone into Subjektify. Because the SIPs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

For Subjektify implementers, SIPs are a convenient way to track the progress of their implementation. Ideally each implementation maintainer would list the SIPs that they have implemented. This will give end users a convenient way to know the current status of a given implementation or library.

## SIP Types

There are three primary types for a SIP

### Standard SIP

A Standards SIP describes any change that affects most or all Subjektify implementations, such as—a change to the Subjekt interface definition language, a change in the command-line interface or its default plugins, proposed application standards/conventions, or any change or addition that affects the interoperability of applications using Subjektify. Standards SIPs consist of three parts—a design document, an implementation, and (if warranted) an update to the formal specification. Furthermore, Standards SIPs can be broken down into the following categories

#### Core

Core SIPs involve improvements that require changes to the core functionalities of Subjektify, including changes to the command-line interface, default plugins, and other essential features that affect the core behavior of the Subjektify platform.

#### Interface

Interface SIPs involve improvements to the interface specifications, such as changes to the Subjekt interface definition language and other user-facing interfaces. These are intended to enhance the user experience and ensure consistent communication between different components of Subjektify.

#### SRC

SRC SIPs are akin to ERCs (Ethereum Request for Comments) and involve changes to runtime components of Subjektify, including subjects and compositions. These proposals focus on defining standards and conventions for creating and interacting with subjects within the Subjektify ecosystem.

### Meta SIP

A Meta SIP describes a process surrounding Subjektify or proposes a change to (or an event in) a process. Process SIPs are like Standard SIPs but apply to areas other than the Subjektify ecosystem itself. They may propose an implementation, but not to Subjektify's codebase; they often require community consensus; unlike Informational SIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Subjektify development.

### Informational SIP

An Informational SIP describes a Subjektify design issue, or provides general guidelines or information to the Subjektify community, but does not propose a new feature. Informational SIPs do not necessarily represent Subjektify community consensus or a recommendation, so users and implementers are free to ignore Informational SIPs or follow their advice.

:::info

It is highly recommended that a single SIP contain a single key proposal or new idea. The more focused the SIP, the more successful it tends to be. A change to one client doesn’t require an SIP; a change that affects multiple clients, or defines a standard for multiple apps to use, does.

A SIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement. The proposed implementation, if applicable, must be solid and must not complicate the protocol unduly.

:::

## SIP Workflow

### Leading a SIP

Parties involved in the process are you, the champion or SIP author, the [SIP editors](#sip-editors), and the [Subjektify Core Developers](https://github.com/subjektify/pm).

Before you begin writing a formal SIP, you should vet your idea. Ask the Subjektify community first if an idea is original to avoid wasting time on something that will be rejected based on prior research. Once the idea has been vetted, your next responsibility will be to present (by means of an SIP) the idea to the reviewers and all interested parties, invite editors, developers, and the community to give feedback.

You should try and gauge whether the interest in your SIP is commensurate with both the work involved in implementing it and how many parties will have to conform to it. For example, the work required for implementing a Core SIP will be much greater than for an SRC and the SIP will need sufficient interest from the Subjektify core teams. Negative community feedback will be taken into consideration and may prevent your SIP from moving past the Draft stage.

### Core SIPs

For Core SIPs, given that they require implementations to be considered Final (see “SIPs Process” below), you will need to either provide an implementation for clients or convince clients to implement your SIP.

In short, your role as the champion is to write the SIP using the style and format described below, lead the discussions in the appropriate forums, and build community consensus around the idea.

### SIP Process

The following is the standardization process for all SIPs in all tracks:

- **Idea**: An idea that is pre-draft. This is not tracked within the SIP Repository.
- **Draft**: The first formally tracked stage of an SIP in development. An SIP is merged by an SIP Editor into the SIP repository when properly formatted.
- **Review**: A SIP Author marks an SIP as ready for and requesting Peer Review.
- **Last Call**: This is the final review window for an SIP before moving to Final. An SIP editor will assign Last Call status and set a review end date, typically 14 days later.
- **Final**: This SIP represents the final standard. A Final SIP exists in a state of finality and should only be updated to add non-normative clarifications.
- **Stagnant**: Any SIP in `Draft` or `Review` or `Last Call` if inactive for a period of 6 months or greater is moved to Stagnant. An SIP may be resurrected from this state by Authors or SIP Editors through moving it back to Draft or it’s earlier status. If not resurrected, a proposal may stay forever in this status.
- **Withdrawn**: The SIP Author(s) have withdrawn the proposed SIP. This state has finality and can no longer be resurrected using this SIP number. If the idea is pursued at a later date it is considered a new proposal.
- **Living**: A special status for SIPs that are designed to be continually updated and not reach a state of finality. This includes most notably SIP-1.

##  What belongs in a successful SIP?

##  SIP Formats and Templates

##  SIP Header Preamble

##  Linking to External Resources


## SIP Editors

The current SIP editors are:

- Mohamed Amer (@mohamedamer)

If you would like to become an SIP editor, please check SIP-5069.

## History

This document was derived heavily from Ethereum's EIP-0001 written by Alex Beregszaszi which in turn was derived from Bitcoin's BIP-0001 written by Amir Taaki which in turn was derived from Python's PEP-0001. In many places text was simply copied and modified.

## Copyright

Copyright and related rights waived via [CC0](https://github.com/subjektify/sips/blob/main/LICENSE).

## Citation

Please cite this document as:

Mohamed Amer (mohamedamer@subjektify.dev), "SIP-1: SIP Purpose and Guidelines", Subjektify Improvement Proposals, July 2024. Available: https://sips.subjektify.dev/docs/sips/sip-1
