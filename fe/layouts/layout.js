import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();

  const logout = async () => {
    await fetch("http://localhost:3001/api/logout", {
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
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link active">Login</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/register">
            <a className="nav-link active">Register</a>
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a href="/" className="nav-link active" onClick={logout}>
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
          crossOrigin="anonymous"
        />
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">MASSYVE</a>
            </Link>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link href="/login">
                    <a className="nav-link active">Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/register">
                    <a className="nav-link active">Register</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Head>
      <div className="headerlogo">
        <Image src="/assests/massyve.png" alt="Massyve Logo" height="400" width="400" />
      </div>
      <main className="form-signin w-100 m-auto">{props.children}</main>
    </>
  );
};

export default Layout;
