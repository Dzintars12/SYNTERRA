export interface NavigationItem {
  id: string;
  label: string;
  route: string;
}

export interface WorkspaceCard {
  id: string;
  title: string;
  description: string;
  activeUsers: number;
  language: string;
}

export interface CreatorFeedItem {
  id: string;
  author: string;
  content: string;
  language: string;
  createdAt: string;
}

export interface SocialPlatformShell {
  navigation: NavigationItem[];
  workspaces: WorkspaceCard[];
  creatorFeed: CreatorFeedItem[];
}

export function createDefaultSocialPlatformShell(): SocialPlatformShell {
  return {
    navigation: [
      {
        id: "dashboard",
        label: "Dashboard",
        route: "/dashboard",
      },
      {
        id: "workspaces",
        label: "Workspaces",
        route: "/workspaces",
      },
      {
        id: "projects",
        label: "Projects",
        route: "/projects",
      },
      {
        id: "feed",
        label: "Creator Feed",
        route: "/feed",
      },
      {
        id: "memory",
        label: "Civilization Memory",
        route: "/memory",
      },
    ],
    workspaces: [],
    creatorFeed: [],
  };
}
