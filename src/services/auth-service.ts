import QueryString from "qs";
import type { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function loginRequest(loginData: CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    }

    const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" });

    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/oauth2/token",
        data: requestBody,
        headers // When the value of the attribute is the same as the name of the attribute, you can just write
                // the name of the attribute and JSON will automatically recognise what should go in
    }

    return requestBackend(config);
}