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
    if (!request.ok) return "Something went wrong";
    const parsedResponse = await request.json();
    return parsedResponse;
  } catch (err) {
    console.log(err);
  }
};
