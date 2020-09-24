export const getPoetry = () => {
  // TODO feedback:可以把url抽出来
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .then((data) => {
      return [data.origin, data.author, data.content];
    })
    .catch((err) => console.log(err));
};
