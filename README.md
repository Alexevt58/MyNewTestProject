# Day 7 — Playwright Practice

A tiny Playwright project for the Loopcamp Git & GitHub session.
The app under test is a **local HTML file** — no internet needed, so nothing fails on classroom wifi.

## Setup (once)

```bash
npm install
npx playwright install chromium
```

## Run the tests

```bash
npm test             # headless
npm run test:headed  # watch the browser do it
npm run test:ui      # interactive UI mode — best for learning
npm run report       # open the HTML report
```

## What is inside

| File | What it does |
|---|---|
| `app/index.html` | The practice app: a login form with validation |
| `tests/login.spec.js` | TC-01 … TC-05: valid login, wrong password, empty fields, bad email, logout |
| `tests/locators.spec.js` | The same input found five ways: label, placeholder, CSS, XPath, XPath axis |
| `playwright.config.js` | baseURL points at the local app; screenshot + trace on failure |
| `.gitignore` | Keeps node_modules, reports and secrets out of Git |

Login that works: any email containing `@`, password `loopcamp123`.

## Git practice with this project

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/<you>/day7-playwright-practice.git
git push -u origin main
```

Then: create a branch with your own name, change or add one test, commit, push, open a Pull Request, get it reviewed.

## Exercise ideas

1. Add TC-06: password is correct but email is empty
2. Change one assertion message and open a PR for review
3. Two students edit the **same line** of `login.spec.js` on different branches — merge one, then resolve the conflict on the other
