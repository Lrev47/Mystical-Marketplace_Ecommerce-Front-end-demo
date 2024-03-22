import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://capstone-backend-87g4.onrender.com/api";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),

    updateMoneyByUserId: builder.mutation({
      query: (user) => ({
        url: `/users/${user.userId}`,
        method: "PATCH",
        body: user,
      }),
    }),

    updateUserMoney: builder.mutation({
      query: ({ userId, newMoneyAmount, token }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          moneyNum: newMoneyAmount,
        },
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getUserById: builder.query({
      query: ({ userId, token }) => ({
        url: `/users/${userId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  // useRegisterUserMutation,
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useUpdateMoneyByUserIdMutation,
  useUpdateUserMoneyMutation,
} = UserApi;
