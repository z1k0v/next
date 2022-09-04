// import React from "react";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/layout";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();

    await fetch(
      "https://whispering-headland-64788.herokuapp.com/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    await router.push("/login");
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 class="h3 mb-3 fw-normal">Please register</h1>

        <div class="form-floating">
          <input
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-floating">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-floating">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          //  class="w-100 btn btn-lg btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Register;
