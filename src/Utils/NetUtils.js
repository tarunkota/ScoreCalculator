import { getToken } from "../Utils/TokenUtils";

export const domainUrl = "https://www.naulets.com/";
// export const domainUrl = "http://127.0.0.1:8000/";

export const fetchDataWithoutToken = (endpoint, callbacksetData) => {
  fetch(domainUrl + endpoint)
    .then((response) => response.json())
    .then((json) => {
      callbacksetData(json);
    })
    .catch((error) => console.error(error))
    .finally(() => {});
};

export const fetchData = (endpoint, callbacksetData) => {
  var token = getToken();
  fetch(domainUrl + endpoint, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      callbacksetData(json);
    })
    .catch((error) => console.error(error))
    .finally(() => {});
};

export const postDataWithoutToken = (
  endpoint,
  body,
  callbacksetData,
  errorCallback
) => {
  fetch(domainUrl + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },

    body: body,
  })
    .then((response) => response.json())
    .then((json) => {
      if (callbacksetData == null) {
        console.log(json);
      } else {
        // console.log("set data");
        callbacksetData(json);
      }
    })
    .catch((error) => {
      if (errorCallback == null) {
        console.log(error);
      } else {
        errorCallback(error);
      }
    })
    .finally(() => {});
};

export const postData = (endpoint, body, callbacksetData, errorCallback) => {
  var token = getToken();
  fetch(domainUrl + endpoint, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
    method: "POST",
    body: body,
  })
    .then((response) => response.json())
    .then((json) => {
      if (callbacksetData == null) {
        console.log(json);
      } else {
        // console.log("set data");
        callbacksetData(json);
      }
    })
    .catch((error) => {
      if (errorCallback == null) {
        console.log(error);
      } else {
        errorCallback(error);
      }
    })
    .finally(() => {});
};
