import axios from "axios";

export async function getAIInsights(repoData, commits, languages) {
  const { data } = await axios.post("http://localhost:5000/analyze", {
    repoData,
    commits,
    languages,
  });
  return data;
}
