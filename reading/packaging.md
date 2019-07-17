# Packaging

## Why Do Software Packages Conflict?
https://upsilon.cc/~zack/research/publications/msr2012-conflicts.pdf

Study of bugs due to conflict of packages. Takes example from the bug tracker of Debian and RedHat (around 100 / 200 conflict bugs each). Extract these bugs by regexp. Less false positive bugs in RedHat (more professional maintainers?). Bugs classified into five categories:
1) conflict on access on shared resources (files, sockets, global names, ...);
2) conflict on data format (in files, pipes, ...);
3) interactions between packages (often a package reveals an existing bug another);
4) evolutions in meta data of a package;
5) spurious conflicts.

Solutions:
1) more meta-data;
2) automated tests;
3) idem;
4) idem;
5) idem.

Ideas of adding test commands to the package metadata, and using virtualization strategies to test packages both in isolation and with tracing of resources usage.
