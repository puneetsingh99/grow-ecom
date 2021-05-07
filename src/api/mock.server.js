import { createServer, Model } from "miragejs";
import faker from "faker";

export const setupMockServer = () => {
  createServer({
    // creating models
    models: {
      product: Model
    },

    // create seed: storing default data to be responded with on get call;
    seeds(server) {
      [...Array(16)].forEach((_) => {
        server.create("product", {
          id: faker.datatype.uuid(),
          image: faker.random.image(),
          title: faker.random.words(3),
          author: faker.name.findName(),
          mrp: faker.datatype.number({ min: 100, max: 10000 }),
          offerPercentage: faker.datatype.number({ min: 0, max: 90 }),
          inCart: false,
          inWishList: false,
          productType: faker.random.arrayElement(["Courses", "Books"]),
          fastDelivery: faker.datatype.boolean(),
          inStock: faker.datatype.boolean(),
          category: faker.random.arrayElement([
            "Investing",
            "Trading",
            "Futures and Options",
            "Commodities"
          ]),
          level: faker.random.arrayElement([
            "Beginner",
            "Intermediate",
            "Advanced"
          ]),
          rating: faker.random.arrayElement([1, 2, 3, 4, 5])
        });
      });
    },

    routes() {
      // this.passthrough("https://api.exchangerate.host/latest?base=INR/**");

      // namespace
      this.namespace = "api";

      // setting response time
      this.timing = 3000;

      // get request
      this.get("/products", (schema) => schema.products.all());

      //post request: No need to setup post request as of now
      this.post("/products", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = faker.random.uuid();
        return schema.products.create(attrs);
      });
    }
  });
};
