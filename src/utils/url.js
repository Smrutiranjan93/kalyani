// apiConfig.js

class ApiUrl {
    static API_BASE_URL = "http://62.72.31.234:2005/bivabs/yashla";

    static CONTACT_URL = `${ApiUrl.API_BASE_URL}/Contact`;

    static API_BASE_URL_SEC = "http://62.72.31.234:2009/bivabs/yashla";

    static ABOUT_OWNER_URL = `${ApiUrl.API_BASE_URL_SEC}/getAllAboutOwner`;
}

export default ApiUrl;