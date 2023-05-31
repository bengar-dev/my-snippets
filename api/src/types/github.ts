export type GithubProfileUser = {
  id: string;
  displayName?: string;
  username?: string;
  profileUrl?: string;
  photos?: { value: string }[];
};
