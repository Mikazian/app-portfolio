import personalInfos from "../data/personal-infos.json";

const useProfile = () => {
  const profile = personalInfos[0];

  return { profile };
};

export default useProfile;
