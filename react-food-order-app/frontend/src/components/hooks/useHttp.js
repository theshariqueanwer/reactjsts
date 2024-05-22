import { useCallback, useEffect, useState } from "react";

// async function sendHttpRequest(url, configurationObject) {
async function sendHttpRequest(url, configurationObject) {
  const response = await fetch(url, configurationObject);

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      responseData.message || "something went wrong failed to send the request."
    );
  }

  return responseData;
}

// export default function useHttp(url and configurationObject both are in same request object as like configObject which includes url and configurationObject) {
export default function useHttp(url, configObject, initialData) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialData);

  function clearData() {
    setData(initialData);
    // setError(null);
    // setLoading(false);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setLoading(true);
      try {
        const responseData = await sendHttpRequest(url, {
          ...configObject,
          body: data,
        });
        setData(responseData);
      } catch (error) {
        setError(error.message || "something went wrong");
      }
      setLoading(false);
    },
    [url, configObject]
  );

  useEffect(() => {
    if (
      (configObject &&
        (configObject.method === "GET" || !configObject.method)) ||
      !configObject
    ) {
      sendRequest();
    }
  }, [sendRequest, configObject]);

  return {
    loading,
    error,
    data,
    sendRequest,
    clearData,
    // sendRequest,
  };
}

// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState();
// const [errorMessage, setErrorMessage] = useState();
// const [errorData, setErrorData] = useState();
// const [errorInfo, setErrorInfo] = useState();
// const [errorId, setErrorId] = useState();
// const [requestStatus, setRequestStatus] = useState();
// const [status, setStatus] = useState();
// const [request, setRequest] = useState();
// const [success, setSuccess] = useState();
// const [method, setMethod] = useState();
// const [url, setUrl] = useState();
// const [body, setBody] = useState();
// const [headers, setHeaders] = useState();
// const [init, setInit] = useState();
// const [response, setResponse] = useState();
// const [responseData, setResponseData] = useState();
