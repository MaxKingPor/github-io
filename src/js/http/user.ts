import { AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseResponse } from "../utils";
import { request } from "./base";




type LoginRequest = { user: string, password: string }
type LoginResponse = BaseResponse<{ token: string }>;

// 
export function login(params: LoginRequest): Promise<AxiosResponse<LoginResponse, LoginRequest>> {

    let req: AxiosRequestConfig<LoginRequest> = {
        method: "POST",
        url: "/login",
        data: params,
    }
    return request.request(req)
}

