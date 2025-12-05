import axios from "axios";

export const handler = async (event) => {
  try {
    const backendUrl = process.env.BACKEND_URL;
    const apiKey = process.env.API_KEY;

    const response = await axios.post(
      backendUrl + "/simulate",
      JSON.parse(event.body),
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };

  } catch (err) {
    return {
      statusCode: err.response?.status || 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};