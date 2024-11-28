export const deleteRequest = async (obj, path = "") => {
  console.log('obj: ', obj, typeof obj);
  const postOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(obj)
  };
  try {
    const request = await fetch(`http://localhost:3000/${path}`, postOptions);
    const parsedResponse = await request.json();
    console.log("parsedResponse: ", parsedResponse);
    return { text: parsedResponse.text, status: request.status };
  } catch (err) {
    console.log(err);
  }
};
