import { createContext, useState, useCallback, useMemo } from "react";

type User = {
  id: number;
  role: string;
  username: string;
  firstname: string;
  lastname: string;
};

type UserContextApp = {
  currentUser: User | null;
  onSwitch: (currentUser: User) => void;
  onSelect: (role: string) => void;
  onLogout: () => void;
};

const mockUsers = {
  admin: {
    id: 1,
    role: "ADMIN",
    username: "admin",
    firstname: "admin",
    lastname: "admin",
  },
  user: {
    id: 2,
    role: "USER",
    username: "john",
    firstname: "john",
    lastname: "ladhrin",
  },
};

const UserContext = createContext<UserContextApp>({
  currentUser: null,
  onSwitch: () => {},
  onSelect: () => {},
  onLogout: () => {},
});

const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(() => null);

  const onSwitch = useCallback((currentUser: any) => {
    if (currentUser.role === "ADMIN") {
      setUser(mockUsers.user);
    } else {
      setUser(mockUsers.admin);
    }
  }, []);

  const onSelect = useCallback((selectedRole: string) => {
    if (selectedRole === "ADMIN") {
      setUser(mockUsers.admin);
    }

    if (selectedRole === "USER") {
      setUser(mockUsers.user);
    }
  }, []);

  const onLogout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      currentUser: user,
      onSwitch: onSwitch,
      onSelect: onSelect,
      onLogout: onLogout,
    }),
    [user, onSwitch, onSelect, onLogout]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
