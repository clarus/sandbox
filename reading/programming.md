# Programming

## Why Dependent Haskell is the Future of Software Development
https://serokell.io/blog/2018/12/17/why-dependent-haskell

## Embedding Untrusted Imperative ML Oracles into Coq Verified Code
https://hal.archives-ouvertes.fr/hal-02062288

Proving some properties about FFI from Coq to OCaml during the extraction of Coq to OCaml, using a monad to represent what could happen in the call to a (potentially non-deterministic) OCaml code from Coq. I have not read everything.

## Deep and Shallow Embeddings in Coq
http://dannenkov.me/papers/TYPES2019-abstract.pdf

* study deep and shallow embedding of functional programs in Coq using [MetaCoq](https://github.com/MetaCoq/metacoq);
* cite smart-contract languages as a motivation for formal verification;
* application to the Concordium's Oak smart-contract language;
* generates the shallow embedding from the deep embedding through MetaCoq and an evaluation function from the language AST to the Coq AST;
* the idea is to be able to do the meta-theory on the deep embedding and analyse concrete programs with the shallow embedding;
* uses a fuel to encode arbitrary fixpoints.

## Extending OCaml programs with Lua (soupault got plugin support)
https://blog.baturin.org/extending-ocaml-programs-with-lua-soupault-got-plugin-support.html

Presents a use case of an implementation of a Lua interpreter[Lua ML](https://github.com/lindig/lua-ml) in OCaml. Since this is a native interpreter, there is a more integrated way to combine Lua code with OCaml code (using only OCaml to make the glue). However the interpreter is only supporting an older version of Lua.

## A Gallina Subset for C Extraction of Non-structural Recursion
https://staff.aist.go.jp/reynald.affeldt/coq2019/coqws2019-tanaka.pdf

Seems to do extraction of a subset of Coq to C using a typed AST to deeply embed Coq in Coq. Special treatment for the termination of `for` loops.

## Verified programming in F*, a tutorial
https://www.fstar-lang.org/tutorial/tutorial.html

A dense introduction to F*. Many examples with proofs, including classical algorithms (sorting), simply typed lambda calculus interpreter and type checker, and state manipulation. Possibility to do complex proofs by guiding Z3 with lemmas and proof structure (induction for example). Error messages seem unclear however, like "it failed at this line" (but I am not an expert in Z3 and F*, may be possible to get more information with experience). Overall, type and proof inference seem to work well. Support of dependent types, effect inference in an effect lattice (divergence, state, exceptions, IOs). Ability to do proofs on the state thanks to an indexed monad with WP support. Properties attached to functions through refinement types or externally with lemmas. Ability to extract to OCaml: cleaner output than in the Coq extraction (no `Obj.magic` for example), but not human-like yet (many generated variable names, while not necessary by keeping the original program structure). Support for FFI to OCaml. OCaml seems to be one of the most mature F* backend, I have not tested the low-level one for imperative code.

## Scaling Static Analyses at Facebook
https://cacm.acm.org/magazines/2019/8/238344-scaling-static-analyses-at-facebook/fulltext

A good summary of the experience at Facebook developing and using the two tools Zoncolan (for Hack) and Infer (for Java, Objective-C, C++). Some ideas:
* importance of continuous reports of pull-request diffs to increase resolution of alarm;
* ability to scale static analysis techniques;
* for apps: looking for runtime failures; for backend: security issues;
* efficient bug discovery (better than humans);
* for security: main bugs: can be detected by taint analysis; many entire classes of former bugs are prevented by the use of typing (Hack) or better framework;
* importance of the analysis of concurrent programs (using separation logic) for the Android app when it was ported to multi-threading;
* open-source tools, publications;
* lucky to have good integration researchers / engineers.

## Lem: reusable engineering of real-world semantics
https://www.cl.cam.ac.uk/~pes20/lem/built-doc/lem-icfp-2014.pdf

A more extensive paper about Lem.

## Lem: A Lightweight Tool for HeavyweightSemantics
https://www.di.ens.fr/~zappa/projects/wmc/readings/itp11.pdf

Introduction to the tool Lem to formally define languages. Made by some of the same people as Ott. Seems to be more oriented towards programming, both in style (library, type-classes, ...) and in backend support (generation of OCaml to explore models by tests). Presented as a complementary language to Ott, seems that there is an aim to merge the two eventually. For example, Ott supports Lem as a backend.

## Ott: Effective Tool Support for the Working Semanticist
https://www.di.ens.fr/~zappa/projects/parsec/documents/met-dec07/zappa.pdf

Slides presenting the Ott project, a tool to define languages and semantics rules and compile them to various theorem provers.

## Articles / presentations
### Google: MLIR Primer: A Compiler Infrastructure for the End of Moore’s Law
https://drive.google.com/file/d/1hUeAJXcAXwz82RXA5VtO5ZoH8cVQhrOK/view
Talk about LLVM, the fact that this is a compiler for many languages. Some of these languages have their own low-level SSA language as an intermediate step. Considered as a good idea and missing (but too late) for Clang. Ex: Swift, Rust, Julia, TensorFlow.
=> language MLIR for TensorFlow, in order to merge all the intermediate languages in use for TensorFlow. Can even model more than just TensorFlow: Switch, even LLVM, ... Nested region avoiding phi nodes.
Systems to define transformations. Mechanisms for location tracking. Begins to be used heavily for TensorFlow. Hope that many will hack around. Hope of applying ML to optimization. Google seems to want to invest a lot into MLIR.

### Why Software Projects need Heroes
https://arxiv.org/pdf/1904.09954.pdf
To read

### Stair Climbing Stabilization of the HRP-4 HumanoidRobot using Whole-body Admittance Control
https://hal.archives-ouvertes.fr/hal-01875387/document
by Stéphane Caron
To read

### Normalization by Evaluation with Typed Abstract Syntax
https://www.brics.dk/RS/01/16/index.html
2001
Proof of normalization and type preservation of the simply typed lambda-calculus in Haskell.
To read

## Blogs
### What To Know Before Debating Type Systems
https://blog.steveklabnik.com/posts/2010-07-17-what-to-know-before-debating-type-systems
Very opinionated, gives answers to opinionated points of view, a little old (2011). Some interesting thoughts:
* always compare typed languages used the way they should be vs dynamic languages used the way they should be;
* strong emphasis on testing and TDD for dynamic languages;
* bad error trace for statically typed languages, which tend to expect less runtime bugs;
* REPL less common for statically typed languages, maybe linked to the history of C / Java?
* typed languages could enable shorter programs in some cases (with the type classes for example), but I do not think this is true in general.

### Martin Fowler
https://martinfowler.com/
Blog on entreprise software.
