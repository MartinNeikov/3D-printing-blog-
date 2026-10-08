import { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext.js";

import {
  getSession,
  loginUser,
  logoutUser,
  onAuthStateChange,
  registerUser,
} from "../services/authService.js";

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const user = session?.user ?? null;
  const isAuthenticated = Boolean(user);

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      try {
        const currentSession = await getSession();

        if (isMounted) {
          setSession(currentSession);
        }
      } catch (error) {
        console.error("Failed to restore session:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadSession();

    const subscription = onAuthStateChange((nextSession) => {
      if (isMounted) {
        setSession(nextSession);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function register(name, email, password) {
    const data = await registerUser(name, email, password);

    setSession(data.session ?? null);

    return data;
  }

  async function login(email, password) {
    const data = await loginUser(email, password);

    setSession(data.session);

    return data;
  }

  async function logout() {
    await logoutUser();

    setSession(null);
  }

  const contextValue = {
    user,
    session,
    isLoading,
    isAuthenticated,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}