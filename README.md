# Persona Library

The **Persona Library** is a [DevRel Foundation](https://github.com/DevRel-Foundation) (DRF) initiative to collect resources related to the development of personas. A **persona** represents the type of user that may engage with a product, service, project or organization. The value of defining personas comes from using them to align an organization around expectations of current and potential consumers and plan a strategy for their tactics.

Through the use of personas, as DevRel practioners, we can accelerate day-to-day decision-making for common operational activities.

* [Requirements and Use Cases](https://github.com/DevRel-Foundation/wg-resource-aggregation/discussions/46)
* [Glossary](./doc/reference/glossary.md) ([src](./data/reference/glossary.json))

## Persona Reference Library

The reference library contains links to third-party resources that may help in a deeper study of the process of creating and managing personas.

- [articles](./docs/reference/articles.md) ([src](./data/reference/articles.json))
- [books](./docs/reference/books.md) ([src](./data/reference/books.json))
- [tools](./docs/reference/tools.md) ([src](./data/reference/tools.json))
- [video](./docs/reference/video.md) ([src](./data/reference/videos.json))

Run `./bin/pls-json-to-md --build docs/reference --data ./data/reference/*.json` to regenerate markdown files from the source data.  Run `./bin/pls-validate --data data/reference/*.json --schema ./src/schemas/reference.json` to confirm the source data is valid.

## DevRel Foundation Persona Library System

The **Developer Relation Foundation Persona Library System (DEVREL-PLS)** is outlined in this section. It is an opinionated configuration framework for defining personas using a structured language (JSON) that adheres to an agreed upon standard schema.

By defining personas in this way, we can establish tooling to validate, restructure, inherit, format, and exchange personas between organizations and departments. 

Ease of use tools such as LLMs, user-interfaces, etc. are not currently within the scope of v1.0 of this project, but will be a valuable addition to allow for more user-friendly and less technical methods of working with persona and related reference resources.

### Learning the DEVREL-PLS

The following guides explain how to build and extend a custom persona set for your organization and then how to apply them to solve common operational tasks to the Developer Relations and related roles.

Developing your personas:
* [Getting Started with the DevRel Foundation Persona System](./docs/guides/getting-started.md) (_TODO_)
* How-to Run a Persona Alignment Workshop (_TODO_)
* How-to Present Personas to Your Organization (_TODO_)

Using your personas:
* [How-to Use Personas for Content Strategy](./docs/guides/content-strategy.md)
* How-to Use Personas for Community Management (_TODO_)
* How-to Use Personas for Event Strategy (_TODO_)
* How-to Use Personas for Product Advocacy (_TODO_)
* How-to Use Personas for Sales Enablement (_TODO_)
* How-to Use Personas for Growth Marketing (_TODO_)
* How-to Use Personas for the SDLC and Developer Experience (_TODO_)
* How-to Use Personas for Developer Education (_TODO_)

### DEVREL-PLS Persona Sets

Example sets of personas created by organizations for their use and shared as reference.

- [General Collection](./data/personas)
- [DevRel Foundation Persona Set](./data/sets/dev-rel.org/README.md)
- OpenSSF Persona Set (_TODO_)

Run `./bin/pls-validate --data data/personas/*.json --schema ./src/schemas/persona.json` to confirm the source persona data is valid.

### DEVREL-PLS Tools

- [pls-validate](./bin/pls-validate): used to validate one or more personas (JSON data) with a given schema.
- [pls-json-to-md](./bin/pls-json-to-md): used to format reference library entries into a renderable markdown file.

## License

All material contributed to the DRF Resources and Asset Aggregation Work Group is under [CC-BY-4.0 Licensing](https://creativecommons.org/licenses/by/4.0/deed.en).

See the [License and Intellectual Property](https://github.com/DevRel-Foundation/.github/blob/main/profile/README.md#license-and-intellectual-property) statement for instructions on how to reuse and adapt content from this repository, discussions, and issues with proper attribution to the Developer Relations Foundation.

## About the Persona Library Project

This project repository is maintained with support of the [Resource and Asset Aggregation Working Group](https://github.com/DevRel-Foundation/wg-resource-aggregation) and Developer Relations Foundation.

* Contributing (_TODO_)
* [Report Issues](https://github.com/DevRel-Foundation/wg-resource-aggregation/issues)
* [Questions & Feedback](https://github.com/DevRel-Foundation/wg-resource-aggregation/discussions/categories/persona-library)
* [Project Roadmap](https://github.com/orgs/DevRel-Foundation/projects/12)
