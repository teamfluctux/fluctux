interface GithubListType {
  name: string;
  path: string;
  type: string;
}

export const docNavTreeListResolver = async (
  path: string
): Promise<GithubListType[]> => {
  const response = await fetch(
    // Actual URL format: "https://api.github.com/repos/team-fluctux/docs/contents/user/01-get-started/01-introduction.mdx"
    // incoming request: "01-get-started/01-introduction.mdx"
    `${process.env.GH_AUTH_DOC_API}/${path?.split("/")[0]}/${path?.split("/")[1]}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.length
    ? data.map((item: GithubListType) => ({
        name: item.name,
        path: item.path,
        type: item.type,
      }))
    : [];
};

export const docNavListResolver = async (
  docType: string
): Promise<GithubListType[]> => {
  const response = await fetch(
    // Actual URL format: "https://api.github.com/repos/team-fluctux/docs/contents/user"
    `${process.env.GH_AUTH_DOC_API}/${docType}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.length
    ? data.map((item: GithubListType) => ({
        name: item.name,
        path: item.path,
        type: item.type,
      }))
    : [];
};
