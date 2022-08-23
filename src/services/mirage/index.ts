import { faker } from "@faker-js/faker";
import { createServer, Factory, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  create_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return faker.name.fullName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";

      // timing aplica o delay de 750ms para o retorno dos dados
      this.timing = 1000;

      this.get("/users");
      this.post("/users");

      // reseta o namespace para o padrão do NextJS
      this.namespace = "";

      this.passthrough();
    },
  });

  return server;
}
