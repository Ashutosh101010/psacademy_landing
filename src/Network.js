import { useParams } from "react-router-dom";
import axios from "axios";
import Endpoints from "./constant/endpoints";

export default class CourseNetwrok {
    static COURSES_URL = Endpoints.baseURL + "admin/course/fetch-public/";
    static BANNER_URL = Endpoints.baseURL + "/admin/banner/fetch-public-banner/";
    static FETCH_IFRAME_URL = Endpoints.baseURL + "/admin/iframe/fetch";
    static INSTITUTE_URL = Endpoints.baseURL + "/getMetaData/fetch-institute/";
    static TAGS_LIST_URL = Endpoints.baseURL + "admin/course/fetch-tags-public/";
    // const instId = 94;

    static async fetchInstitute(instId) {
        // console.log("instId", instId);
        let requestOptions = {
            // headers: { "X-Auth": token },
            withCredentials: false,
        };
        const response = await axios.get(this.INSTITUTE_URL + instId, requestOptions);
        return response.data;
    }

    static async fetchCourses(instId) {
        // console.log("instId", instId);
        let requestOptions = {
            // headers: { "X-Auth": token },
            withCredentials: false,
        };
        const response = await axios.get(this.COURSES_URL + instId, requestOptions);
        return response.data;
    }

    static async fetchBannerss(instId) {
        // console.log("instId", instId);
        let requestOptions = {
            // headers: { "X-Auth": token },
            withCredentials: false,
        };
        const response = await axios.get(this.BANNER_URL + instId, requestOptions);
        return response.data;
    }

    static async getTagsListApi(instId) {
        let requestOptions = {
            // headers: { "X-Auth": token },
            withCredentials: false,
        };
        const response = await axios.get(
            this.TAGS_LIST_URL + instId,
            requestOptions
        );
        return response.data;
    }

    static async fetchIFrame(iframeId) {
        let requestOptions = {
          // headers: { "X-Auth": token },
          withCredentials: false,
        };
        const response = await axios.get(
          this.FETCH_IFRAME_URL + "/" + iframeId,
          requestOptions
        );
        return response.data;
      }
    

}
