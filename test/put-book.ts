import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import server from "../src/server";

chai.use(chaiHttp);
// enable should in chai
chai.should();

describe("/PUT book", () => {
  it("/PUT book should respond with 200", (done: any) => {
    const newBook = {
      author: "Gomzy Test 200",
      title: "node js",
      isbn: "987654321",
      releaseDate: "September 2020",
    };
    chai
      .request(server)
      .put("/book")
      .send({
        where: {
          isbn: "987654321",
        },
        book: newBook,
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        done();
      });
  });

  it("/PUT book should return updated book", (done: any) => {
    const newBook = {
      author: "Gomzy Test 200",
      title: "node js",
      isbn: "987654321",
      releaseDate: "September 2020",
    };
    chai
      .request(server)
      .put("/book")
      .send({
        where: {
          isbn: "987654321",
        },
        book: newBook,
      })
      .end((err, res) => {
        console.log(res.body);
        res.body.should.be.a("object");
        res.body.should.have.property("updatedBook");
        res.body.updatedBook.should.have.property("author");
        res.body.updatedBook.author.should.be.eql(newBook.author);
        done();
      });
  });
  it("/PUT trying to update non existent book should return 404", (done: any) => {
    const newBook = {
      author: "Gomzy Test 200",
      title: "node js",
      isbn: "987654321",
      releaseDate: "September 2020",
    };
    chai
      .request(server)
      .put("/book")
      .send({
        where: {
          isbn: "12121212",
        },
        book: newBook,
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(404);
        done();
      });
  });
});
