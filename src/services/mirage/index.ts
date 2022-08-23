import { createServer, Model } from "miragejs"

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
    routes() {
      this.namespace = "api";

      // timing aplica o delay de 750ms para o retorno dos dados
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      // reseta o namespace para o padrão do NextJS
      this.namespace = "";

      this.passthrough();
    },
  });

  return server;
}
