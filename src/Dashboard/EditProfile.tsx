import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICONS } from "../assets/icons/icons";
import Icon from "../components/Icon/Icon";

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        if (key === "profilePic") {
          setProfilePic(parsedData[key]);
        } else {
          setValue(key as keyof FormData, parsedData[key]);
        }
      });
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    const profileData = { ...data, profilePic };
    localStorage.setItem("profileData", JSON.stringify(profileData));
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full bg-white md:p-6 lg:p-8 xl:p-10 rounded-3xl">
      <div className="w-full bg-white flex flex-col md:flex-row items-center md:items-start lg:items-start xl:items-start">
        {/* Profile Picture */}
        <div className="my-8 md:mt-0 lg:mt-0 xl:mt-0">
          <div className="relative w-28 h-28">
            <img
              src={profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleProfilePicChange}
            />
            <button type="button" className="absolute bottom-0 -right-2">
              <Icon icon={ICONS.PENCIL} altName="Edit profile pic" />
            </button>
          </div>
        </div>

        <div className="w-full bg-white md:pl-12 lg:pl-12 xl:pl-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full p-2 border rounded-xl text-gray-600 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="block text-gray-600 mb-2">User Name</label>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className={`w-full p-2 border rounded-xl text-gray-600 ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <span className="text-red-500 text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                className={`w-full p-2 border rounded-xl text-gray-600 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full p-2 border rounded-xl text-gray-600 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-600 mb-2">Date of Birth</label>
              <input
                type="date"
                {...register("dob", { required: "Date of Birth is required" })}
                className={`w-full p-2 border rounded-xl text-gray-600 ${
                  errors.dob ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.dob && (
                <span className="text-red-500 text-sm">
                  {errors.dob.message}
                </span>
              )}
            </div>

            {/* Present Address */}
            <div>
              <label className="block text-gray-600 mb-2">
                Present Address
              </label>
              <input
                type="text"
                {...register("presentAddress")}
                className="w-full p-2 border rounded-xl text-gray-600 border-gray-300"
              />
            </div>

            {/* Permanent Address */}
            <div>
              <label className="block text-gray-600 mb-2">
                Permanent Address
              </label>
              <input
                type="text"
                {...register("permanentAddress")}
                className="w-full p-2 border rounded-xl text-gray-600 border-gray-300"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-600 mb-2">City</label>
              <input
                type="text"
                {...register("city")}
                className="w-full p-2 border rounded-xl text-gray-600 border-gray-300"
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="block text-gray-600 mb-2">Postal Code</label>
              <input
                type="text"
                {...register("postalCode")}
                className="w-full p-2 border rounded-xl text-gray-600 border-gray-300"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-600 mb-2">Country</label>
              <input
                type="text"
                {...register("country")}
                className="w-full p-2 border rounded-xl text-gray-600 border-gray-300"
              />
            </div>

            {/* Save Button */}
            <div className="col-span-full flex justify-center md:justify-end lg:justify-end xl:justify-end">
              <button
                type="submit"
                className="bg-black text-white px-16 py-4 rounded-xl  hover:bg-slate-800 w-full md:w-fit lg:w-fit xl:w-fit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
