import Layout from "../layouts/layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3001/api/user", {
          credentials: "include",
        });

        const content = await response.json();
        console.log(content.response);

        setMessage(
          `Be Welcomed ♥♪♫ ${content.name} reminder!! l name ma 3am yeje ♥♪♫`
        );
        setAuth(true);
      } catch (e) {
        setMessage("You are not logged in");
        setAuth(false);
      }
    })();
  });

  return <Layout auth={auth}>{message}</Layout>;
}
