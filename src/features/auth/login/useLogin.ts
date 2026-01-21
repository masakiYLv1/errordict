import { supabase } from "@/lib/supabaseClient";

export const useLogin = () => {
  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  };

  return { login };
};
