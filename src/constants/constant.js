const prod = {
    url: {
     API_URL: "https://myapp.herokuapp.com/api",
   }}

   const dev = {
    url: {
     API_URL: "http://localhost:8080/api"
    }
   };
    const config = process.env.REACT_APP_STAGE === "dev" ? dev : prod;
    export default config;