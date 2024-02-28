
import { baseApi } from '../../api/baseApi';

const academicManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicManagement: builder.query({
      query: (userInfo) => ({
        url: '/academic-semesters',
        method: 'GEt',
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetAllAcademicManagementQuery } =  academicManagement;