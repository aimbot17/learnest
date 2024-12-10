import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const getUser = async () => {
  // Define a compatible cookies method
  const cookieMethods = {
    get: async (name: string) => (await cookies()).get(name)?.value || null,
    set: async () => {
      throw new Error("Not implemented");
    },
    delete: async () => {
      throw new Error("Not implemented");
    },
  };

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: cookieMethods }
  );

  const { data: { user } = {} } = await supabase.auth.getUser();
  return user;
};
