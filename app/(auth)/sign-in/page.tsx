'use server';
import AuthForm from '@/components/AuthForm'
import React from 'react'

const Page = () => {
  return<AuthForm type="sign-in"/>
}

export default Page


// 'use server'; // Important!

// import { isAuthenticated } from "@/lib/actions/auth.action";
// import { redirect } from "next/navigation";
// import AuthForm from "@/components/AuthForm"; // adjust if your import path is different

// const SignInPage = async () => {
//   const isUserAuthenticated = await isAuthenticated();

//   if (isUserAuthenticated) {
//     redirect('/');
//   }

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <AuthForm type="sign-in" />
//     </div>
//   );
// };

// export default SignInPage;
