# Scala keywords explained

## Table of Contents

{:toc}

## Reserved keywords

#### abstract

* `abstract class ClassName` defines a class with incomplete members.
  Abstract classes:
  * can take initialization parameters,
  * cannot be instantiated.
* `abstract override traitMethod` defines traits methods that calls unrelated
  `super` methods. It allow the usage of the **stackable trait pattern**

#### case

* `x match { case 2 => ... }` is an alternatives of a pattern matching,
  it executes the statement when the value match the pattern.
* `x match { case a if (a > 2) => ... }` like above but the `if` condition
  must be satisfied too.
* `try { ... } catch { case error: ErrorClassName => ... }`
  handles an error when it matches the specified pattern. It accepts several modifiers.
* `case class ClassName` defines a **case class**, a class made to hold data.
  Case class instances has the following features:
  * supports pattern matching,
  * can be compared to other instances `a == b`,
  * produces a readable message when printed.
* `case object` defines an object that can be serialized.

