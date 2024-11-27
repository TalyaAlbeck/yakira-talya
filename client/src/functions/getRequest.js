export async function getRequest(path = "") {
  try {
    const request = await fetch(`http://localhost:3000/${path}`);
    const parsedResponse = await request.json();
    console.log("parsedResponse: ", parsedResponse);
    return { text: parsedResponse.text, status: request.status };
  } catch (err) {
    console.log(err);
  }
}

// try {
//   const response = await fetch(`http://localhost:3000/${path}`);
//   if (!response.ok) throw Error("Did not receive expected data");
//   const data = await response.json();
//   if (data.length === 0) setError(`You have no ${sectionType}`);
//   else {
//     setSection(data);
//     setError(null);
//   }
// } catch (err) {
//   setError(err.message);
// }
