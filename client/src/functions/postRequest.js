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
    console.log("parsedResponse: ", parsedResponse);
    return { text: parsedResponse.text, status: request.status, id: parsedResponse.id };
  } catch (err) {
    console.log(err);
    return { status: 450, text: "Fetch error" };
  }
};
