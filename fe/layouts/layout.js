import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();

  const logout = async () => {
    await fetch("https://whispering-headland-64788.herokuapp.com/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    // reminder logout not working!
    await router.push("/login");
  };

  let menu;

  if (!props.auth) {
    menu = (
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <Link href="/login">
            <a class="nav-link active">Login</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link href="/register">
            <a class="nav-link active">Register</a>
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a href="/" class="nav-link active" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    );
  }
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div class="container-fluid">
            <Link href="/">
              <a class="navbar-brand">MASSYVE</a>
            </Link>
            <div>
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <Link href="/login">
                    <a class="nav-link active">Login</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/register">
                    <a class="nav-link active">Register</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Head>
      <div class="headerlogo">
        <Image
          src="/assests/massyve.png"
          alt="Massyve Logo"
          height="400"
          width="400"
        />
      </div>
      <main class="form-signin w-100 m-auto">{props.children}</main>
    </>
  );
};

export default Layout;
