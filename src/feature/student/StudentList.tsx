export const Component = function StudentList() {
  return (
    <div className="p-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="w-1/3">Name</th>
              <th className="w-1/3">Class</th>
              <th className="w-1/3"></th>
            </tr>
          </thead>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">wumingdao</div>
                  <div className="text-sm opacity-50">Female</div>
                </div>
              </div>
            </td>
            <td className="text-center text-xl">Class 1 | Year 6</td>
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
  );
};
