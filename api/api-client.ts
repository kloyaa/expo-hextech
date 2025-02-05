// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// // Define base URL and any common headers/configuration
// const apiClient: AxiosInstance = axios.create({
//     baseURL: 'https://api.example.com/v1', // Your base API URL
//     timeout: 10000, // Request timeout
//     headers: {
//         'Content-Type': 'application/json',
//         // Add any common headers like authorization if needed.  Consider using interceptors for dynamic tokens.
//     },
// });

// // Request Interceptors (for things like Authentication)
// apiClient.interceptors.request.use(
//     (config: AxiosRequestConfig) => {
//         // Example: Add token to header if available
//         const token = localStorage.getItem('token'); // Or from AsyncStorage in React Native
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error); // Handle request errors
//     }
// );


// // Response Interceptors (for centralized error handling, data transformation)
// apiClient.interceptors.response.use(
//     (response: AxiosResponse) => {
//         // Example: Transform data if needed (e.g., unwrapping nested data)
//         // if (response.data && response.data.result) {
//         //   response.data = response.data.result; 
//         // }
//         return response;
//     },
//     (error) => {
//         // Centralized error handling
//         console.error("API Error:", error);

//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.error("Response Data:", error.response.data);
//             console.error("Response Status:", error.response.status);
//             console.error("Response Headers:", error.response.headers);

//             // Example:  Return a more user-friendly error message
//             if (error.response.status === 401) {
//                 return Promise.reject(new Error("Unauthorized. Please login."));
//             } else if (error.response.status === 404) {
//                 return Promise.reject(new Error("Resource not found."));
//             } else {
//                 return Promise.reject(new Error("An error occurred. Please try again later."));
//             }


//         } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//             // http.ClientRequest in node.js
//             console.error("Request:", error.request);
//             return Promise.reject(new Error("No response received. Check your network connection."));

//         } else {
//             // Something happened in setting up the request that triggered an Error
//             console.error("Error message:", error.message);
//             return Promise.reject(new Error("Request setup error."));
//         }
//     }
// );


// export default apiClient;