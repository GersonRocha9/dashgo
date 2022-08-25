import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  crm: string;
  cpf: string;
  phone: string;
  email: string;
  login: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", { params: { page } });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      crm: user.crm,
      cpf: user.cpf,
      phone: user.phone,
      email: user.email,
      login: user.login,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}
