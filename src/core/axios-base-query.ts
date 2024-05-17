import { BaseQueryApi, BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Context } from "next-redux-wrapper";

export type AxiosBaseQueryArgs = {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
};

export const axiosBaseQuery =
  (
    { baseUrl, prepareHeaders }: any = { baseUrl: "/" }
  ): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> =>
  async ({ url, method, data, params }, api) => {
    let headers = {};
    if (prepareHeaders) {
      headers = await prepareHeaders(api as BaseQueryApi & { extra: Context });
    }

    console.log("axiosBaseQuery prepared headers:");
    console.log(headers);

    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
