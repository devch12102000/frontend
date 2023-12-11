const createBaseUrl = () => {
    if (window.location.host === "admin.hexaviewtech.com") {
        return `https://www.hexaviewtech.com/`;
    } else if (window.location.host === "stage-admin.hexaview.in") {
        return `https://stage.hexaview.in/`;
    } else {
        return `https://qa.hexaview.in/`;
    }
}

export default createBaseUrl;

