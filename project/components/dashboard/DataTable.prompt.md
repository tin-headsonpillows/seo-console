```jsx
<DataTable
  columns={[
    { field: "query", label: "Query" },
    { field: "clicks", label: "clicks", align: "right", color: "var(--db-clicks)" },
    { field: "impressions", label: "impressions", align: "right", color: "var(--db-impressions)" },
  ]}
  rows={queryRows}
  keyField="query"
  onExport={() => downloadCsv(queryRows)}
/>
```

The one table primitive behind Performance's breakdown, and Opportunities' three result tables — unlimited rows and CSV export are the point (SEO Console's answer to GSC's 1,000-row cap).
