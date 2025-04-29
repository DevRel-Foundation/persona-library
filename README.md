# Persona Library

The **Persona Library** is a [DevRel Foundation](https://github.com/DevRel-Foundation) (DRF) initiative to collect resources related to the development of personas. A **persona** represents the type of user that may engage with a product or service. The value of defining personas comes from using them to align an organization around expectations of current and potential consumers. 

Through the use of personas as practioners, we can accelerate day-to-day decision-making for common operational activities.

* [Requirements and Use Cases](https://github.com/DevRel-Foundation/wg-resource-aggregation/discussions/46)
* Glossary (_TODO_)

## Using the DRF Persona Library System

The DevRel Foundation Persona Library System (DRF-PLS) is outlined in this section. It is a framework for defining personas using structured data that can follow a standardized schema. By defining personas in this way, we can establish tooling to validate, restructure, inherit, format, and exchange personas.

### Learning the DRF-PLS

The following guides explain how to build and extend a custom persona set for your organization and then how to apply them to solve common operational tasks to the Developer Relations and related roles.

Developing your personas:
* [Getting Started with the DevRel Foundation Persona System](./docs/guides/getting-started.md) (_TODO_)
* How-to Run a Persona Alignment Workshop (_TODO_)
* How-to Present Personas to Your Organization (_TODO_)

Using your personas:
* [How-to Use Personas for Content Strategy](./docs/guides/content-strategy.md)
* [How-to Use Personas for Community Management](./docs/guides/community-management.md) (_TODO_)
* [How-to Use Personas for Event Strategy](./docs/guides/event-strategy.md) (_TODO_)
* How-to Use Personas for Product Advocacy (_TODO_)
* How-to Use Personas for Sales Enablement (_TODO_)
* How-to Use Personas for Growth Marketing (_TODO_)
* How-to Use Personas in the Software Development Process (_TODO_)

### Persona Sets

Example sets of personas created by organizations for their use and shared as reference.

- [General Collection](./data/personas)
- DevRel Foundation Persona Sets (_TODO_)

Run `./bin/validate --data data/personas/*.json --schema ./src/schemas/persona.json` to confirm the source persona data is valid.

### Tools

- [validate](./bin/validate): used to validate one or more personas (JSON data) with a given schema.
- [json-to-md](./bin/json-to-md): used to format reference library entries into a renderable markdown file.

## Persona Reference Library

The reference library contains links to third-party resources that may help in a deeper study of the process of creating and managing personas.

- [articles](./docs/articles.md) ([src](./data/reference/articles.json))
- [books](./docs/books.md) ([src](./data/reference/books.json))
- [tools](./docs/tools.md) ([src](./data/reference/tools.json))
- [video](./docs/video.md) ([src](./data/reference/videos.json))

Run `./bin/json-to-md --build docs --data ./data/reference/*.json` to regenerate markdown files from the source data.  Run `./bin/validate --data data/reference/*.json --schema ./src/schemas/reference.json` to confirm the source data is valid.

## About the Persona Library Project

This project repository is maintained with support of the [Resource and Asset Aggregation Working Group](https://github.com/DevRel-Foundation/wg-resource-aggregation) and Developer Relations Foundation.

* Contributing (_TODO_)
* [Report Issues](https://github.com/DevRel-Foundation/wg-resource-aggregation/issues)
* [Questions & Feedback](https://github.com/DevRel-Foundation/wg-resource-aggregation/discussions/categories/persona-library)
* [Project Roadmap](https://github.com/orgs/DevRel-Foundation/projects/12)
