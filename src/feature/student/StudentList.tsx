import { studentListMockData } from "../../services/apiStudent";
import type { StudentType } from "../types/studentType";
import StudentListItem from "./StudentListItem";

export const Component = function StudentList() {
  const studentListData: StudentType[] = studentListMockData;

  return (
    <div className="p-10">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th className="w-1/3">Name</th>
              <th className="w-1/3">Class</th>
              <th className="w-1/3"></th>
            </tr>
          </thead>

          <tbody>
            {studentListData.map((studentItem) => (
              <StudentListItem key={studentItem.id} studentItem={studentItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
