// import React from "react";
// import "../../component css/login.css";
// import firebase from "../../firebase.js";
// export default function login() {
//   // setUprecaptch = () => {
//   //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//   //     "sign-in-button",
//   //     {
//   //       size: "invisible",
//   //       callback: (response) => {
//   //         // reCAPTCHA solved, allow signInWithPhoneNumber.
//   //         this.onSignInSubmit();
//   //       },
//   //     }
//   //   );
//   // };
//   // onSignInSubmit = (e) => {
//   //   e.preventDefault();
//   //   const phoneNumber = "+91 9512503189";
//   //   const appVerifier = window.recaptchaVerifier;
//   //   firebase
//   //     .auth()
//   //     .signInWithPhoneNumber(phoneNumber, appVerifier)
//   //     .then((confirmationResult) => {
//   //       // SMS sent. Prompt user to type the code from the message, then sign the
//   //       // user in with confirmationResult.confirm(code).
//   //       window.confirmationResult = confirmationResult;
//   //       // ...
//   //     })
//   //     .catch((error) => {
//   //       // Error; SMS not sent
//   //       // ...
//   //     });
//   // };
//   return (
//     <div class="container">
//       <header class="header">Register to start chat</header>
//       <div class="main">
//         <form id="registerfrm">
//           <label htmlFor="username">Name</label>
//           <div class="form-group">
//             <input
//               type="text"
//               name="name"
//               id="name"
//               class="form-control"
//               autocomplete="off"
//               required
//             />
//           </div>
//           <label htmlFor="username">Phone Number</label>
//           <div class="form-group">
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               class="form-control"
//               autocomplete="off"
//               required
//             />
//           </div>
//           <button type="submit" class="btn btn-success">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
