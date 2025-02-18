# When to Use Union Types in React Projects

In React (or any TypeScript project), **union types** are useful when a variable, prop, or state can have multiple allowed types. Here are some key use cases where you should consider using union types:

## 1. Handling Multiple String or Number Values

If a prop or function parameter can have a limited set of string or number values, a union type helps enforce type safety.

```tsx
type ButtonVariant = "primary" | "secondary" | "danger";

const Button: React.FC<{ variant: ButtonVariant }> = ({ variant }) => {
  return <button className={`btn-${variant}`}>{variant}</button>;
};
```

**When to use?**

- When you have a set of predefined values (e.g., status, button styles, themes).
- Helps prevent typos and ensures only valid values are passed.

---

## 2. Flexible Component Props

When a component can accept different types for a prop.

```tsx
type AlertProps =
  | {
      message: string;
      status: "success" | "error" | "warning";
    }
  | {
      message: string;
      code: number;
    };

const Alert: React.FC<AlertProps> = (props) => {
  if ("status" in props) {
    return <div className={`alert-${props.status}`}>{props.message}</div>;
  } else {
    return (
      <div>
        Error Code {props.code}: {props.message}
      </div>
    );
  }
};
```

**When to use?**

- When different props define different behaviors.
- Enforces strict type checking while allowing flexibility.

---

## 3. State with Multiple Possible Shapes

```tsx
type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; error: string };

const [fetchState, setFetchState] = React.useState<FetchState>({
  status: "idle",
});

if (fetchState.status === "success") {
  console.log(fetchState.data); // TypeScript knows 'data' exists here.
}
```

**When to use?**

- When managing different states in a component (e.g., API calls).
- Prevents invalid states (e.g., `data` existing in an error state).

---

## 4. Event Handlers with Different Event Types

```tsx
const handleEvent = (event: MouseEvent | KeyboardEvent) => {
  if ("key" in event) {
    console.log("Keyboard event:", event.key);
  } else {
    console.log("Mouse event:", event.clientX, event.clientY);
  }
};
```

**When to use?**

- When a function can handle different event types.
- Ensures type-safe property access.

---

## When NOT to Use Union Types

- **Too many variations:** If the number of possible combinations is large, consider using a more structured approach like interfaces with optional properties.
- **Overcomplicating simple types:** If a variable is either `string` or `number` without specific constraints, try to simplify the logic.
