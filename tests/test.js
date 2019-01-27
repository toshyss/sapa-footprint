const { setupExpressServer } = require("../src/server");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const app = setupExpressServer();

describe("The express server", () => {
    let request;
    beforeEach(() => {
      request = chai.request(app);
    });

    describe("GET / - returning text", () => {
        it("should return the text Hello!", async () => {
            const res = await request.get("/");
            res.text.should.equal("Hello!");
        });
    });
});
