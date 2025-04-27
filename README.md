# Persona Library

The **Persona Library** is a [DevRel Foundation](https://github.com/DevRel-Foundation) initiative to collect resources related to the development of personas. A **persona** represents the type of user that may engage with a product or service. The value of a persona comes from using it to align business around expectations of current and potential buyers.

* [Requirements and Use Cases](https://github.com/DevRel-Foundation/wg-resource-aggregation/discussions/46)
* Glossary (_TODO_)

## Using the Persona Library

To fully appreciate the benefits of personas, these guides explain how to apply the system to solve common operational tasks somebody who works in Developer Relations may need to accomplish.

Details on how to use the resources of the persona library.

* [Getting Started with the DevRel Foundation Persona System](./docs/guides/getting-started.md) (_TODO_)
* How-to Run a Persona Alignment Workshop (_TODO_)
* [How-to Use Personas for Content Strategy](./docs/guides/content-strategy.md)
* [How-to Use Personas for Community Management](./docs/guides/community-management.md) (_TODO_)
* [How-to Use Personas for Event Strategy](./docs/guides/event-strategy.md) (_TODO_)

### DRF Persona System Attributes

Documentation explaining the various attributes that form a Persona.

- [Career Traits](./docs/traits/career.md)
- [Organization Traits](./docs/traits/organization.md)
- [Professional Development Traits](./docs/traits/learning.md)
- [Role Traits](./docs/traits/role.md)

### DRF Persona System Indexes

Mapping documenation to cross-reference personas.

- Job Title Index (_TODO_)
- Industry Index (_TODO_)

### DRF Persona Sets

Example sets of personas used by organizations.

- DevRel Foundation Persona Sets (_TODO_)

Run `./bin/validate --data data/personas/*.json --schema ./src/schemas/persona.json` to confirm the source persona data is valid.

## Reference Material

In addition to the DRF Persona System, there are reference materials to learn more about the process of creating and managing personas.

- [articles](./docs/articles.md) ([src](./data/reference/articles.json))
- [books](./docs/books.md) ([src](./data/reference/books.json))
- [tools](./docs/tools.md) ([src](./data/reference/tools.json))
- [video](./docs/video.md) ([src](./data/reference/videos.json))

Run `./bin/json-to-md --build docs --data ./data/reference/*.json` to regenerate markdown files from the source data.  Run `./bin/validate --data data/reference/*.json --schema ./src/schemas/reference.json` to confirm the source data is valid.

## About the Persona Library

This repository is maintained with support of the [Resource and Asset Aggregation Working Group](https://github.com/DevRel-Foundation/wg-resource-aggregation) and Developer Relations Foundation.

* Contributing (TODO)
* [Report Issues](https://github.com/DevRel-Foundation/wg-resource-aggregation/issues)
* [Questions & Feedback](https://github.com/DevRel-Foundation/wg-resource-aggregation/discussions/categories/persona-library)
* [Project Roadmap](https://github.com/orgs/DevRel-Foundation/projects/12)
