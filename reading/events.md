# Events

## EverParse
* Everest: 2016-2021:
  * F*, Z3, Lean
  * verified security
  * widespread deployment
  * efficiency
* huge collaboration
* Hacl*
* VALE: verified assembly for crypto
* TLS record layer protection
* EverCrypt = Hacl* + Value
* What do we verify?
  * safety
  * functional correctness
  * secrecy
  * cryptographic security (so with proba)
  * everything in F*
* Is parser research done? => There are still some bugs, for example Bloudbleed (2017)
* goals:
  * generate verified C parsers and serializers
  * zero-copy C implementations
  * properties: parse / print inverses; injectivity
  * QuackyDucky: generates Low* code
  * strong prefix property; the parser succeeds whether there is more data at the end or not (useful for composition)
  * performance: faster that current implementations

## Coq Working Group
### 2019-10-01
* discussion about some opened pull-requests:
  * https://github.com/coq/coq/pull/10633
  * https://github.com/coq/coq/pull/9897
  * https://github.com/coq/coq/pull/10478

### 2019-10-02
* discussion about universes hierarchies;
* discussion about reals:
  * standard library, reals, coquelicot, corn, math-comp, flocq, ...
* Coq platform:
  * inspired by the Windows installer, including packages
  * currently: difficult to start; ex: at a summer school, hard even for Linux;
  * should be hard to remove a package;
  * test interoperability of package versions;

