import type { ScoreType } from "../types/scoreType";
import type { StudentType } from "../types/studentType";

function ScoreListItem({
  scoreItem,
  studentItem,
}: {
  scoreItem: ScoreType;
  studentItem: StudentType;
}) {
  return (
    <>
      <tr>
        <td className="text-center text-xl">{studentItem.name}</td>
        <td className="text-center text-xl">{studentItem.classInfo}</td>
        <td className="text-center text-xl">{scoreItem.subject}</td>
        <td className="text-center text-xl">{scoreItem.semester}</td>
        <td className="text-center text-xl">{scoreItem.score}</td>
        <th className="text-center">
          <div className="flex justify-center gap-3">
            <button className="btn btn-soft btn-info">Details</button>
            <button className="btn btn-soft btn-error">Delete</button>
          </div>
        </th>
      </tr>
    </>
  );
}
export default ScoreListItem;
