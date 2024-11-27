export const postRequest = async (obj, path = "") => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(obj),
  };
  try {
    const request = await fetch(`http://localhost:3000/${path}`, postOptions);
    const parsedResponse = await request.json();
    return { text: parsedResponse.text, status: request.status };
  } catch (err) {
    console.log(err);
  }
};
