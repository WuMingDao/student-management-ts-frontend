function StudentListItem({ studentItem }: { studentItem: any }) {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3 w-48 mx-auto">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{studentItem.name}</div>
              <div className="text-sm opacity-50">{studentItem.gender}</div>
            </div>
          </div>
        </td>
        <td className="text-center text-xl">{studentItem.classInfo}</td>
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
export default StudentListItem;
