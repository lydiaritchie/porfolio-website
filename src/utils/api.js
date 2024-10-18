/**
* Defines the the base URl for the API.
* The default values is overridden by the `API_BASE_URL` environment variable.
 */

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

  /**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
        return null;
      }
  
      const payload = await response.json();
  
      if (payload.error) {
        return Promise.reject({ status: response.status, message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }

  
  /**
   * Sends a POST request to /brew
   */
  export async function brew(objectString){
    const url = new URL(`${API_BASE_URL}/brew`);
    const options ={
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
        body:JSON.stringify({ data: objectString }),
    }
    return await fetchJson(url, options);
  }