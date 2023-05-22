import apiClient from ".";

export async function getData() {
  try {
    const response = await apiClient.get(
      "https://61cac9cd194ffe0017788938.mockapi.io/test"
    );

    return {
      data: response.data,
      error: null,
    };
  } catch (e) {
    return {
      data: null,
      error: e,
    };
  }
}
