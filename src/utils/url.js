// apiConfig.js

class ApiUrl {
    static API_BASE_URL = "http://62.72.31.234:2009/bivabs/yashla";
    static ImageHostURl = "http://62.72.31.234:2009/upload/";

    static CONTACT_URL = `${ApiUrl.API_BASE_URL}/createContacts`;

    static ABOUT_OWNER_URL = `${ApiUrl.API_BASE_URL}/getAllAboutOwner`;

    static OUR_VIDEO_URL = `${ApiUrl.API_BASE_URL}/getAllVideo`;

    static SUCCESS_COUNTER_URL = `${ApiUrl.API_BASE_URL}/getAllYashlaSuccessCountUp`;

    static CONTACT_INFO_URL = `${ApiUrl.API_BASE_URL}/GetInTouchAll`;

    static GALLERY_URL = `${ApiUrl.API_BASE_URL}/getAllGallery`;
}

export default ApiUrl;