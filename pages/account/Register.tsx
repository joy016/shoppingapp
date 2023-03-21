import { User } from "@/ts/accounts";
import React from "react";
import { useAppDispatch } from "../../redux/store";
import { insertNewUser } from "../../redux/slice/accounts/AccountSlice";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const SignupSchema = Yup.object().shape({
    fullname: Yup.string().required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: User, { setSubmitting }: FormikHelpers<User>) => {
          setTimeout(() => {
            dispatch(insertNewUser(values));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form
            className="w-96 mx-auto mt-10 flex flex-col gap-10 bg-zinc-200 p-10
 rounded-xl shadow-lg"
          >
            <p className="text-center font-bold pb-8 text-black">
              Create New Account
            </p>
            <Field
              className="rounded-md border border-solid border-gray-100 bg-gray-100 outline-none px-3 py-2 transition duration-400 ease-in-out shadow-md"
              id="fullname"
              name="fullname"
              placeholder="Full name"
            />
            {errors.fullname && touched.fullname ? (
              <div>{errors.fullname}</div>
            ) : null}
            <Field
              className="rounded-md border border-solid border-gray-100 bg-gray-100 outline-none px-3 py-2 transition duration-400 ease-in-out shadow-md"
              id="email"
              name="email"
              placeholder="Username"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <Field
              className="rounded-md border border-solid border-gray-100 bg-gray-100 outline-none px-3 py-2 transition duration-400 ease-in-out shadow-md"
              id="password"
              name="password"
              placeholder="Password"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <button
              className="bg-cyan-900 text-white shadow-md h-10 transition ease-out duration-500 hover:bg-white hover:text-gray-700 focus:bg-white focus:text-gray-700"
              type="submit"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
