export const patchRequest = async (obj, path = "") => {
    const patchOption = {
        method: "PATCH",
        headers: {
            "Content-Type": `application/json`,
        },
        body: JSON.stringify(obj),
    };
    try {
        const request = await fetch(`http://localhost:3000/${path}`, patchOption);
        const parsedResponse = await request.json();
        console.log("parsedResponse: ", parsedResponse);
        return { text: parsedResponse.text, status: request.status };
    } catch (err) {
        console.log(err);
        return { status: 450, text: "Fetch error" };
    }
};