export const Component = function Profile() {
  return (
    <div className="flex justify-center items-center p-40">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-2xl shadow-blue-300">
        <fieldset className="fieldset w-full">
          <div className="avatar flex justify-center ">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>

          <label className="input">
            wu
            <input
              type="email"
              className="input validator"
              placeholder="wu"
              required
              disabled
            />
          </label>

          <label className="fieldset">
            <select defaultValue="Select Class" className="select">
              <option disabled={true}>Class In Charge</option>
              <option>Class 1 | Year 6</option>
              <option>Class 2 | Year 6</option>
              <option>Class 3 | Year 6</option>
            </select>
          </label>
        </fieldset>

        <button className="btn btn-neutral mt-4" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};
