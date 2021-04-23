import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { Grid } from "@chakra-ui/react";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid as="nav">
        {!session && (
          <>
            Not signed in <br />
            <button data-cy="signIn" onClick={() => signIn()}>
              Sign in
            </button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.name} <br />
            <button data-cy="signOut" onClick={() => signOut()}>
              Sign out
            </button>
          </>
        )}
      </Grid>

      <Grid as="main">
        <h1>Welcome!</h1>
      </Grid>

      <footer>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Home
        </a>
      </footer>
    </>
  );
}
