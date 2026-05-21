export interface CreatorWorkspaceOverview {
  workspaceId: string;
  workspaceName: string;
  activeCreators: number;
  activeProjects: number;
  recentActivity: string[];
}

export interface CreatorOnboardingState {
  userId: string;
  completedSteps: string[];
  currentStep: string;
  onboardingComplete: boolean;
}

export interface CreatorFeedExperienceItem {
  id: string;
  author: string;
  workspace: string;
  contentPreview: string;
  semanticTags: string[];
  createdAt: string;
}

export function createDefaultOnboardingState(
  userId: string
): CreatorOnboardingState {
  return {
    userId,
    completedSteps: [],
    currentStep: "welcome",
    onboardingComplete: false,
  };
}
