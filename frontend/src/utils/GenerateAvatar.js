const generateDiceBearAvataaars = (seed) =>
  `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}`;

const generateDiceBearBottts = (seed) =>
  `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

const generateDiceBearGridy = (seed) =>
  `https://avatars.dicebear.com/api/gridy/${seed}.svg`;

export const generateAvatar = () => {
  const data = [];
  const avataaars = ["Easton","Oliver","Sarah","Valentina","Eliza","Eden"]

  for (let i = 0; i < 6; i++) {
    const res = generateDiceBearAvataaars(avataaars[i]);
    data.push(res);
  }
  // for (let i = 0; i < 2; i++) {
  //   const res = generateDiceBearBottts(Math.random());
  //   data.push(res);
  // }
  // for (let i = 0; i < 2; i++) {
  //   const res = generateDiceBearGridy(Math.random());
  //   data.push(res);
  // }
  return data;
};
