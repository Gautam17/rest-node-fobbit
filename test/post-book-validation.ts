import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import server from "../src/server";

chai.use(chaiHttp);
// enable should in chai
chai.should();

describe("/POST book validation", () => {
  it("/POST books should respond with 400: empty body", (done: any) => {
    chai
      .request(server)
      .post("/book")
      .send({ book: {} })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("array");
        done();
      });
  });
  it("/POST books should respond with 400: with releaseDate body", (done: any) => {
    chai
      .request(server)
      .post("/book")
      .send({ book: { releaseDate: "date" } })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("array");
        done();
      });
  });
  it("/POST books should respond with 400: with isbn only", (done: any) => {
    chai
      .request(server)
      .post("/book")
      .send({ book: { isbn: "123" } })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("array");
        done();
      });
  });
  it("/POST books should respond with 400: with title only", (done: any) => {
    chai
      .request(server)
      .post("/book")
      .send({ book: { title: "this is title" } })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("array");
        done();
      });
  });
  it("/POST books should respond with 400: with author only", (done: any) => {
    chai
      .request(server)
      .post("/book")
      .send({ book: { author: "gomzy" } })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("array");
        done();
      });
  });
});
