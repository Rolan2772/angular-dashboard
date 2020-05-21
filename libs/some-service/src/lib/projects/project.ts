interface Owner {
  avatar_url: string;
}
export interface Project {
  name: string;
  description: string;
  html_url: string;
  owner: Owner;
}
