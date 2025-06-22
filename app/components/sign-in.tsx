import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("keycloak");
      }}
    >
      <button
        type="submit"
        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Sign-In
      </button>
    </form>
  );
}
