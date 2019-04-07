# Programming

## Google: MLIR Primer: A Compiler Infrastructure for the End of Moore’s Law
https://drive.google.com/file/d/1hUeAJXcAXwz82RXA5VtO5ZoH8cVQhrOK/view
Talk about LLVM, the fact that this is a compiler for many languages. Some of these languages have their own low-level SSA language as an intermediate step. Considered as a good idea and missing (but too late) for Clang. Ex: Swift, Rust, Julia, TensorFlow.
=> language MLIR for TensorFlow, in order to merge all the intermediate languages in use for TensorFlow. Can even model more than just TensorFlow: Switch, even LLVM, ... Nested region avoiding phi nodes.
Systems to define transformations. Mechanisms for location tracking. Begins to be used heavily for TensorFlow. Hope that many will hack around. Hope of applying ML to optimization. Google seems to want to invest a lot into MLIR.
