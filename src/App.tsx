import "./style.css";
import {ActivityLoader, Button, ButtonOutline, TextInput} from "./components";

export const App = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="main-background1">
          <div className="content-main1">
            <div className="content">
              <label className="title-label">Lorem ipsum dolor si amet</label>
              <label className="subtitle-label">consectetur</label>
              <label className="content-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
          </div>
        </div>
        <div className="main-background2">
          <div className="content-main2">
            <div className="col">
              <label className="title-label2">Hello</label>
              <label className="subtitle-label2">
                Enter your email and password to login.
              </label>
            </div>

            <div className="line-space col">
              <TextInput title="Email" placeholder={"Enter Email..."} />
              <div style={{flexDirection: "row"}}>
                <TextInput
                  title="Password"
                  type="password"
                  placeholder={"Enter Password..."}
                  isPassword={true}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "5px",
                  flexDirection: "row",
                }}
              >
                <div style={{flex: 1}}>
                  <input color={'rgba(120, 121, 241, 1)'} type="checkbox" />
                  <label className="label-checkbox">Remember me</label>
                  <br />
                </div>
                <div>
                  <label className="label-with-purple">
                    <u>Forgot Password?</u>
                  </label>
                </div>
              </div>
            </div>

            <div
              style={{marginTop: "10px", alignSelf: "center", display: "flex"}}
            >
              <Button title="Login" marginRight={'10px'} />
              <Button
                title="Sign Up"
                color="rgba(62, 51, 78, 1)"
                backgroundColor="white"
              />
            </div>

            <div
              style={{marginTop: "50px", display: "flex", alignSelf: "center"}}
            >
              <label style={{fontSize: "12px", color: "rgba(62, 51, 78, 1)"}}>
                Or, login With
              </label>
            </div>

            <div
              style={{display: "flex", marginTop: "20px", alignSelf: "center"}}
            >
              <ButtonOutline title="Facebook" />
              <ButtonOutline title="Linked In" />
              <ButtonOutline title="Google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
