import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import server from "../src/server";

chai.use(chaiHttp);
// enable should in chai
chai.should();
/*
 * Test the /GET route
 */
describe("/GET book", () => {
  it("it should GET all the books", (done: any) => {
    chai
      .request(server)
      .get("/book")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(2);
        done();
      });
  });
  it("it should GET book with author name 'Gomzy'", (done: any) => {
    chai
      .request(server)
      .get("/book?author=gomzy")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(1);
        done();
      });
  });
  it("it should GET book with author name 'Gomzy'", (done: any) => {
    chai
      .request(server)
      .get("/book?author=gomzy")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(1);
        done();
      });
  });
  it("it should GET book with title 'Fobbit'", (done: any) => {
    chai
      .request(server)
      .get("/book?title=Fobbit")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(1);
        done();
      });
  });
  it("it should GET book with isbn # '1846557216'", (done: any) => {
    chai
      .request(server)
      .get("/book?isbn=1846557216")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(1);
        done();
      });
  });
  it("it should GET books with author name 'Gomzy' and isbn # '1846557216'", (done: any) => {
    chai
      .request(server)
      .get("/book?isbn=1846557216&&author=Gomzy")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(2);
        done();
      });
  });
});
