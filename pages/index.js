import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </nav>

      <main>
        <h1>Welcome!</h1>
      </main>

      <footer>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Home
        </a>
      </footer>
    </div>
  );
}
