// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginAdmin } from "../../../api/auth.api";



// export default function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await loginAdmin(form);

//       localStorage.setItem("token", res.data.access_token);
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Email or password incorrect");
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="w-[350px] bg-white shadow p-6 rounded"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full border p-2 mb-3"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full border p-2 mb-4"
//         />

//         <button
//           disabled={loading}
//           className="w-full bg-blue-600 text-white p-2 rounded"
//         >
//           {loading ? "Loading..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }
















import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin } from "../../../api/auth.api";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginAdmin(form);

      localStorage.setItem("token", res.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800">
            تسجيل دخول الأدمن
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            قم بإدخال بياناتك للوصول إلى لوحة التحكم
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-600">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-600">
              كلمة المرور
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Login Button */}
          <button
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-700 transition text-white py-2.5 rounded-lg font-semibold"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="text-primary hover:underline text-sm font-medium"
          >
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>

      </div>
    </div>
  );
}


