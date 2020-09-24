export const APIDoc = {
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
};
