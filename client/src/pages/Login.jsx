import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [image, setImage] = useState(null);

  const [formSubmit, setFormSubmit] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    profilePicture: null
  })

  const handleChange = (e) => {
    const { name, files, value } = e.target

    setFormSubmit({
      ...formSubmit,
      [name]: files ? files[0] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formSubmit);
    const data = new FormData();
    data.append("name", formSubmit.name);
    data.append("profilePicture", formSubmit.profilePicture);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 px-4">

      {/* Card */}
      <div className="w-full max-w-sm p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-500">

        {/* Title */}
        <h2 className="text-lg font-semibold text-white text-center mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        <div className="flex flex-col gap-3">

          {/* Profile Upload */}
          <div
            className={`flex justify-center transition-all duration-400 ${isLogin ? "h-0 opacity-0 scale-75" : "h-20 opacity-100 scale-100"
              } overflow-hidden`}
          >
            <label className="cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border border-white/20">
                {image ? (
                  <img src={URL.createObjectURL(image)} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[10px] text-gray-300">Upload</span>
                )}
              </div>
              <input
                type="file"
                className="hidden"
                name="profilePicture"
                value={formSubmit.profilePicture}
                onChange={(e) => {
                  setImage(e.target.files[0])
                  handleChange(e)
                }}
              />
            </label>
          </div>

          {/* Username */}
          <div className={`transition-all duration-400 overflow-hidden ${isLogin ? "h-0 opacity-0" : "h-10 opacity-100"}`}>
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={formSubmit.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm rounded-md bg-black/30 text-white border border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none"
            />
          </div>

          {/* Bio */}
          <div className={`transition-all duration-400 overflow-hidden ${isLogin ? "h-0 opacity-0" : "h-14 opacity-100"}`}>
            <textarea
              placeholder="Bio"
              rows={2}
              name="bio"
              value={formSubmit.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm rounded-md bg-black/30 text-white border border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none resize-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formSubmit.email}
            onChange={handleChange}
            className="px-3 py-2 text-sm rounded-md bg-black/30 text-white border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formSubmit.password}
            onChange={handleChange}
            className="px-3 py-2 text-sm rounded-md bg-black/30 text-white border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
          />

          {/* Button */}
          <button
            onClick={handleSubmit}
          className="mt-1 py-2 text-sm rounded-md bg-white/20 backdrop-blur-md text-white hover:bg-white/30 active:scale-95 transition-all">
            {isLogin ? "Login" : "Register"}
          </button>
        </div>

        {/* Toggle */}
        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-xs text-gray-300 mt-3 cursor-pointer hover:text-white transition"
        >
          {isLogin ? "Create account" : "Already have account?"}
        </p>
      </div>
    </div>
  );
};

export default Login;