import { Form, Link, useActionData, useNavigate, useNavigation } from "react-router-dom";
import styles from "./Login.module.css"; 
import axios from "axios";
import { useContext, useEffect } from "react"; 

function Login() {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData(); 

  useEffect(() => {
    if (actionData?.status === "success") {
      
      localStorage.setItem("userToken", actionData.data.token);
    }
  }, [actionData?.status, actionData?.data, navigate]);

  

  return (
    <Form className={`container ${styles.form}`} method="POST">
      <h2 className="text-center border-bottom border-bottom-1 pb-4">Login</h2>

      <div className={`input-group ${styles.inputGroup}`}>
        <label htmlFor="email">
          {/* <MdAlternateEmail /> */}
        </label>
        <input name="username" type="email" id="email" placeholder="Email" aria-label="Email" required />
      </div>
      <div className={`input-group ${styles.inputGroup}`}>
        <label htmlFor="password">
          {/* <BsShieldLockFill /> */}
        </label>
        <input name="password" type="password" id="password" placeholder="Password" aria-label="Password" required />
      </div>
      {actionData?.status === "error" && <small className="alert alert-danger py-2 m-0">{actionData?.data}</small>}
      <button className="mx-auto px-4 mt-4" type="submit">Submit</button>
     
      <div>
        <p className="small text-center mt-2 mb-2">
          <Link style={{ color: "var(--main-color)", fontWeight: "500" }} to="/forgot-password">
            Forgot my password
          </Link>
        </p>
        <p className="small text-center mb-0">
          Don't have an account?{" "}
          <Link style={{ color: "var(--main-color)", fontWeight: "500" }} to="/register">
            Create an account
          </Link>
        </p>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth/login", data);
    return { status: "success", data: res.data };
  } catch (err) {
    return { status: "error", data: err?.response?.data?.message };
  }
}

export default Login;
