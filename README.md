# Versions

- Node.js: v12.13.1
- TypeScript: v4.x
- yarn: v1.12.1

## Commands

1. yarn start
2. yarn test
3. yarn coverage | yarn coverage-html | yarn coverage-ci

## APIDoc

```javascript
{
  APIDoc: {
    "/": {
      GET: {
        desc: "API Documentation",
      },
    },
    "/book": {
      GET: {
        desc: "Search Book by 'title', 'author' and 'isbn' number",
        addedValidation: false,
        sample: [{ path: "/book?author=gomzy" }],
      },
      POST: {
        desc: "Add Book",
        addedValidation: true,
        sample: [
          {
            path: "/book",
            body: {
              book: {
                author: "Gomzy Test Body",
                title: "node js",
                isbn: "111111112",
                releaseDate: "September 2020",
              },
            },
          },
        ],
      },
      PUT: {
        desc: "Update Book by isbn",
        addedValidation: false,
        sample: [
          {
            path: "/book",
            body: {
              where: {
                isbn: "12121212",
              },
              book: {
                author: "Gomzy Test Body",
                title: "node js",
                isbn: "111111112",
                releaseDate: "September 2020",
              },
            },
          },
        ],
      },
      DELETE: {
        desc: "Delete Book by isbn",
        addedValidation: false,
        sample: [
          {
            path: "/book",
            body: {
              isbn: "111111111",
            },
          },
        ],
      },
    },
  },
}
```

## TODO

1. Validation
2. API doc
3. CI-CD
4. Actual DB

Author(s)

- Gautam Vanani
