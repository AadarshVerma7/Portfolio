"use client";

import { useState } from "react";
import {
  Mail,
  UserRound,
  Tag,
  PenLine,
  Send,
  ShieldCheck,
  MessageSquareText,
} from "lucide-react";
import { Caveat, Permanent_Marker } from "next/font/google";
import { toast } from "sonner";

const graffiti = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const sendMessage = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to send message"
      );
    }

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    return data;
  };

  toast.promise(sendMessage(), {
  loading: "Transmitting message...",

  success: () => ({
    message: "Message received",
    description:
      "Thanks for reaching out. I'll get back to you soon.",
  }),

  error: () => ({
    message: "Transmission failed",
    description:
      "Something went wrong. Please try again.",
  }),
});
};

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        px-6
        pb-20
        pt-20
        sm:px-10
        lg:px-16
        xl:px-24
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* ================================================= */}
        {/* PAGE HEADING */}
        {/* ================================================= */}

        <div className="mb-10 flex items-end justify-between">
          <div>
            <h1
              className={`
                ${graffiti.className}
                text-4xl
                uppercase
                leading-none
                sm:text-7xl
                lg:text-8xl
                xl:text-8xl
                bg-linear-to-b
                from-[#f0ddb0]
                via-[#d4bc85]
                to-[#9f8450]
                bg-clip-text
                text-transparent
              `}
            >
              Contact Me
            </h1>

            <div className="mt-3 flex items-center gap-5">
              <p
                className={`
                  ${caveat.className}
                  text-2xl
                  text-[#3f9c9c]
                  sm:text-3xl
                `}
              >
                Let&apos;s build something great.
              </p>

              <div
                className="
                  hidden
                  h-px
                  w-36
                  bg-linear-to-r
                  from-[#3f9c9c]/70
                  to-transparent
                  sm:block
                "
              />
            </div>
          </div>

        </div>

        {/* Page Divider */}

        <div
          className="
            mb-10
            h-px
            w-full
            bg-linear-to-r
            from-[#d6b06f]/30
            via-[#3f9c9c]/20
            to-transparent
          "
        />

        {/* ================================================= */}
        {/* MAIN CONTACT CONTAINER */}
        {/* ================================================= */}

        <div
          className="
            relative
            grid
            min-h-[650px]
            w-full
            overflow-hidden
            rounded-[30px]
            border
            border-[#d6b06f]/35
            bg-[#050706]/85
            shadow-[0_30px_100px_rgba(0,0,0,0.55)]
            backdrop-blur-sm
            lg:grid-cols-[0.4fr_0.6fr]
          "
        >
          {/* Background Gold Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -left-40
              bottom-0
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#d6b06f]/5
              blur-[120px]
            "
          />

          {/* Background Teal Glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#3f9c9c]/5
              blur-[120px]
            "
          />

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div
            className="
              relative
              flex
              min-h-0
              flex-col
              border-b
              border-[#d6b06f]/15
              px-5
              py-8
              sm:px-12
              lg:min-h-0
              lg:border-b-0
              lg:border-r
              lg:px-12
              lg:py-12
            "
          >
            {/* Small Heading */}

            <div className="flex items-center gap-5">
              <p
                className="
                  whitespace-nowrap
                  text-[10px]
                  uppercase
                  tracking-[0.45em]
                  text-[#3f9c9c]
                "
              >
                Get In Touch
              </p>

              <div
                className="
                  h-px
                  flex-1
                  bg-linear-to-r
                  from-[#3f9c9c]/60
                  to-transparent
                "
              />
            </div>

            {/* Main Left Heading */}

            <div className="mt-10">
              <h2
                className={`
                  ${graffiti.className}
                  text-4xl
                  uppercase
                  leading-[0.9]
                  text-[#e5c47f]
                  sm:text-6xl
                  xl:text-7xl
                `}
              >
                Let&apos;s
              </h2>

              <h2
                className={`
                  ${graffiti.className}
                  mt-2
                  text-4xl
                  uppercase
                  leading-[0.9]
                  text-[#3f9c9c]
                  sm:text-6xl
                  xl:text-7xl
                `}
              >
                Connect
              </h2>
            </div>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[390px]
                text-sm
                leading-7
                text-zinc-400
                lg:text-base
              "
            >
              Have a project in mind or just want to say hi? Fill out the
              form and I&apos;ll get back to you as soon as possible.
            </p>

            {/* ================================================= */}
            {/* SIMPLE MESSAGE VISUAL */}
            {/* ================================================= */}

            <div
              className="
                relative
                mt-auto
                pt-10
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#d6b06f]/15
                  bg-[#030504]/60
                  p-4
                  sm:p-6
                "
              >
                {/* Subtle Grid Background */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                    [background-image:linear-gradient(rgba(63,156,156,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(63,156,156,0.15)_1px,transparent_1px)]
                    [background-size:28px_28px]
                  "
                />

                {/* Top Status */}

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#3f9c9c]
                        shadow-[0_0_10px_rgba(63,156,156,0.8)]
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-[#3f9c9c]
                      "
                    >
                      Ready to connect
                    </span>
                  </div>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-[0.2em]
                      text-zinc-700
                    "
                  >
                    ONLINE
                  </span>
                </div>

                {/* Center Visual */}

                <div
                  className="
                    relative
                    flex
                    min-h-[160px]
                    items-center
                    justify-center
                  "
                >
                  {/* Left Decorative Line */}

                  <div
                    className="
                      absolute
                      left-0
                      top-1/2
                      flex
                      w-[25%]
                      -translate-y-1/2
                      items-center
                    "
                  >
                    <div
                      className="
                        h-px
                        flex-1
                        bg-linear-to-r
                        from-transparent
                        to-[#d6b06f]/50
                      "
                    />

                    <div
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#d6b06f]/70
                      "
                    />
                  </div>

                  {/* Message Icon Container */}

                  <div
                    className="
                      group
                      relative
                      flex
                      h-24
                      w-24
                      cursor-default
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#d6b06f]/35
                      bg-[#080b09]
                      text-[#d6b06f]
                      shadow-[0_0_35px_rgba(214,176,111,0.06)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-[#d6b06f]/70
                      hover:shadow-[0_0_35px_rgba(214,176,111,0.15)]
                    "
                  >
                    {/* Inner Border */}

                    <div
                      className="
                        absolute
                        inset-2
                        rounded-xl
                        border
                        border-[#3f9c9c]/10
                      "
                    />

                    <MessageSquareText
                      size={38}
                      strokeWidth={1.2}
                      className="
                        relative
                        z-10
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:text-[#3f9c9c]
                      "
                    />

                    {/* Notification Dot */}

                    <div
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#050706]
                        bg-[#3f9c9c]
                      "
                    >
                      <span className="h-1 w-1 rounded-full bg-black" />
                    </div>
                  </div>

                  {/* Right Decorative Line */}

                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      flex
                      w-[25%]
                      -translate-y-1/2
                      items-center
                    "
                  >
                    <div
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#3f9c9c]/70
                      "
                    />

                    <div
                      className="
                        h-px
                        flex-1
                        bg-linear-to-r
                        from-[#3f9c9c]/50
                        to-transparent
                      "
                    />
                  </div>
                </div>

                {/* Bottom Text */}

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#d6b06f]/10
                    pt-4
                  "
                >
                  <span
                    className={`
                      ${caveat.className}
                      text-lg
                      text-zinc-500
                    `}
                  >
                    Every great idea starts with a conversation.
                  </span>

                  <Send
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#d6b06f]/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              justify-center
              px-5
              py-10
              sm:px-12
              lg:px-12
              xl:px-14
            "
          >
            {/* Form Heading */}

            <div className="flex items-start gap-5">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#d6b06f]/25
                  bg-[#050706]/80
                  text-[#3f9c9c]
                "
              >
                <Mail size={26} strokeWidth={1.4} />
              </div>

              <div>
                <h2
                  className="
                    text-lg
                    uppercase
                    tracking-[0.25em]
                    text-[#e5c47f]
                    sm:text-xl
                  "
                >
                  Send A Message
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  I&apos;d love to hear about your ideas!!
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col">

              {/* Name + Email */}

              <div className="grid gap-4 md:grid-cols-2">

                <FormField icon={<UserRound size={20} />}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="
                      w-full
                      bg-transparent
                      text-sm
                      text-zinc-200
                      outline-none
                      placeholder:text-zinc-600
                    "
                  />
                </FormField>

                <FormField icon={<Mail size={20} />}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="
                      w-full
                      bg-transparent
                      text-sm
                      text-zinc-200
                      outline-none
                      placeholder:text-zinc-600
                    "
                  />
                </FormField>
              </div>

              {/* Subject */}

              <div className="mt-4">
                <FormField icon={<Tag size={20} />}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="
                      w-full
                      bg-transparent
                      text-sm
                      text-zinc-200
                      outline-none
                      placeholder:text-zinc-600
                    "
                  />
                </FormField>
              </div>

              {/* ================================================= */}
              {/* MESSAGE */}
              {/* ================================================= */}

              <div
                className="
                  group
                  relative
                  mt-4
                  flex
                  min-h-[180px]
                  items-start
                  gap-5
                  rounded-xl
                  border
                  border-[#d6b06f]/25
                  bg-[#050706]/60
                  px-5
                  py-5
                  transition-all
                  duration-300
                  hover:border-[#d6b06f]/40
                  focus-within:border-[#d6b06f]/70
                  focus-within:bg-[#d6b06f]/[0.025]
                  focus-within:shadow-[0_0_30px_rgba(214,176,111,0.06)]
                "
              >
                <PenLine
                  size={20}
                  strokeWidth={1.5}
                  className="
                    mt-1
                    shrink-0
                    text-[#d6b06f]
                    transition-colors
                    duration-300
                    group-focus-within:text-[#3f9c9c]
                  "
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="
                    min-h-[140px]
                    w-full
                    resize-none
                    bg-transparent
                    text-sm
                    text-zinc-200
                    outline-none
                    placeholder:text-zinc-600
                  "
                />
              </div>

              {/* ================================================= */}
              {/* SEND BUTTON */}
              {/* ================================================= */}

              <button
                type="submit"
                className="
                  group
                  relative
                  mt-5
                  flex
                  h-[68px]
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#d6b06f]/60
                  bg-[#080a08]
                  text-[#e5c47f]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#d6b06f]
                  hover:bg-[#d6b06f]/5
                  hover:shadow-[0_0_35px_rgba(214,176,111,0.15)]
                "
              >
                {/* Moving Shine */}

                <div
                  className="
                    absolute
                    inset-y-0
                    -left-1/2
                    w-1/3
                    skew-x-[-25deg]
                    bg-linear-to-r
                    from-transparent
                    via-[#d6b06f]/10
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                  "
                />

                <Send
                  size={22}
                  strokeWidth={1.5}
                  className="
                    absolute
                    left-7
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    group-hover:-translate-y-1
                  "
                />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    sm:text-sm
                  "
                >
                  Send Message
                </span>

                {/* Decorative Dots */}

                <div className="absolute right-7 hidden items-center gap-2 sm:flex">
                  <span className="h-1 w-1 rounded-full bg-[#d6b06f]/20" />
                  <span className="h-1 w-1 rounded-full bg-[#d6b06f]/30" />
                  <span className="h-1 w-1 rounded-full bg-[#d6b06f]/50" />
                </div>
              </button>

              {/* Privacy */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  text-[11px]
                  tracking-wide
                  text-zinc-600
                "
              >
                <ShieldCheck
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#d6b06f]/70"
                />

                <span>
                  Your information is safe and confidential.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* ================================================= */
/* REUSABLE FORM FIELD */
/* ================================================= */

interface FormFieldProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const FormField = ({ icon, children }: FormFieldProps) => {
  return (
    <div
      className="
        group
        flex
        h-[72px]
        items-center
        gap-4
        rounded-xl
        border
        border-[#d6b06f]/25
        bg-[#050706]/60
        px-5
        transition-all
        duration-300
        hover:border-[#d6b06f]/40
        focus-within:border-[#d6b06f]/70
        focus-within:bg-[#d6b06f]/[0.025]
        focus-within:shadow-[0_0_25px_rgba(214,176,111,0.06)]
      "
    >
      <div
        className="
          shrink-0
          text-[#d6b06f]
          transition-colors
          duration-300
          group-focus-within:text-[#3f9c9c]
        "
      >
        {icon}
      </div>

      {children}
    </div>
  );
};
