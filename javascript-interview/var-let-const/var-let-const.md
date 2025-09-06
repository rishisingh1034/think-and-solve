var let const

---

# `var` vs `let` vs `const` in JavaScript

## Scope

- A **scope** is a certain region of the program where variables exist and can be accessed.

---

## `var`

- **Scope:** Function-scoped
- **Hoisting:** Hoisted to the top of their scope and initialized with `undefined`
- **Redeclaration:** Allowed
- **Reassignment:** Allowed

---

## `let`

- **Scope:** Block-scoped
- **Hoisting:** Hoisted but remains in the **Temporal Dead Zone (TDZ)** until initialized
- **Redeclaration:** Not allowed
- **Reassignment:** Allowed

---

## `const`

- **Scope:** Block-scoped
- **Hoisting:** Hoisted but remains in the **Temporal Dead Zone (TDZ)** until initialized
- **Redeclaration:** Not allowed
- **Reassignment:** Not allowed (but the contents of objects/arrays can be mutated)

---

## Shadowing

- **Definition:** Shadowing occurs when a variable declared in an inner scope (using `var`, `let`, or `const`) has the same name as one in an outer scope, thereby overriding access to the outer variable within that inner scope.

### Notes:

- `let` and `const` are block-scoped and **safely shadow** outer variables.
- `var` is function-scoped and may cause **unexpected behavior** due to hoisting.

---

## Hoisting

- **Definition:** Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase.

---
