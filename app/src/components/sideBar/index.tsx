"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "@/hooks";
import { Icons } from "@/components";
import { map } from "lodash";

const getSideBarMenuActions = (currentUser: any, sideBarMenu: any) => {
  switch (currentUser?.role) {
    case "ADMIN":
      return sideBarMenu?.admin;
    case "USER":
      return sideBarMenu?.user;
    default:
      return sideBarMenu?.default;
  }
};

export function SideBar() {
  const router = useRouter();
  const { currentUser, onSelect, onSwitch, onLogout } = useContext(UserContext);

  const goTo = (route: string) => {
    router.push(route);
  };

  const onSwitchUser = () => {
    if (!currentUser) return;

    onSwitch(currentUser);

    if (currentUser.role === "ADMIN") {
      router.push("/user");
    } else {
      router.push("/admin");
    }
  };

  const onSelectRole = (role: string) => {
    onSelect(role);
  };

  const defaultSideBarActions = [
    {
      id: "default-1",
      title: "Select Admin",
      icon: "refresh",
      onClick: () => {
        onSelectRole("ADMIN");
        goTo("/admin");
      },
    },
    {
      id: "default-2",
      title: "Select User",
      icon: "refresh",
      onClick: () => {
        onSelectRole("USER");
        goTo("/user");
      },
    },
    {
      id: "default-3",
      title: "Log out",
      icon: "logout",
      onClick: () => {
        goTo("/");
        onLogout();
      },
    },
  ];

  const adminSideBarActions = [
    {
      id: "admin-1",
      title: "Home",
      icon: "home",
      onClick: () => {
        goTo("/admin");
      },
    },
    {
      id: "admin-2",
      title: "History",
      icon: "inbox",
      onClick: () => {
        goTo("/admin/history");
      },
    },
    {
      id: "admin-3",
      title: "Switch to user",
      icon: "refresh",
      onClick: () => {
        onSwitchUser();
      },
    },
    {
      id: "admin-4",
      title: "Log out",
      icon: "logout",
      onClick: () => {
        goTo("/");
        onLogout();
      },
    },
  ];

  const userSideBarActions = [
    {
      id: "user-1",
      title: "Home",
      icon: "home",
      onClick: () => {
        goTo("/user");
      },
    },
    {
      id: "user-2",
      title: "History",
      icon: "inbox",
      onClick: () => {
        goTo("/user/history");
      },
    },
    {
      id: "user-3",
      icon: "refresh",
      title: "Switch to admin",
      onClick: () => {
        onSwitchUser();
      },
    },
    {
      id: "user-4",
      title: "Log out",
      icon: "logout",
      onClick: () => {
        goTo("/");
        onLogout();
      },
    },
  ];

  const sideBarMenu = {
    default: defaultSideBarActions,
    admin: adminSideBarActions,
    user: userSideBarActions,
  };

  const sideBarMenuAction = getSideBarMenuActions(currentUser, sideBarMenu);

  const SideBarTitle = currentUser ? currentUser.role.toUpperCase() : null;

  return (
    <div className="flex flex-col justify-between h-full md:flex-row">
      <div className="flex flex-col md:w-full md:flex-row md:justify-around">
        {SideBarTitle && (
          <div className="text-4xl my-8 p-2 font-bold overflow-hidden md:hidden">
            {SideBarTitle}
          </div>
        )}
        {map(sideBarMenuAction, (action) => {
          return (
            <div
              key={action?.id}
              className="flex items-center hover:bg-blue-100 h-[64px] md:mx-2"
              onClick={() => action?.onClick()}
            >
              <span className="pr-2">
                {action?.icon && <Icons i={action?.icon} />}
              </span>
              {action?.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
