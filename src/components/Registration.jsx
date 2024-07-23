import Nav_Bar from "./Nav_Bar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  window.sessionStorage.setItem("active_item", "register");
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  window.sessionStorage.setItem("error_message", "Error Message");
  // window.sessionStorage.setItem("error_message", "");
  const error_message = window.sessionStorage.getItem("error_message");

  const submit = async (e) => {
    e.preventDefault();

    try {
      window.sessionStorage.setItem("token", "1234567");
      window.sessionStorage.setItem("error_message", "");
      window.sessionStorage.setItem("email", form.email_input);
      window.sessionStorage.setItem("firstName", form.firstName_input);
      window.sessionStorage.setItem("lastName", form.lastName_input);
      console.log(form);
      navigate("/garden");
    } catch (err) {
      window.sessionStorage.setItem(
        "error_message",
        "Your credentials don't work, please try again."
      );
    }
  };

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Nav_Bar />

      <div className="container top5">
        <div className="row w100">
          <div className="col"></div>

          <div className="col-8">
            <div className="card border-success ">
              <div className="card-header ">
                <h4 className="card-title">Registration</h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </div>

                <div className="card-text ">
                  <form onSubmit={submit} name="formRegister">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6">
                            <input
                              type="email"
                              className="form-control"
                              name="email_input"
                              aria-describedby="emailHelp"
                              placeholder="Email"
                              onChange={updateForm}
                              required
                            />

                            <input
                              type="password"
                              className="form-control"
                              name="password_input"
                              placeholder="Password"
                              onChange={updateForm}
                              required
                            />
                          </div>

                          <div className="col-6">
                            <input
                              type="text"
                              className="form-control"
                              name="firstName_input"
                              placeholder="First Name"
                              onChange={updateForm}
                              required
                            />
                            <input
                              type="text"
                              className="form-control"
                              name="lastName_input"
                              placeholder="Last Name"
                              onChange={updateForm}
                              required
                            />
                          </div>
                          {/*  //close col-6 */}
                        </div>{" "}
                        {/*  //close row */}
                      </div>{" "}
                      {/*  //close col-12 */}
                    </div>{" "}
                    {/*  //close row */}
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-success form-control"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {error_message && (
                  <div className="row">
                    <div className="col-12">
                      <p className="text-warning">{error_message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col"></div>
        </div>{" "}
      </div>
    </>
  );
}

{
  /* <div className="row">
<div className="col-lg-12">
  <div className="bs-component">
    <form>
      <fieldset>
        <legend>Legend</legend>

        <div className="form-group">
          {/* <label for="exampleInputEmail1">Email address</label> */
}
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>

//         <div className="form-group">
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//           />
//         </div>

