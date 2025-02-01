```javascript
// pages/about-page.js

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```

Renamed the file from `about.js` to `about-page.js`.  This eliminates the naming conflict with potential dynamic routes like `/about/[slug]`.