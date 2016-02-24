# nunjucks

## JSON

1. The same name JSON is loaded **BUT** it is accessible only locally.
- Ex:
- `components/header/header.html.swig` has access **ONLY** to `header.json`
- `components/logo/logo.html.swig` has access **ONLY** to `logo.json`
- `page.html.swig` has access **ONLY** to `page.json`

2. Parent JSON is accessible to descendants **ONLY** on its own level
- `page.json` is available for **ALL** `components` but is visible **ONLY** in `page.html`. If you check `header.html` the data from `page.json` will be empty


## Including other files and templates

- always use absolute paths like `components/header/header.html.swig`