//         <div className="form-group">
//           <label
//             className="col-form-label col-form-label"
//             htmlFor="firstName"
//           >
//             First Name
//           </label>
//           <input
//             className="form-control form-control"
//             type="text"
//             placeholder="First Name"
//             id="firstName"
//           />
//           <label
//             className="col-form-label col-form-label"
//             htmlFor="lastName"
//           >
//             Last Name
//           </label>
//           <input
//             className="form-control form-control"
//             type="text"
//             placeholder="Last Name"
//             id="lastName"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="exampleSelect1">Example select</label>
//           <select className="form-control" id="exampleSelect1">
//             <option value="AL">Alabama</option>
//             <option value="AK">Alaska</option>
//             <option value="AZ">Arizona</option>
//             <option value="AR">Arkansas</option>
//             <option value="CA">California</option>
//             <option value="CO">Colorado</option>
//             <option value="CT">Connecticut</option>
//             <option value="DE">Delaware</option>
//             <option value="DC">District Of Columbia</option>
//             <option value="FL">Florida</option>
//             <option value="GA">Georgia</option>
//             <option value="HI">Hawaii</option>
//             <option value="ID">Idaho</option>
//             <option value="IL">Illinois</option>
//             <option value="IN">Indiana</option>
//             <option value="IA">Iowa</option>
//             <option value="KS">Kansas</option>
//             <option value="KY">Kentucky</option>
//             <option value="LA">Louisiana</option>
//             <option value="ME">Maine</option>
//             <option value="MD">Maryland</option>
//             <option value="MA">Massachusetts</option>
//             <option value="MI">Michigan</option>
//             <option value="MN">Minnesota</option>
//             <option value="MS">Mississippi</option>
//             <option value="MO">Missouri</option>
//             <option value="MT">Montana</option>
//             <option value="NE">Nebraska</option>
//             <option value="NV">Nevada</option>
//             <option value="NH">New Hampshire</option>
//             <option value="NJ">New Jersey</option>
//             <option value="NM">New Mexico</option>
//             <option value="NY">New York</option>
//             <option value="NC">North Carolina</option>
//             <option value="ND">North Dakota</option>
//             <option value="OH">Ohio</option>
//             <option value="OK">Oklahoma</option>
//             <option value="OR">Oregon</option>
//             <option value="PA">Pennsylvania</option>
//             <option value="RI">Rhode Island</option>
//             <option value="SC">South Carolina</option>
//             <option value="SD">South Dakota</option>
//             <option value="TN">Tennessee</option>
//             <option value="TX">Texas</option>
//             <option value="UT">Utah</option>
//             <option value="VT">Vermont</option>
//             <option value="VA">Virginia</option>
//             <option value="WA">Washington</option>
//             <option value="WV">West Virginia</option>
//             <option value="WI">Wisconsin</option>
//             <option value="WY">Wyoming</option>
//           </select>
//         </div>
//       </fieldset>
//     </form>
//   </div>
// </div>
// </div>
// </div> */}

// export default function Nav_Bar()  {

// return (
//     <>
// <div className="bs-docs-section">

// <div className="row">
//   <div className="col-lg-6">
//     <div className="bs-component">
//       <form>
//         <fieldset>
//           <legend>Legend</legend>
//           <div className="form-group row">
//             <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
//             <div className="col-sm-10">
//               <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com">
//             </div>
//           </div>
//           <div className="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//           </div>
//           <div className="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
//           </div>
//           <div className="form-group">
//             <label for="exampleSelect1">Example select</label>
//             <select className="form-control" id="exampleSelect1">
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label for="exampleSelect2">Example multiple select</label>
//             <select multiple className="form-control" id="exampleSelect2">
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label for="exampleTextarea">Example textarea</label>
//             <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
//           </div>
//           <div className="form-group">
//             <label for="exampleInputFile">File input</label>
//             <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
//             <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
//           </div>
//           <fieldset className="form-group">
//             <legend>Radio buttons</legend>
//             <div className="form-check">
//               <label className="form-check-label">
//                 <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
//                 Option one is this and that&mdash;be sure to include why it's great
//               </label>
//             </div>
//             <div className="form-check">
//               <label className="form-check-label">
//                 <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
//                 Option two can be something else and selecting it will deselect option one
//               </label>
//             </div>
//             <div className="form-check disabled">
//               <label className="form-check-label">
//                 <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
//                 Option three is disabled
//               </label>
//             </div>
//           </fieldset>
//           <fieldset className="form-group">
//             <legend>Checkboxes</legend>
//             <div className="form-check">
//               <label className="form-check-label">
//                 <input className="form-check-input" type="checkbox" value="" checked>
//                 Option one is this and that&mdash;be sure to include why it's great
//               </label>
//             </div>
//             <div className="form-check disabled">
//               <label className="form-check-label">
//                 <input className="form-check-input" type="checkbox" value="" disabled>
//                 Option two is disabled
//               </label>
//             </div>
//           </fieldset>
//           <fieldset className="form-group">
//             <legend>Sliders</legend>
//             <label for="customRange1">Example range</label>
//             <input type="range" className="custom-range" id="customRange1">
//           </fieldset>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   </div>
//   <div className="col-lg-4 offset-lg-1">
//     <form className="bs-component">
//       <div className="form-group">
//         <fieldset disabled>
//           <label className="control-label" for="disabledInput">Disabled input</label>
//           <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
//         </fieldset>
//       </div>

