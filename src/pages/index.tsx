import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ToUserList() {
  const route = useRouter();

  useEffect(() => {
    route.push("/users");
  }, []);

  return null;
}
