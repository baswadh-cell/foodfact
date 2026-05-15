## What I built
A fully functional React + Vite food nutrition search app with real-time API integration to Open Food Facts. Users can search for any food item and see nutrition information displayed as beautiful cards.

## Concepts learned
- JSX — HTML-like syntax inside JavaScript
- Functional Components — JavaScript functions that return JSX
- Props — Data passed from parent to child components
- useState — React Hook for state management
- useEffect — React Hook for side effects
- Event Handling — Responding to user actions
- Controlled Inputs — Form inputs driven by React state
- List Rendering — Using .map() to render arrays
- Fetch API — Native browser HTTP requests

## How to run
```bash
npm install
npm run dev
```
Then open http://localhost:5173 in your browser.

## Features
- ✅ Search bar with controlled input
- ✅ Real-time API calls to Open Food Facts
- ✅ Food cards displaying product info and nutrition
- ✅ Loading state during API requests
- ✅ Empty state before search
- ✅ No-results state
- ✅ Multi-word search support with URL encoding
- ✅ Responsive, professional CSS styling

## What I found challenging
The most challenging part was understanding how to properly handle async/await with try/catch/finally in React, and making sure to filter out incomplete product data from the API before displaying it. Also, remembering to use URL encoding for multi-word searches was important.

## Questions for review
None at this time!
