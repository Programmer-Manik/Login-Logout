import { useGetAllAcademicManagementQuery } from "../../../redux/features/academicManagement/academicManagement";

const CreateAcademicSemester = () => {
   const data = useGetAllAcademicManagementQuery(undefined)
   console.log(data)
  return (
    <div>
      <h2>Welcome to the CreateAcademicSemester page</h2>
    </div>
  );
};

export default CreateAcademicSemester;
