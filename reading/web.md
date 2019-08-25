# Web

## JavaScript: The Modern Parts
https://amontalenti.com/2019/08/10/javascript-the-modern-parts

Good summary of the evolution of JavaScript from 1998, from someone who has worked on it since that time.
* 1998: lot of security issues, browser incompatibilities, not taken seriously compared to other programming languages;
* 2008: beginning of an ecosystem, with better tooling (debugger, ...), libraries such as jQuery, release of Chrome, V8, Node.js, npm; JavaScript can then run everywhere (desktop, mobile, server);
* 2018: mature ecosystem, comparable and even better than alternatives such as Java, Python, ... Only problem: a harder learning curve.

## The Majestic Monolith
https://m.signalvnoise.com/the-majestic-monolith/

Praise of the monolith architecture by the Rails creator. Interesting points:
* more realistic for small teams (classic, but experimented for Basecamp with 12 developers);
* forces everyone to understand the code;
* sell the monolith by talking about *majestic monolith*.

##  GitLab’s journey from Azure to GCP 
https://about.gitlab.com/2019/05/02/gitlab-journey-from-azure-to-gcp/

Migration of GitLab to Google Cloud Platform. Some comments on HN too.
* use a mirroring technique to prevent blocking all the service moving all the data (may take several days);
* the mirroring technique is made as an independent product, GitLab Geo, to provide a read-only mirror of a GitLab instance, with writes sent to the primary instance;
* given reasons of the migration: Kubernetes and stability;
* reasons from commentaries: cost and because Microsoft acquired GitHub;
* result: success of the migration and less downtime.

## Don't Do This in PostgreSQL
https://wiki.postgresql.org/wiki/Don%27t_Do_This

TODO: read
