"use client";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Send, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  contactNumber: string;
  email: string;
  country: string;
  message: string;
  pageURL: string;
}

type Status = "" | "submitting" | "success" | "error";

const GetInTouchForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactNumber: "",
    email: "",
    country: "",
    message: "",
    pageURL: typeof window !== "undefined" ? window.location.href : "",
  });

  const [status, setStatus] = useState<Status>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/jotform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageURL: window.location.href,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setFormData({
            fullName: "",
            contactNumber: "",
            email: "",
            country: "",
            message: "",
            pageURL: "",
          });
          setStatus("");
          onSuccess?.();
        }, 4000);
      } else {
        setStatus("error");
        console.error(result);
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const mockhandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");

    setTimeout(() => {
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        country: "",
        message: "",
        pageURL: "",
      });
      setStatus("");
    }, 5000);
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="bg-[#0000ff] text-white p-8 text-center shadow-md">
          <div className="flex flex-col items-center justify-center space-y-3">
            <CheckCircle size={48} className="text-white" />
            <h2 className="text-xl font-semibold">Thank You!</h2>
            <p className="text-sm text-white/90">
              Thank you for your submission, we will contact you soon.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 sm:p-6 shadow-md border border-gray-100 w-full">
          <h2 className="text-xl font-semibold text-center mb-1 text-gray-800">
            Request Company Transfer
          </h2>
          <p className="text-sm text-gray-500 text-center mb-5">
            Fill in the form below to get in touch and start the transfer process.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {(["fullName", "contactNumber", "email", "country"] as const).map(
              (field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field as keyof Omit<FormData, "message">]}
                    onChange={handleInputChange}
                    placeholder={
                      field === "fullName"
                        ? "Full Name"
                        : field === "contactNumber"
                        ? "Contact Number"
                        : field === "email"
                        ? "Email Address"
                        : "Country"
                    }
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              )
            )}

            <div>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="
                w-full py-2 text-sm font-medium text-white
               bg-[#0000ff]
                flex items-center justify-center gap-2
                cursor-pointer
                hover:scale-105
                transition-all duration-300 ease-in-out
              "
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {status === "error" && (
            <p className="mt-3 text-center text-red-600 text-sm">
              ⚠️ Something went wrong. Try again.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default GetInTouchForm;