"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import PageWrapper from "../components/pageWrapper";

// Validation Schema
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  category: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  fee: Yup.string().required("Fee range is required"),
  location: Yup.string().required("Location is required"),
});

export default function OnboardingPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: "",
    },
  });

  const categories = ["Singer", "DJ", "Dancer", "Speaker"];
  const languageOptions = ["Hindi", "English", "Punjabi"];

  const toggleArrayValue = (field, value) => {
    const current = watch(field);
    const newValue = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue(field, newValue);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

 
  const onSubmit = async (data) => {
    const fullData = {
      ...data,
      image: imageFile ? imageFile.name : null, // only sending image name for mock API
    };
  
    console.log("Submitting:", fullData);
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullData),
      });
  
      const result = await response.json();
      console.log("Response from mock API:", result);
      alert("Profile submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit profile.");
    }
  };
  
  return (
    <PageWrapper>
      <main className="max-w-4xl mx-auto px-6 py-16 text-white mt-4">
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <h1 className="text-3xl font-extrabold text-purple-400 mb-6 text-center">
            Artist Onboarding Form
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-semibold">Full Name</label>
              <input
                type="text"
                {...register("name")}
                placeholder="e.g. Sunidhi Chauhan"
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">Short Bio</label>
              <textarea
                {...register("bio")}
                placeholder="A brief introduction about you..."
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              />
              {errors.bio && <p className="text-red-400 text-sm mt-1">{errors.bio.message}</p>}
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">Select Categories</p>
              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={watch("category").includes(cat)}
                      onChange={() => toggleArrayValue("category", cat)}
                      className="accent-purple-500"
                    />
                    {cat}
                  </label>
                ))}
              </div>
              {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category.message}</p>}
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">Languages Spoken</p>
              <div className="flex flex-wrap gap-4">
                {languageOptions.map((lang) => (
                  <label key={lang} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={watch("languages").includes(lang)}
                      onChange={() => toggleArrayValue("languages", lang)}
                      className="accent-purple-500"
                    />
                    {lang}
                  </label>
                ))}
              </div>
              {errors.languages && <p className="text-red-400 text-sm mt-1">{errors.languages.message}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">Fee Range</label>
              <select
                {...register("fee")}
                className="w-full bg-black border border-white/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Fee Range</option>
                <option value="₹10000 - ₹20000">₹10K – ₹20K</option>
                <option value="₹20000 - ₹40000">₹20K – ₹40K</option>
                <option value="₹50000+">₹50K+</option>
              </select>
              {errors.fee && <p className="text-red-400 text-sm mt-1">{errors.fee.message}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">Location</label>
              <input
                type="text"
                {...register("location")}
                placeholder="e.g. Mumbai, Delhi"
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              />
              {errors.location && <p className="text-red-400 text-sm mt-1">{errors.location.message}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Upload Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-4 w-28 h-28 object-cover rounded-full border-2 border-purple-600 shadow-md"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition font-bold text-white text-lg shadow"
            >
              Submit Artist Profile
            </button>
          </form>
        </div>
      </main>
    </PageWrapper>
  );
}

