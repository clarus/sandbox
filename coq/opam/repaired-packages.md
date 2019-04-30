# Repaired packages

## math-classes.1.0.7
https://github.com/coq/opam-coq-archive/pull/639
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
