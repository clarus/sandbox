# Programming

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
