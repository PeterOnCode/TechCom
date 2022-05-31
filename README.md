# The Evolution of the Serverless-First Engineer

13 May 2021 9:00am, by  [David Anderson](https://thenewstack.io/author/david-anderson/)

![img](https://cdn.thenewstack.io/media/2021/05/11acef65-copper-1081825_1280-1024x681.jpg)

> [TOC]


[Fauna](https://fauna.com/?utm_content=sponsor-disclosure) sponsored this post.

<img src="https://cdn.thenewstack.io/media/2021/03/2b80cfeb-dave_400x400.jpg" alt="img" style="zoom:25%;" /> David Anderson David is a technical leader who enjoys  writing and speaking about the leading edge of technology. Starting as a  software engineer in leading telecom companies including Three, Nokia  and Ericsson, David moved to Liberty Mutual in 2007 and continued to  drive technology change and cloud adoption. He continues to empower and  enable peers on Serverless First, Well-Architected and Engineering  Excellence, all to enable digital, artificial intelligence, improved  time to value and high-performing teams. He is based in Belfast, a  member of the Wardley Mapping community and likely to fire out opinions  on Twitter @davidand393.  ](<https://www.theserverlessedge.com/>)

The role of the software engineer evolves every few years. A term  will catch hold and inspire the imaginations of engineers who want to be it, managers who want to have it and recruiters who need to find it.  Some are fads — a flashing moment. Others represent a paradigm shift  happening in our industry. We looked for specialists and experts for  many years — security, Java, web, mobile, Windows 32 COM experts. We  then started thinking about polyglot programmers and full-stack  engineers. Will the serverless-first engineer be next? Somehow, I don’t  think that name will catch on, but it’s going to happen. Let’s explore  the attributes of these engineers and wait for the correct name to  appear.

The phrase “shift-left” was first used back in 2001 by [Larry Smith in Dr. Dobbs](https://www.drdobbs.com/shift-left-testing/184404768), and it referred to testing having to shift left. That is, it needed to  happen earlier in the lifecycle. Since then, everything has shifted  left, right, up and down — software engineers pretty much do everything. After all, we are all DevOps teams: We want to build it, run it and own it. To achieve this, the level of abstraction has lifted. Engineers now need to understand everything, but interface through different  abstraction layers.

Serverless architectures allow engineers to work effectively in this  fashion. It’s possible for a small team to do everything (honestly, it  is). For this to happen, the engineers need to be comfortable with some  attributes that the software engineers of yesteryear may not have been.  Platforms and compute have been used to illustrate this, but maybe we  can show how a serverless data approach like [Fauna](https://fauna.com/?utm_content=inline-mention) can meet the demand of serverless architectures? I believe technology has  moved on considerably to enable this change. It’s already here. Have you made the upfront investment required for your people and teams to take  advantage of this modern approach to creating software?

Here are some areas that are worth digging into. We will primarily  use our product Fauna to illustrate these, although other offerings such as Firebase, Cosmos DB and Aurora have compelling offerings too and  also fall into the category of serverless data.

## 1. Cloud Native, for Real

It’s a problematic term, but there are a few hard truths. You will  not build a better cloud on-prem, so cloud means the top public  providers. Fact: Multicloud is not the answer; it’ll add immense  complexity for the engineering team. The cloud is not someone else’s  data center. If you are only using it for infrastructure, then you are  not getting all the advantages. Engineers must understand the  higher-order services and use them appropriately. Don’t spin up a  virtual machine and install a database when you can use a service  instead.

**Traditional mindset:**  Cloud native means you install your software on a VM.

**Illustration:** As an engineer, how long would it take you to install, configure and tune a traditional database to be always  available — even on EC2? With [Fauna](https://fauna.com/?utm_content=inline-mention), this is a given: Your data is always available and transactions are guaranteed.

## 2. Event-Driven

If using the cloud properly, then it should be [event-driven](https://stackoverflow.blog/2020/03/16/how-event-driven-architecture-solves-modern-web-app-problems/). This is the best way to handle elasticity and scale. The event-driven  approach has been around for a long time, but complex and used for  specific use cases. The new normal in many modern applications is that  regular API calls are replaced with events. There are lots of subtle  design considerations for eventing, and it’s becoming a necessary skill  to master.

**Traditional mindset:** Event-compatible architectures mean events are used for a specific reason, not everywhere.

**Illustration:** An event system will grow and shrink  with traffic. Fauna is a data API and scales transparently, as an API  should, so will handle traffic. A true serverless data system —  including Cosmos DB and Aurora — doesn’t need advance warning for  traffic spikes.

## 3. Less Ops, More Architecture

The idea of a loosely coupled architecture that contains serverless  components tied together with events sounds ambitious, but it is an  emerging trend. [Serverless architectures](https://martinfowler.com/articles/serverless.html) will enable teams to deliver business features and capabilities faster  and in most cases more cost-effectively. The engineer must embrace  evolutionary architecture design and be comfortable taking a risk-based  approach, which means [constantly evolving and extending the architecture](https://www.theserverlessedge.com/2021/05/how-to-make-well-architected-work-for-organisations-introducing-the-scorp-review-cycle-part-1/) as the system grows.

**Traditional mindset:** set the architecture upfront (BUFD: Big Up Front Design).

**Illustration:** A great measure of maturity is how  much is automated in operations. With serverless data, the operational  overheads are part of the vendor’s responsibility. You are now free to  evolve your architecture and not worry about operations or downstream  teams — true agility.

Fauna is a flexible, developer-friendly, transactional database  delivered to you as a secure, web-native API. Never again worry about  database provisioning, maintenance, scaling, sharding, replication, or  correctness.

**Read the latest from Fauna**

[Restore your database to a stable snapshot on demand
24 May 2022
](https://fauna.com/blog/backup-and-restore)

## 4. The Flywheel Effect

Once the higher-level abstraction is embraced and mastered, the  flywheel has started. Continuous delivery means software is constantly  being released into production several times a day. As per the [DORA](https://puppet.com/blog/take-the-2021-state-of-devops-survey-be-part-of-our-10-year-history/) study, teams with high throughput can achieve high stability. Once  engineers get into this way of working, it reduces risk and becomes more manageable — the flywheel doesn’t slow.

**Traditional mindset:**  planned releases and cadence — the concept of release day.

**Illustration:** Technical debt will often build with  age. Serverless data is consumption-based, which means you are not tied  into decisions forever. There’s no capital expenditure to worry about.  Minimize technical debt and maximize spend as the flywheel speeds up.  Don’t accumulate risk.

## 5. Cognitive Burden

How do we keep the cognitive burden low while all of these new  responsibilities are being transitioned onto the development team? [Team Topologies](https://itrevolution.com/team-cognitive-load-team-topologies/) by Matthew Skelton and Manuel Pais performs a deep analysis on  cognitive load. In short, don’t argue about microservices, containers or APIs. Just make sure the team can handle the software they are working  on.

**Traditional mindset:**  a great developer can work the whole system; there are no boundaries.

**Illustration:** One of the greatest headaches when  designing distributed systems is performance and trying to orchestrate  the different parts. Fauna delivers low-latency and data consistency.  Imagine you could remove the data layer as a performance and accuracy  concern? Serverless data will ease that cognitive load.

The above areas are important, but they are fairly well covered. The next two are game-changers:

## 6. The Data Journey

A major challenge for every new type of architectural style is often  data. With microservices, the challenge for many was the idea that the  data solution is part of the service. This simply wasn’t possible with  many traditional data solutions. With serverless, the elasticity and  cloud resilience is part of the system, so the data solution must be  robust. The data solution must be a service and ideally a serverless  service. Serverless data services like [Fauna](https://fauna.com/features), Firebase and DynamoDB provide a fast, scalable and strong consistent  data service that will scale with your application. As per the  attributes above, the serverless engineer should not require extensive  work to add a store to the architecture.

Services like Fauna enable the engineer to define the expected  behavior and not be burdened with the non-functional attributes. The  engineer needs to spend the majority of time creating and manipulating  the data store, not the underlying infrastructure. A critical mindset of the serverless engineer is to spend time on logic that matters, not  infrastructure that doesn’t.

**Traditional mindset:** Significant time spent researching, installing, configuring, tuning and operating the database.

**Illustration:** Abstraction by specification is a  fundamental concept for computer science and, when used correctly, is  immensely powerful. Serverless data approaches like Fauna, Cosmos DB and Aurora provide a comprehensive interface to interact with all of your  data concerns in an elegant manner. Don’t get caught in configuration  hell.

## 7. Low-Friction Developer Experience

In a modern software house, it’s not acceptable to force engineers  through a poor experience. The cognitive load of creating any software  system is high, so there must be zero friction added by the toolset.  Imagine a great guitarist being uncomfortable or compensating for their  guitar. The instrument is a channel to the music, as the engineer’s  environment is a channel to the outcomes. If the Royal Albert Hall  decreed that every guitarist on stage must play a Fender Stratocaster,  this might suit some, but many bands would decide not to play there.  It’s not appropriate to force engineers to use certain toolsets.

The serverless engineer needs to deploy at pace and requires rapid  feedback loops. The developer experience is different for everyone, but  there are similarities. Everything as code, interface via APIs, easy  binding and consistency — this also includes data. One of the most  frustrating things for the developer experience is contrived workarounds for mocking data locally or trying to deal with funky dev databases  that don’t reflect production. Serverless data solutions such as Fauna  have the flexibility to replicate environments and put the developer in  control.

**Traditional mindset:** replicate database solutions locally with significant maintenance overhead.

**Illustration:** Modern developers have grown up with  the web. It’s a natural model and used every day, in work and at home.  It has a robust and familiar security model. Fauna uses web-native  access and the same robust security model. This enables integration,  low-coupling and avoids customization — the perfect recipe for  low-friction developer experience.

## Serverless Engineer or Polyglot++?

As we track the evolution of the modern software engineer, there’s a very clear trend toward the Serverless First mindset.

In the early days, the specialist was king. Rockstar developers were  able to earn vast amounts of money using their deep expertise in random  tech. We then introduced flexibility as systems sprawled with the  polyglot programmer. The craft of software engineering was starting to  emerge. As architectures became more complex and layered, the clever  developers became full-stack engineers — people who could do it all. If  architectural styles had stayed with microservices and monoliths, this  would have been OK.

At this point, the data engineer started to merge with the  application engineer. Serverless data approaches further enable this by  allowing engineers to work within the data layer in their own  environment. You don’t have to become a specialist.

Moving on, the exponential growth of software continues and the cloud started to enable functions driven by events. The battle lines or  domain boundaries are being drawn. The serverless engineer is a  different proposition. Not only are there the skills from previous  generations, but the focus to only do what is needed for the business  and no more. It’s not easier, but better. Maybe the quote from Amazon  CTO Werner Vogels in 2017 is finally starting to land: “The only code  you will have to write is business logic.”

The New Stack is a wholly owned  subsidiary of Insight Partners, an investor in the following companies  mentioned in this article: Real.

Feature image [via Pixabay](https://pixabay.com/photos/copper-metal-modern-design-1081825/).

[Contributed](https://thenewstack.io/tag/contributed/)[Sponsored](https://thenewstack.io/tag/sponsored/)

#### © 2022 The New Stack. All rights reserved

[Privacy Policy](https://thenewstack.io/privacy-policy). [Terms of Use](https://thenewstack.io/terms-of-use).
