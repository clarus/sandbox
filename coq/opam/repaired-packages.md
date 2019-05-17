# Repaired packages

We check in https://coq-bench.github.io/ for packages with errors. In case of error we are trying to solve, we add an issue in this file with the package name. We note the date when we started to look for a fix, and sort the issues in reverse chronological order.

We consider a package fixed when a action is taken (typically the creation of pull-request or an update to the bench system):
* ✓ fixed
* ✗ not fixed

## ✓ moment.1.0.0
2019-05-09
* PR https://github.com/coq/opam-coq-archive/pull/695
* wrong Coq version

## ✓ ltac-iter.1.1.0
2019-05-09
* PR https://github.com/coq/opam-coq-archive/pull/694
* wrong Coq version bounds

## ✓ libvalidsdp.0.5
2019-05-09
* compilation time of the dependencies increased

## ✗ intuitionistic-nuprl.8.6.0
2019-05-09
* too slow (timeout after 5h)
* issue raised about the timeout https://github.com/coq-contribs/intuitionistic-nuprl/issues/1
* TODO: watch the issue and take actions accordingly

## ✓ min-imports.1.0.0
2019-05-09
* PR https://github.com/coq/opam-coq-archive/pull/652
* fix uninstall

## ✓ paco
2019-04-30
* PR https://github.com/coq/opam-coq-archive/pull/642
* all `coq-paco` versions but one fail with Coq 8.5.3 according to the bench

## ✗ coq itself
2019-04-30
* TODO: check if this is normal to have packages of Coq in the `released/` repository

## ✓ intuitionistic-nuprl.8.6.0
2019-04-30
* compilation time increased

## ✓ interval.3.4.0
2019-04-30
* compilation time of the dependencies increased

## ✓ hammer.1.0.8+8.7
2019-04-30
* works with Coq 8.7.1+2
* works with Coq 8.7.2 and OCaml 4.05.0 but not in the bench
* now works in the bench! instability?

## ✓ graphs.8.5.0
2019-04-30
* PR https://github.com/coq/opam-coq-archive/pull/641
* does not work with Coq 8.5.3:
```
- File "checker.mli", line 8, characters 1-4:
- Parse error: [implem] expected after [str_item_semi] (in [implem])
- File "checker.mli", line 1:
- Error: Error while running external preprocessor
```
* does not work with Coq 8.5.2:
```
# File "checker.mli", line 8, characters 1-4:
# Parse error: [implem] expected after [str_item_semi] (in [implem])
# File "checker.mli", line 1:
# Error: Error while running external preprocessor
```
* does not work with Coq 8.5.1:
```
# File "checker.mli", line 8, characters 1-4:
# Parse error: [implem] expected after [str_item_semi] (in [implem])
# File "checker.mli", line 1:
# Error: Error while running external preprocessor
```
* does not work with Coq 8.5.0:
```
# File "checker.mli", line 8, characters 1-4:
# Parse error: [implem] expected after [str_item_semi] (in [implem])
# File "checker.mli", line 1:
# Error: Error while running external preprocessor
```

## ✓ equations.1.0~beta
2019-04-30
* PR https://github.com/coq/opam-coq-archive/pull/640
* does not work with Coq 8.7.1+2:
```
CAMLC -c src/equations_common.mli
File "src/equations_common.mli", line 380, characters 21-28:
Error: Unbound module Sigma
```
* does not work with Coq 8.6.1:
```
- File "src/principles_proofs.ml", line 1:
- Error: The implementation src/principles_proofs.ml
-        does not match the interface src/principles_proofs.cmi:
-        ...
-        In module PathMap:
-        The value `find_last_opt' is required but not provided
-        In module PathMap:
-        The value `find_last' is required but not provided
-        In module PathMap:
-        The value `find_first_opt' is required but not provided
-        In module PathMap:
-        The value `find_first' is required but not provided
-        In module PathMap:
-        The value `find_opt' is required but not provided
-        In module PathMap:
-        The value `choose_opt' is required but not provided
-        In module PathMap:
-        The value `max_binding_opt' is required but not provided
-        In module PathMap:
-        The value `min_binding_opt' is required but not provided
```
* does not work with Coq 8.6:
```
File "src/principles_proofs.ml", line 1:
Error: The implementation src/principles_proofs.ml
       does not match the interface src/principles_proofs.cmi:
       ...
       In module PathMap:
       The value `find_last_opt' is required but not provided
       In module PathMap:
       The value `find_last' is required but not provided
       In module PathMap:
       The value `find_first_opt' is required but not provided
       In module PathMap:
       The value `find_first' is required but not provided
       In module PathMap:
       The value `find_opt' is required but not provided
       In module PathMap:
       The value `choose_opt' is required but not provided
       In module PathMap:
       The value `max_binding_opt' is required but not provided
       In module PathMap:
       The value `min_binding_opt' is required but not provided
```
* does not work with Coq 8.5.3:
```
File "src/equations_common.mli", line 61, characters 23-48:
Error: Unbound module Context.Rel
```

## ✓ equations.0.9~beta2
2019-04-30
* PR https://github.com/coq/opam-coq-archive/pull/693
* appears as "Error with dependencies" in the OPAM bench because of incompatible OCaml version => fixed in the bench
* its only compatible Coq version is `8.5~beta2`: should we move this package out of the released repository? Should we bench without the `core-dev` repository to show a dependency error?

## ✓ math-classes.1.0.7
2019-04-30
* PR https://github.com/coq/opam-coq-archive/pull/639
* fails with Coq 8.7.2:
```
- File "./quote/classquote.v", line 22, characters 13-22:
- Error:
- Syntax error: 'Type' or 'Types' expected after 'Implicit' (in [vernac:gallina_ext]).
```
* fails with Coq 8.6.1:
```
- File "./quote/classquote.v", line 22, characters 13-22:
- Error:
- Syntax error: 'Type' or 'Types' expected after 'Implicit' (in [vernac:gallina_ext]).
```
* fails with Coq 8.5.3:
```
"coqc"  -q  -R "." MathClasses   categories/categories.v
"coqc"  -q  -R "." MathClasses   categories/product.v
"coqc"  -q  -R "." MathClasses   categories/dual.v
File "./categories/dual.v", line 42, characters 10-11:
Syntax error: [tactic:hints_path] expected after '[' (in [vernac:command]).
make: *** [categories/dual.vo] Erreur 1
```
* removed from the distribution: https://github.com/coq/opam-coq-archive/commit/37b32dcb84112c9a9bcff5a5d3f6df11d556cbab
* required by `coq-corn.1.2.0`
* works with Coq 8.6!
