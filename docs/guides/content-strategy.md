
# HOW-TO USE PERSONAS FOR CONTENT STRATEGY

The purpose of this guide is to demonstrate how to use the **DevRel Foundation Persona Library System** (DEVREL-PLS) within the context of your content strategy. A vibrant program will incorporate many contributors, so to maintain consistency there should be a common understanding of who the audience is.

Given organizations will target different types of personas through content at different stages of their adoption journey can also aid with categorizing and tracking the effectiveness of the content.

## Benefits

There are a number of benefits to using personas more directly when planning content.

- cross-functional contributors will better understand nuances of the audience even if their primary role is not developer relations
- choice of format and type of content is made to match what will resonate with the persona more deliberately
- distribution of content will more appropriately be placed where the target persona will consume it
- the tone of voice and key messages will have a framing best suited to achieve the awareness or activation goals of the persona
- third-party contributors to content (guest authors, freelancers, agencies, content marketers, etc.) can leverage the public open-source persona resources to understand your audience better
- can help junior content creators ramp up to better understand the audience of "developer" that takes others years to comprehend
- communication techniques are included in the persona definition
- better alignment around the role content plays in campaigns
- helps content reviewers share an understanding of the persona to deliver valuable and actionable relevant feedback

Since many organizations will target more than one persona through content, this segmentation can evaluate the effectiveness of content more precisely.

## 1. Setting Up

There are a few pre-requisites for using personas in your content system that you should do before rolling out a change to your organization.

### 1.1 Pick Your Personas

If you haven't already, use the [Getting Started Guide](./getting-started.md) to explore available personas, branch as necessary to capture the most important personas for your program.

For example, you may break your personas up into existing customers and future customers. The content you create for awareness, activation, and retention would vary pretty wildly and should be reflected in the variety of personas you are targeting. Similarly, you may be targeting technical practitioners ("developers") and non-technical business decision-makers ("buyers"). This insight has implications on your content strategy.

Your persona set might include:
- security-dev-early
- security-dev-laggard
- security-biz
- security-all-pro

These are used as examples in the next steps.

### 1.2 Configure Your Project Management Tool

It is common to use a tool for tracking who is working on what content topics. This may be a simple spreadsheet, database, template, or some other system. The specifics are beyond the scope of this document.

> See [Tools Catalog](https://github.com/DevRel-Foundation/tools-catalog) for example content tracking solutions that are used such as AirTable, SmartSheet, Notion, Sheets, Excel, etc.

Whether it is a column or data field, for each content task identify one or more personas that the content should target. The fewer the better for more specific targeting, but some content may be able to reach multiple personas. Constrain the values to the 5-7 target personas for your content program.

## 2. Produce Content

When it is time to produce content, the persona provides definition to the traits of your target audience. When speaking or writing content, you'll use the frame of reference of each persona to gauge whether or not your content is appropriate. The most relevant persona attributes for content are discussed.

Here's an example:
```json
...,
"adoption": {
    "curve": "majority",
    "modality": ["learn", "understand", "problem"]
},
"role": {
    "function": "dev",
    "level": "lead",
    "experience": "mid",
    ...
},
"awareness": {
    "status": "unaware" 
}
...
```

### 2.1 Adoption Curve

The [adoption curve](../traits/adoption-curve.md) of your audience can be quite important trait to understand.

If you are targeting an _early adopter_ such as **security-dev-early** then you would approach content development to suit. These individuals have the tendency to seek new trends they can apply to their work. This means you may want to develop a blog post that talks about a new technology trend in the context of your organization. Conversely, if you are targeting a _laggard_ such as the **security-dev-laggard** you are writing content for somebody who is looking to get a job done. A more problem-oriented short article like a FAQ or KB article would be a great fit. The _laggard_ does not want fluff.

The _innovator_ may be more interested in hearing about problems than solutions because they are motivated by opportunities. The _majority_ are dismissive of new fads, but maturing tools and technology are valuable and they want lasting value from the time they put in to learn. The _late-comer_ is being encouraged by management, so a workshop or training that really force-feeds content is a great fit.

### 2.2 Career Stage

The [experience](../traits/role-experience.md) somebody has in their role also is an important trait in understanding content.

Your persona set may not differentiate, but if you are authoring content for somebody who is _proficient_ then explaining definitions of common industry terms may not be helpful. If you are educating somebody who is _early_ the familiarity with the entire history of computing would make your content difficult to understand. The reality of a lot of content may be that you have one persona that encompasses both alternatives so you'll need to consider both in your structure, tone, explanation, and humor. You may also consider breaking the content up into a part 1 and part 2 where a more _mid-level_ experienced person can choose to read one or both.

### 2.3 Modality

The [modality](../traits/adoption-modality.md) focuses in on the media type that is most important. While any particular individual may have preferences it may not be common to split your personas by modality but rather try to accomodate them all.

You may want to setup your content tracking system to include a second column for the modality instead of trying to track each persona variation which could become unwieldly.

- security-dev-learn
- security-dev-problem

The _learner_ wants a better understanding so is looking for tutorials, audio/video presentations such as podcasts or videos, and they are more likely to read the nurture emails. The audience who is looking to _problem-solve_ wants a quick how-to guide or a debugging guide as part of their content need.

This modality could help you decide on segmenting your audience based on likelihood to read documentation versus watching a youtube video.

### 2.4 Role

The [role](../traits/role.md) can be used to judge different tendencies or hone your call to action.

- an _individual contributor_ versus a _lead_ suggests do versus tell CTAs of a practitioner looking for code samples or a thought-leadership piece for how an organizational problem is addressed
- the _tools_ that your persona uses or their _responsibilities_ when it differentiates your segmentation could have content implications

Each trait that is meaningful becomes a constrained set of choices for your content even if the root definition of your persona set doesn't change.

- security-biz + _finance_ responsibility who may care about pricing and billing content
- security-biz + _marketing_ responsibility who may care about partnership content
- etc.

### 2.5 Funnel Stage

The nature of the relationship with a persona is an important consideration and may be represented in your persona set or a combination of the [awareness status](../traits/awareness-status.md).

The example of a **security-all-pro** represents somebody who understands your product very deeply. To engage this audience, release notes, product updates, roadmap input, etc. become the right types of content to engage with somebody already involved with your program.

That differs greatly from the _lead_ or _unaware_ who may stumble upon content through a search engine or link and has no context about your brand. For these types of content, you need a path for your persona to discover more.

## 3. Distribute Content

The most valuable personas will represent the [segment](../traits/segment.md), the vertical or industry, in which your persona resides. Some of the other [organization](../traits/organization.md) traits like _maturity_ and _gtm_ may also come into play with where the persona engages.

As are customizing your personas, take time to add specific [awareness](../traits/awareness.md) channels and events that represent the persona. Some newsletters may really be more appropriate for somebody new to a topic than the more academic user who has specialized.

You can include these directly in the persona or track the most important ones in your tracking tool. Here's what that looks like in the persona definition:

```json
"awareness": {
    "channels": [
            {"format": "blog", "url": "https://thehackernews.com/"},
            {"format": "blog", "url": "https://www.darkreading.com/"},
            {"format": "newsletter", "url": "https://tldrsec.com/", "level":"300"},
            {"format": "newsletter", "url": "https://cloudseclist.com/"},
            {"format": "blog", "url": "https://dev.to/{your product}"}
    ],
    ...
}
```

On-brand properties or in third-party locations is an important characteristic for tracking because it suggests how much assumed knowledge belongs in your content.

If you've produced 101 level content, make sure it maps to 100 level channels. If you've produced something very niche and deep, target 300 level channels.

