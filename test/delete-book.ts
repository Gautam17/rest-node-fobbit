import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import server from "../src/server";

chai.use(chaiHttp);
// enable should in chai
chai.should();

describe("Init for delete call", () => {
  before((done) => {
    //Before each test we add book
    chai
      .request(server)
      .post("/book")
      .send({
        book: {
          author: "Gomzy Test 1",
          title: "node js",
          isbn: "111111111",
          releaseDate: "September 2020",
        },
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  describe("/DELETE book", () => {
    it("/DELETE book should respond with 200 and length should 1", (done: any) => {
      chai
        .request(server)
        .delete("/book")
        .send({
          isbn: "111111111",
        })
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.deletedBooks.should.be.a("array");
          res.body.deletedBooks.length.should.be.eql(1);
          done();
        });
    });
  });
  describe("/DELETE book", () => {
    it("/DELETE trying to delete non existent book should return 404", (done: any) => {
      chai
        .request(server)
        .delete("/book")
        .send({
          isbn: "121212121",
        })
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(404);
          done();
        });
    });
  });
});
