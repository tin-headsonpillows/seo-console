The system's only form control — used for the URL field in audit forms, email capture and product search.

```jsx
<TextInput label="Site URL" placeholder="https://example.com" iconLeft={<Icon name="globe" size={16} />} />
<TextInput label="Work email" error="Enter a valid email address" value={v} onChange={e => set(e.target.value)} />
```

- Focus is a border-colour change to ink — do not add a focus ring, shadow or accent border.
- Pair with a `Button variant="primary"` at the same 40px height so the row aligns.
- The source doc documents only default, focused and error; there is no success state.
