import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import server from "../src/server";

chai.use(chaiHttp);
// enable should in chai
chai.should();

describe("/POST book", () => {
  it("/POST book should respond with 200", (done: any) => {
    chai
      .request(server)
      .post("/book")
      .send({
        book: {
          author: "Gomzy Test 200",
          title: "node js",
          isbn: "111111111",
          releaseDate: "September 2020",
        },
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        done();
      });
  });
  it("/POST books should respond with 404", (done: any) => {
    chai
      .request(server)
      .post("/books")
      .send({})
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(404);
        done();
      });
  });
  it("/POST book should respond with expected JSON", (done: any) => {
    chai
      .request(server)
      .post("/book")
      .send({
        book: {
          author: "Gomzy Test Body",
          title: "node js",
          isbn: "111111112",
          releaseDate: "September 2020",
        },
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        // response json is hard coded as, in this case we exactly know the position
        res.body.index.should.be.eql(4);
        done();
      });
  });
});
