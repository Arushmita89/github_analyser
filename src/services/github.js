import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchRepoData(owner, repo) {
  const { data } = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`);
  return data;
}

export async function fetchCommits(owner, repo) {
  const { data } = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/commits?per_page=30`);
  return data;
}

export async function fetchLanguages(owner, repo) {
  const { data } = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/languages`);
  return data;
}
