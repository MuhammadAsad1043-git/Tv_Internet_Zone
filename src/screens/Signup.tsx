import { FaEdit, FaTrash } from "react-icons/fa";
import Heading from "../components/Heading";
import { useState } from "react";
import { v4 as uuid } from "uuid";

interface FormName {
  firstName: string;
  lastName: string;
  email: string;
  // id: string;
}

interface User extends FormName {
  id: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const SignUp = () => {
  const initialValues: FormName = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [values, setValue] = useState<FormName>(initialValues);
  const [updateData, setUpdate] = useState<User | null>(null);
  const [info, setinfo] = useState<User[]>([]);
  const [errors, setErrors] = useState<FormErrors | null>({});
  const [openModel, setopenModel] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  //Handling form submit
  const handleForms = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  //Data handling
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const FormData = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(values);
    setErrors(errors);
    if (errors) {
      return;
    }
    if (!updateData) {
      setinfo([
        ...info,
        {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          id: uuid(),
        },
      ]);
    } else {
      const updatedUser = info.map((user) => {
        if (user.id === updateData.id) {
          user.email = values.email;
          user.firstName = values.firstName;
          user.lastName = values.lastName;
        }
        return user;
      });
      setinfo([...updatedUser]);
      setUpdate(null);
    }
    setValue(initialValues);
  };

  //Delete Function

  const deleteFunction = (id: string) => {
    setSelectedUserId(id);
    setopenModel(true);
  };

  const confirmDelete = () => {
    if (selectedUserId) {
      setinfo(info.filter((user) => user.id != selectedUserId));
    }
    setopenModel(false);
    setSelectedUserId(null);
  };

  const cancelDelete = () => {
    setopenModel(false);
    setSelectedUserId(null);
  };

  // const deleteFunction = (id: string) => {
  //   const confirmDelete = window.confirm("Are you sure you want to delete?");
  //   if (confirmDelete) {
  //     setinfo(
  //       info.filter((a) => {
  //         return a.id !== id;
  //       })
  //     );
  //   }
  // };

  //validation
  const validateForm = (values: FormName): FormErrors | null => {
    const error: FormErrors = {};
    let isError: boolean = false;
    if (!values.firstName) {
      error.firstName = "First Name cannot be empty";
      isError = true;
    }
    if (!values.lastName) {
      error.lastName = "Last Name cannot be empty";
      isError = true;
    }
    if (!values.email) {
      error.email = "Email cannot be empty";
      isError = true;
    }
    return isError ? error : null;
  };

  const handleUpdate = (updatedValues: User): void => {
    const { firstName, lastName, email } = updatedValues;
    setUpdate(updatedValues);
    setValue({ firstName, lastName, email });
  };

  return (
    <div className="flex flex-col items-center w-full h-auto gap-6 bg-white ">
      <Heading
        text="SignUp"
        className="text-[42px] font-bold text-black pt-8"
      />

      <div
        className="flex lg:justify-center md:items-center sm:items-center max-[640px]:items-center
       max-[640px]:flex-col w-auto md:flex-col lg:flex-row sm:flex-col md:gap-4 sm:gap-3 max-[640px]:gap-3 pb-7"
      >
        <form id="SignUpForm" onSubmit={handleForms}>
          <div className="flex gap-2 lg:gap-5 lg:items-center lg:flex-row md:flex-col sm:flex-col">
            <label id="firstname" htmlFor="firstName ">
              First Name
            </label>
            <div className="flex flex-col gap-2 ">
              <input
                className="h-14 lg:w-60 md:w-100 sm:w-80 max-[640px]:w-70 pl-3 bg-white border-1 border-[#dadce0] rounded-xl"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first Name"
                value={values.firstName}
                onChange={handleData}
              />
              {errors?.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>

            <label id="lastname" htmlFor="lastName">
              Last Name
            </label>
            <div className="flex flex-col gap-2">
              <input
                className="h-14 lg:w-60 md:w-100 sm:w-80 max-[640px]:w-70 pl-3 bg-white border-1 border-[#dadce0] rounded-xl"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last Name"
                value={values.lastName}
                onChange={handleData}
              />
              {errors?.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>

            <label id="email" htmlFor="email">
              Email
            </label>
            <div className="flex flex-col gap-2">
              <input
                className="h-14 lg:w-60 md:w-100 sm:w-80 max-[640px]:w-70 pl-3 bg-white border-1 border-[#dadce0] rounded-xl"
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                value={values.email}
                onChange={handleData}
              />
              {errors?.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="cursor-pointer rounded-t-[50px] rounded-b-[50px] bg-black text-white w-30 h-10"
              onClick={FormData}
            >
              {updateData ? "update" : "submit"}
            </button>
          </div>
        </form>
      </div>
      {/* Table for data */}
      <div className="w-full pl-20 pr-20 text-center">
        <table className="w-full border-1">
          <tr className="text-xl border-1">
            <th className="p-4 border-1">First Name</th>
            <th className=" border-1">Last Name</th>
            <th className="border-1">Email</th>
            <th>Action</th>
          </tr>
          {info.map(({ email, firstName, lastName, id }) => (
            <tr>
              <td className="pt-3 border-1">{firstName}</td>
              <td className="pt-3 border-1">{lastName}</td>
              <td className="border-1">{email}</td>
              <td className="border-1">{id}</td>

              <td className="flex justify-center gap-5 pt-2">
                <FaEdit
                  size={18}
                  onClick={() =>
                    handleUpdate({ email, firstName, lastName, id })
                  }
                />
                <FaTrash
                  className="cursor-pointer"
                  size={18}
                  onClick={() => deleteFunction(id)}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
      {/* Custom Delete Modal  */}
      {openModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 ">
          <div className="p-6 bg-white rounded-lg shadow-lg w-80 border-1">
            <h2 className="mb-3 text-lg font-bold">Confirm Delete</h2>
            <p className="mb-5">Are you sure you want to delete this user?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 "
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
