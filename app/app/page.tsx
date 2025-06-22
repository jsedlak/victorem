import Image from "next/image";
import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import Weather from "@/components/weather";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1>Victorem</h1>
      {session ? <SignOut /> : <SignIn />}
      {session?.user && (
        <div>
          <p>Signed in as {session.user.email}</p>
          {session.user.image && (
            <Image
              src={session.user.image}
              alt="User Avatar"
              width={50}
              height={50}
            />
          )}
          <pre>{session.accessToken}</pre>
          <Weather />
        </div>
      )}
    </div>
  );
}
