const URL = import.meta.env.VITE_API_URL;

const SkillLoader = async () => {
  try {
    const response = await fetch(`${URL}/skill/`, {
      method: "GET",
      credentials: "include",
    });

    if (response.status !== 200) {
      return new Error("Failed to fetch profile data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return console.error("Fetch profile error:", err);
  }
};

export default SkillLoader;