//       <div className="form-group">
//         <fieldset>
//           <label className="control-label" for="readOnlyInput">Readonly input</label>
//           <input className="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly>
//         </fieldset>
//       </div>

//       <div className="form-group has-success">
//         <label className="form-control-label" for="inputValid">Valid input</label>
//         <input type="text" value="correct value" className="form-control is-valid" id="inputValid">
//         <div className="valid-feedback">Success! You've done it.</div>
//       </div>

//       <div className="form-group has-danger">
//         <label className="form-control-label" for="inputInvalid">Invalid input</label>
//         <input type="text" value="wrong value" className="form-control is-invalid" id="inputInvalid">
//         <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
//       </div>

//       <div className="form-group">
//         <label className="col-form-label col-form-label-lg" for="inputLarge">Large input</label>
//         <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge">
//       </div>

//       <div className="form-group">
//         <label className="col-form-label" for="inputDefault">Default input</label>
//         <input type="text" className="form-control" placeholder="Default input" id="inputDefault">
//       </div>

//       <div className="form-group">
//         <label className="col-form-label col-form-label-sm" for="inputSmall">Small input</label>
//         <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall">
//       </div>

//       <div className="form-group">
//         <label className="control-label">Input addons</label>
//         <div className="form-group">
//           <div className="input-group mb-3">
//             <div className="input-group-prepend">
//               <span className="input-group-text">$</span>
//             </div>
//             <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)">
//             <div className="input-group-append">
//               <span className="input-group-text">.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>

//     <div className="bs-component">
//       <fieldset>
//         <legend>Custom forms</legend>
//         <div className="form-group">
//           <div className="custom-control custom-radio">
//             <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked>
//             <label className="custom-control-label" for="customRadio1">Toggle this custom radio</label>
//           </div>
//           <div className="custom-control custom-radio">
//             <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input">
//             <label className="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
//           </div>
//           <div className="custom-control custom-radio">
//             <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" disabled>
//             <label className="custom-control-label" for="customRadio3">Disabled custom radio</label>
//           </div>
//         </div>
//         <div className="form-group">
//           <div className="custom-control custom-checkbox">
//             <input type="checkbox" className="custom-control-input" id="customCheck1" checked>
//             <label className="custom-control-label" for="customCheck1">Check this custom checkbox</label>
//           </div>
//           <div className="custom-control custom-checkbox">
//             <input type="checkbox" className="custom-control-input" id="customCheck2" disabled>
//             <label className="custom-control-label" for="customCheck2">Disabled custom checkbox</label>
//           </div>
//         </div>
//         <div className="form-group">
//           <div className="custom-control custom-switch">
//             <input type="checkbox" className="custom-control-input" id="customSwitch1" checked>
//             <label className="custom-control-label" for="customSwitch1">Toggle this switch element</label>
//           </div>
//           <div className="custom-control custom-switch">
//             <input type="checkbox" className="custom-control-input" disabled id="customSwitch2">
//             <label className="custom-control-label" for="customSwitch2">Disabled switch element</label>
//           </div>
//         </div>
//         <div className="form-group">
//           <select className="custom-select">
//             <option selected>Open this select menu</option>
//             <option value="1">One</option>
//             <option value="2">Two</option>
//             <option value="3">Three</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <div className="input-group mb-3">
//             <div className="custom-file">
//               <input type="file" className="custom-file-input" id="inputGroupFile02">
//               <label className="custom-file-label" for="inputGroupFile02">Choose file</label>
//             </div>
//             <div className="input-group-append">
//               <span className="input-group-text">Upload</span>
//             </div>
//           </div>
//         </div>
//       </fieldset>
//     </div>
//   </div>
// </div>
// </div>
// </>
// );
// }
