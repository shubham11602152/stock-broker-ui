// Helper function to simulate API calls with a delay
const mockApiCall = (data, status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status >= 200 && status < 300) {
        resolve({ status, data });
      } else {
        reject({ status, data });
      }
    }, 1000);
  });
};

export { mockApiCall };
