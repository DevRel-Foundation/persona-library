
# Contributing to the Persona Library

We're glad to have you here and reading this because our efforts are supported by volunteers. Thank you for taking the time to contribute your expertise to the DevRel Foundation Persona Library project.

This document describes some contribution guidelines for the project.

> [!IMPORTANT]
> Before you start contributing, you must read and abide by our
> **[Code of Conduct](./CODE_OF_CONDUCT.md)**.

You should also join the working group by subscribing here:
https://lists.dev-rel.org/g/wg-resource-aggregation

You'll find it easier to make contributions if you already have a GitHub account.

## Types of Contributions

Contribution can take several forms.

**Discuss**. Joining our working group calls and sharing your opinions and expertise is a form of contribution. It keeps our group engaging and making forward progress to hear thoughts from others.

**Shoutouts**. Let us know that you found resources here helpful and we'll include your show of appreciation in our testimonials.

**Feedback**. Have a suggestion, let us know how to improve.

**References**. If you know of a reference item (article, course, book, video, etc.) we will include it in the collection. This can be provided by creating an issue, sending an email to the working group owners, or best case is to fork the repos and submit a PR for review.

**Persona**. If you've developed personas using the Persona Library System schema and are willing to share anything that is not a trade secret, the examples and user / buyer / developer insights will be appreciated by all. You can identify them as a persona set, or it might be an addition or update to a persona from the general collection. Submit an issue, send an email to the working group owners, or best case is to fork the repos and submit a PR for review.

**Schema and Tools**. The schema and tools provide value to all. If you have suggestions on how to improve the schema, add additional tooling, or want to contribute an integration to a visualization or other system of record those would be welcome.

## How-to Make a Contribution

Choose the approach that is easiest for you. 

1. Send an email to wg-resource-aggregation + owner AT lists.dev-rel.org to reach the managers who can take action on your suggestions.
2. Start a **New Discussion** in the [GitHub Discussions](https://github.com/DevRel-Foundation/wg-resource-aggregation/discussions). There is a category for feedback and one for the Persona Library more specifically. This is a great place to ask a question if unsure.
3. Create an **Issue** in the [GitHub Issues](https://github.com/DevRel-Foundation/wg-resource-aggregation/issues?q=is%3Aissue%20state%3Aopen%20label%3Aresource%3Apersonas) for the project with the `resource:personas` label.
4. Assign an **Issue** to yourself or put in a PR using typical GitHub workflows for change requests.

## What Should You Contribute

Review the [Open GitHub Issues](https://github.com/DevRel-Foundation/wg-resource-aggregation/issues?q=is%3Aissue%20state%3Aopen%20label%3Aresource%3Apersonas) with the label `resource:personas` for some ideas. If there are tags with `good-first-issue` this helps identify smaller projects that have fewer dependencies so somebody new to the working group can pitch in.

## How-to Get Help Contributing

Use GitHub Discussions, Discord, or join one of our monthly working group calls to brainstorm and ask questions about how to contribute.

# Orientation

This section includes some additional details to help orient new contributors.

## Build Environment

The tools are currently JavaScript / Node.

## File Structure

### `/bin` 

This folder contains shell scripts to execute tool commands. The logic of the commands will typically be under `/src` but this is something you might include in your `$PATH`.

### `/data` 

This folder contains the JSON configuration data that defines personas and references.

- `/data/personas` is the general collection
- `/data/reference` holds reference material from third-party sources
- `/data/sets` are persona sets for different organizations / projects

### `/docs`

This folder contains documentation about the persona library.

- `/docs/guides` are the tutorials
- `/docs/reference` are built from the reference data
- `/docs/traits` define various traits to support the schema definition descriptions

### `/src`

This folder contains the source code and schemas.

## Review Process

Our review process is informal so we'll add guidelines here as we learn. We maintain the right to refuse accepting any content deemed inappropriate by a two-thirds working group manager vote.

### 1. Promotional Materials

We want content that adds educational value to our audience. If it is deemed promotional in nature and requires purchase of a product or service then a submission may not be accepted.

### 2. Paywalled Materials

We want content that is accessible in the library. If access to a resource requires disclosing personal information or consuming advertisements as a condition for access then it may not be accepted.

# Thank You!!

We really do appreciate our contributors. We'll identify participants here who have made a significant contribution to this library.

- Jayson DeLancey ([@j12y](https://github.com/j12y)) for contributing to the original design, schema, and resources of the Persona Library System.
- *Your name could be here next.*

https://github.com/DevRel-Foundation/persona-library/graphs/contributors

