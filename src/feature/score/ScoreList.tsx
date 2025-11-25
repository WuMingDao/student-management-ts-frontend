export const Component = function ScoreList() {
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
            <tr>
              <td className="text-center text-xl">wumingdao</td>
              <td className="text-center text-xl">Class 1 | Year 6</td>
              <td className="text-center text-xl">Math</td>
              <td className="text-center text-xl">Semester 1</td>
              <td className="text-center text-xl">90</td>
              <th className="text-center">
                <div className="flex justify-center gap-3">
                  <button className="btn btn-soft btn-info">Details</button>
                  <button className="btn btn-soft btn-error">Delete</button>
                </div>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
