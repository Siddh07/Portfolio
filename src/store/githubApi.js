import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const GITHUB_USERNAME = "Siddh07";

export const githubApi = createApi({
  reducerPath: "githubApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),

  keepUnusedDataFor: 600,
  refetchOnMountOrArgChange: 600,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (limit = 6) => ({
        url: `/users/${GITHUB_USERNAME}/repos`,
        params: {
          per_page: limit,
          type: "owner",
          sort: "updated",
        },
      }),

      transformResponse: (response) => {
        return response.map((repo) => ({
          title: repo.name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),

          category: repo.language || "Web Application",

          description: repo.description || "No description provided",

          demo: repo.homepage || repo.html_url,

          repo: repo.html_url,

          tech: [repo.language, "GitHub"].filter(Boolean),

          stars: repo.stargazers_count,
          forks: repo.forks_count,

          updated: new Date(repo.updated_at).toLocaleDateString(),
        }));
      },
    }),
  }),
});

export const { useGetReposQuery } = githubApi;
