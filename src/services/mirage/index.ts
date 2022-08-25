import { faker } from "@faker-js/faker";
import { generate } from "gerador-validador-cpf";
import { ActiveModelSerializer, createServer, Factory, Model, Response } from "miragejs";

type User = {
  name: string;
  crm: string;
  cpf: string;
  phone: string;
  email: string;
  login: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return faker.name.fullName();
        },
        crm(i: number) {
          return faker.phone.number("######/RJ");
        },
        cpf(i: number) {
          return generate({ format: true });
        },
        phone(i: number) {
          return faker.phone.number("0## 9####-####");
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        login() {
          return faker.random.alpha(10);
        },
        createdAt() {
          return faker.date.recent(30);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";

      // timing aplica o delay de 1s para o retorno dos dados
      this.timing = 1000;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user"))
          .users.sort((a, b) => a.name.localeCompare(b.name))
          .slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.post("/users");
      this.get("/users/:id");

      // reseta o namespace para o padrão do NextJS
      this.namespace = "";

      this.passthrough();
    },
  });

  return server;
}
