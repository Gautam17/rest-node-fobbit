import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import server from "../src/server";

chai.use(chaiHttp);
// enable should in chai
chai.should();

describe("/GET 404", () => {
  it("it should return 404 as http status code", (done: any) => {
    chai
      .request(server)
      .get("/invalid-route")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
