const config = {
    // BASE_API_URLS: "http://localhost:5123/",
    BASE_API_URLS: "https://api.qa-admin.hexaview.in/",
    TIMEOUT: 300000, // 5 minutes = 60x5x1000 = 300000

  };

  if(window.location.host === "qa-admin.hexaview.in"){
    config.BASE_API_URLS ="https://api.qa-admin.hexaview.in/"
  }else if(window.location.host === "stage-admin.hexaview.in"){
    config.BASE_API_URLS ="https://api.stage-admin.hexaview.in/"
  }else if(window.location.host === "admin.hexaviewtech.com"){
    config.BASE_API_URLS ="https://api-admin.hexaviewtech.com/"
  }
  export default config;