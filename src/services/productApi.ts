"use client";

import { API_URL } from "@/configs/global";
import { ProductSummary } from "@/types/product-post-summary.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    updateProduct: build.mutation<ProductSummary, { id: number }>({
      query: ({ id, ...rest }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: rest,
      }),
    }),
    deleteProduct: build.mutation<ProductSummary, { id: number }>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useUpdateProductMutation, useDeleteProductMutation } =
  productApi;
