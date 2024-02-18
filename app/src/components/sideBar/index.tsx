"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "@/hooks";
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
      onClick: () => {
        onSelectRole("ADMIN");
        goTo("/admin");
      },
    },
    {
      id: "default-2",
      title: "Select User",
      onClick: () => {
        onSelectRole("USER");
        goTo("/user");
      },
    },
  ];

  const adminSideBarActions = [
    {
      id: "admin-1",
      title: "Home",
      onClick: () => {
        goTo("/admin");
      },
    },
    {
      id: "admin-2",
      title: "History",
      onClick: () => {
        goTo("/admin/history");
      },
    },
    {
      id: "admin-3",
      title: "Switch to user",
      onClick: () => {
        onSwitchUser();
      },
    },
  ];

  const userSideBarActions = [
    {
      id: "user-1",
      title: "Home",
      onClick: () => {
        goTo("/user");
      },
    },
    {
      id: "user-2",
      title: "History",
      onClick: () => {
        goTo("/user/history");
      },
    },
    {
      id: "user-3",
      title: "Switch to admin",
      onClick: () => {
        onSwitchUser();
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
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col">
        {SideBarTitle && <div className="">{SideBarTitle}</div>}
        {map(sideBarMenuAction, (action) => {
          return (
            <div
              key={action?.id}
              className=""
              onClick={() => action?.onClick()}
            >
              <FontAwesomeIcon icon={faHome} />
              {action?.title}
            </div>
          );
        })}
      </div>
      <div className="flex">
        <div
          className=""
          onClick={() => {
            goTo("/");
            onLogout();
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
