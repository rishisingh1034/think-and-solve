**one-stop interview prep note**.

---

# 📘 JavaScript Interview Notes — Functions, Edge Cases & Gotchas

---

## 🟦 Array Methods

### 1. `map()`

Creates a new array by applying a function to each element.

```js
array.map((element, index, array) => return value);
```

✅ Example:

```js
[1, 2, 3].map((x) => x * 2); // [2, 4, 6]
```

⚠️ Edge Cases:

- Doesn’t mutate original.
- No return → `undefined` elements.
- Preserves empty slots (`[1,,3].map(x=>x*2)` → `[2,,6]`).

---

### 2. `filter()`

Creates a new array with elements that pass a condition.

```js
array.filter((el, i, arr) => condition);
```

✅ Example:

```js
[1, 2, 3, 4].filter((x) => x % 2 === 0); // [2, 4]
```

⚠️ Edge Cases:

- Returns empty array if no matches.
- Skips empty slots.

---

### 3. `reduce()`

Reduces array to a single value.

```js
array.reduce((acc, curr, i, arr) => updatedAcc, initialValue);
```

✅ Example:

```js
[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6
```

⚠️ Edge Cases:

- No `initialValue` → first element used.
- Empty array without `initialValue` → **TypeError**.
- Can return any type.

---

### 4. `forEach()`

Runs function on each element.

```js
array.forEach((el, i, arr) => { ... });
```

⚠️ Edge Cases:

- Returns `undefined`.
- Cannot break/return early.
- Skips empty slots.

---

### 5. `find()` / `findIndex()`

- `find()` → first matching element.
- `findIndex()` → index of first match.

⚠️ Edge Cases:

- Return `undefined` / `-1` if no match.
- Stops after first match.

---

### 6. `some()` / `every()`

- `some()` → at least one true.
- `every()` → all true.

⚠️ Edge Cases:

- `some([])` → `false`.
- `every([])` → `true` (vacuous truth).

---

### 7. `includes()`

Checks if array contains a value.
⚠️ Edge Cases:

- Uses `===` except `NaN` equals `NaN`.

---

### 8. `sort()`

Sorts array **in place**.
⚠️ Edge Cases:

- No compare fn → lexicographic sort.
- Mutates array.

---

### 9. `splice()` vs `slice()`

- `splice()` → modifies original, returns removed elements.
- `slice()` → returns shallow copy, no mutation.

---

### 10. `flat()` / `flatMap()`

- `flat(depth)` → flattens array.
- `flatMap(fn)` → map + flat(1).

---

---

## 🟩 String Methods

### 1. `split()`

Splits string into array.
⚠️ Edge Cases:

- Separator `""` → chars.
- Empty string → `[""]`.

---

### 2. `substring()` vs `slice()`

- `substring(start, end)` → swaps if start > end, negatives → 0.
- `slice(start, end)` → supports negative indices.

---

### 3. `replace()` / `replaceAll()`

⚠️ Edge Cases:

- `replace()` → only first match unless regex `/g`.
- `replaceAll()` → ES2021+.

---

### 4. `trim()`, `trimStart()`, `trimEnd()`

Removes whitespace.

---

### 5. `includes()`, `startsWith()`, `endsWith()`

Case-sensitive string checks.

---

### 6. `toUpperCase()`, `toLowerCase()`

Case conversion.

---

---

## 🟥 Object Methods

### 1. `Object.keys()` / `Object.values()` / `Object.entries()`

- Keys → array of keys.
- Values → array of values.
- Entries → array of `[key, value]`.

---

### 2. `Object.assign()`

Copies properties into target.
⚠️ Edge Cases:

- Mutates target.
- Shallow copy.

---

### 3. `Object.freeze()` vs `Object.seal()`

- `freeze()` → no add/remove/edit.
- `seal()` → no add/remove, but edit allowed.

---

### 4. `hasOwnProperty()`

Checks if key exists directly on object.

---

### 5. `JSON.stringify()` / `JSON.parse()`

⚠️ Edge Cases:

- Ignores `undefined`, functions, symbols.
- Circular refs → **TypeError**.
- Dates → ISO string.

---

---

## ⚡ Tricky Interview Questions & Gotchas

### 🔹 `map` vs `forEach`

- `map` → returns new array.
- `forEach` → returns `undefined`.

---

### 🔹 `slice` vs `splice`

- `slice` → returns copy, no mutation.
- `splice` → mutates array.

---

### 🔹 `find` vs `filter`

- `find` → first match.
- `filter` → all matches.

---

### 🔹 `some` vs `every`

- `some` → at least one true.
- `every` → all true.

---

### 🔹 `==` vs `===`

- `==` → type coercion.
- `===` → strict equality.

```js
0 == '0'; // true
0 === '0'; // false
```

---

### 🔹 `null` vs `undefined`

- `undefined` → variable declared but not assigned.
- `null` → intentional empty value.

---

### 🔹 `typeof`

```js
typeof null; // "object" (quirk)
typeof NaN; // "number"
typeof []; // "object"
Array.isArray([]); // true
```

---

### 🔹 Hoisting

- `var` → hoisted as `undefined`.
- `let`/`const` → in **Temporal Dead Zone (TDZ)**.

---

### 🔹 `this` keyword

- Depends on call-site.
- In arrow functions → lexical (outer scope).

---

### 🔹 Closures

Function + its lexical scope bundled together.

---

### 🔹 Higher-order functions

Functions that return/take other functions (`map`, `filter`, etc.).

---

### 🔹 Prototypal inheritance

Objects inherit from prototype chain.

---

### 🔹 Mutability

- Objects and arrays → reference types.
- Copy carefully (`Object.assign`, spread, structuredClone).

---

### 🔹 Event Loop (async)

- Macrotasks: setTimeout, setInterval.
- Microtasks: Promises, `process.nextTick`.

---

# ✅ Quick Table (Cheat Sheet)

| Feature                  | Key Point                                           |
| ------------------------ | --------------------------------------------------- |
| `map` vs `forEach`       | map returns new array, forEach = undefined          |
| `slice` vs `splice`      | slice = copy, splice = mutate                       |
| `find` vs `filter`       | find = first match, filter = all matches            |
| `some` vs `every`        | some = any true, every = all true                   |
| `==` vs `===`            | == loose, === strict                                |
| `null` vs `undefined`    | null = intentional empty, undefined = uninitialized |
| `typeof null`            | "object" (bug in JS)                                |
| Empty array + `reduce()` | TypeError without initialValue                      |
| Empty array + `every()`  | true (vacuous truth)                                |
| Empty array + `some()`   | false                                               |

---
