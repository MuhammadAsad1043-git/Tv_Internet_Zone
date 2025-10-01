import { FaEdit, FaTrash } from "react-icons/fa";
import Heading from "../components/Heading";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const SignUp = () => {
  interface FormName {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
  }

  interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
  }

  const initialValues: FormName = {
    firstName: "",
    lastName: "",
    email: "",
    id: "1",
  };
  const [values, setValue] = useState<FormName>(initialValues);
  const [info, setinfo] = useState<FormName[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

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

    if (values.email && values.firstName && values.lastName) {
      setinfo([
        ...info,
        {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          id: uuid(),
        },
      ]);
    }
    setErrors(validateForm(values));

    // Empty the input
    values.firstName = "";
    values.lastName = "";
    values.email = "";
  };

  //validation
  const validateForm = (values: FormName): FormErrors => {
    const error: FormErrors = {};
    if (!values.firstName) {
      error.firstName = "First Name cannot be empty";
    }
    if (!values.lastName) {
      error.lastName = "Last Name cannot be empty";
    }
    if (!values.email) {
      error.email = "Email cannot be empty";
    }
    return error;
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
              {errors.firstName && (
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
              {errors.lastName && (
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
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="cursor-pointer rounded-t-[50px] rounded-b-[50px] bg-black text-white w-30 h-10"
              onClick={FormData}
            >
              Submit
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
          {info.map(({ email, firstName, lastName, id }: FormName) => (
            <tr>
              <td className="pt-3 border-1">{firstName}</td>
              <td className="pt-3 border-1">{lastName}</td>
              <td className="border-1">{email}</td>
              <td className="border-1">{id}</td>

              <td className="flex justify-center gap-5 pt-2">
                <FaEdit size={18} />
                <FaTrash
                  size={18}
                  // onClick={() =>
                  //   setinfo(
                  //     info.filter((a) => {

                  //     })
                  //   )
                  // }
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SignUp;
