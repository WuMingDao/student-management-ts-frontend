import { getScoreList } from "../../services/apiScore";
import { getStudentList } from "../../services/apiStudent";
import type { ScoreType } from "../types/scoreType";
import type { StudentType } from "../types/studentType";
import ScoreListItem from "./ScoreListItem";

export const Component = function ScoreList() {
  const scoreListData: ScoreType[] = getScoreList();
  const studentListData: StudentType[] = getStudentList();

  return (
    <>
      <div className="p-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Semester</th>
                <th>Score</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {scoreListData.map((scoreItem, index) => (
                <ScoreListItem
                  key={scoreItem.id}
                  scoreItem={scoreItem}
                  studentItem={studentListData[index]}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
