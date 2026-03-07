# The Missing Midwest

**Live site:** https://smlfberry.github.io/final-project-Smlfberry

A data visualization project exploring voter turnout inequality across five Midwest states, with a deep dive into Wisconsin's county-level patterns by income and education.

## Research Question

Who doesn't vote in the Midwest — and what do those communities have in common? This project examines county-level voter turnout patterns in Wisconsin, exploring how income and education predict participation gaps, and what that means for political representation.

## Site Structure

| File | Page |
|------|------|
| `index.html` | Landing page — overview charts for all 5 states |
| `income.html` | Scrollytelling — Wisconsin turnout × income |
| `education.html` | Scrollytelling — Wisconsin turnout × education |
| `findings.html` | Combined findings + takeaways |
| `css/style.css` | All styles (edit colors in `:root` at the top) |
| `js/main.js` | Scrollytelling logic + scatter dot generation |

## Data Sources

- **CCES** (Cooperative Congressional Election Study)
- **MIT Election Data and Science Lab** — county-level election returns
- **U.S. Census Bureau / ACS** — county demographics (income, education)

## Deploying to GitHub Pages

1. Make sure all files are pushed to the `main` branch
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Site will be live at `https://smlfberry.github.io/final-project-Smlfberry`

## Replacing Placeholder Charts

Each placeholder in the HTML is marked with a comment like:
```html
<!-- EDIT: replace with your Plotly chart -->
<!-- TO REPLACE: add <div id="your-chart-id"></div> and call Plotly.newPlot(...) -->
```

To swap in a real Plotly chart:
1. Add `<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>` to the `<head>`
2. Replace the placeholder div with `<div id="my-chart" style="width:100%;height:100%"></div>`
3. Add a `<script>` block after the div calling `Plotly.newPlot('my-chart', data, layout)`

## Editing Text

All text is editable directly on GitHub:
1. Click any `.html` file in the repo
2. Click the pencil ✏️ icon (top right)
3. Find text marked with `<!-- EDIT: ... -->` comments
4. Make your changes and click **Commit changes**

## Changing Colors or Fonts

Open `css/style.css`. The very top of the file has a `:root { }` block — change any hex value there and it updates everywhere on the site.
