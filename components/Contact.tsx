"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { Textarea, Input } from "@nextui-org/input";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Button } from "@nextui-org/button";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { sendEmail } from "@/action/Mail";
const MessageSchema = z.object({
  name: z.string({
    message: "Name is required",
  }).min(1),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  message: z.string({
    message: "Message is required",
  }).min(1),
});

const Contact = () => {
  const submit = (data: any) => {
    sendEmail(data.email, data.name, data.message).then((res)=>{
      console.log(res);
    })
  };

  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof MessageSchema>
  >({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });
  const theme = useTheme();
  return (
    <div
      id="contact"
      className="h-full overflow-hidden  z-20 relative w-full min-h-screen flex flex-col items-center justify-center rounded-lg"
    >
      <Boxes />
      <h2
        className={cn(
          "lg:text-4xl text-2xl font-semibold w-full text-center mb-10 text-white relative z-20 " +
            ` ${theme.theme === "dark" ? "text-white" : "text-black"}`
        )}
      >
        Contact
      </h2>
      <div className="w-full grid grid-cols-2  ">
        <div className="col-span-2 lg:col-span-1 p-2 m-2 lg:p-4 ">
          <h3
            className={
              "lg:text-3xl text-lg  pt-4 font-semibold lg:w-2/3" +
              ` ${theme.theme === "dark" ? "text-white" : "text-black"}`
            }
          >
            Message me
          </h3>
          <form className="my-8 gap-5 flex flex-col" onSubmit={handleSubmit(submit)}>
            <Input
              id="name"
              label="Name"
              placeholder="Tyler"
              type="text"
              {...register("name")}
            />
            {formState.errors.name?.message && (
              <Label >
                <p className="text-red-500 z-20">
                  {formState.errors.name?.message}
                </p>
              </Label>
            )}
            <Input
              id="email"
              label="Email"
              placeholder="projectmayhem@fc.com"
              type="email"
              {...register("email")}
            />

            {formState.errors.email?.message && (
              <Label >
                <p className="text-red-500 z-20">
                  {formState.errors.email?.message}
                </p>
              </Label>
            )}

            <Textarea
              label="Message"
              id="message"
              placeholder=""
              {...register("message")}
            />
            {formState.errors.message?.message && (
              
              <Label >
                <p className="text-red-500 z-20">
                  {formState.errors.message?.message}
                </p>
              </Label>
            )}
            <Button type="submit" className="w-full text-center">
              Sign up
              <BottomGradient />
            </Button>
          </form>
        </div>
        <div className="col-span-2 z-30 lg:col-span-1 p-2 lg:p-4 h-full">
          <h3
            className={
              "lg:text-3xl text-lg pt-4 mb-8 font-semibold lg:w-2/3" +
              ` ${theme.theme === "dark" ? "text-white" : "text-black"}`
            }
          >
            Get in Touch
          </h3>
          <div
            className={
              "px-1 py-2  border-1  w-full  mt-5 rounded-md z-30 " +
              ` ${
                theme.theme === "dark"
                  ? "text-white bg-black"
                  : "text-black bg-white"
              }`
            }
          >
            <div className="flex flex-row gap-2 hover:underline items-center justify-start p-2">
              <FaPhone
                size={20}
                color={theme.theme == "dark" ? "white" : "black"}
              />
              <a href="tel:+919080725679">+91 9080725679</a>
            </div>
            <div className="flex flex-row gap-2 hover:underline items-center justify-start p-2">
              <SiGmail
                size={20}
                color={theme.theme == "dark" ? "white" : "black"}
              />
              <a href="mailto:kasinathansj@gmail.com">kasinathansj@gmail.com</a>
            </div>
            <div className="flex flex-row gap-2 hover:underline items-center justify-start p-2">
              <IoLocation
                size={20}
                color={theme.theme == "dark" ? "white" : "black"}
              />
              <a href="https://www.google.com/maps/place/New+York,+USA">
                Madurai, TamilNadu, India
              </a>
            </div>
          </div>
          <div
            className={
              "px-1 py-2  border-1  w-full  mt-5 rounded-md z-30 " +
              ` ${
                theme.theme === "dark"
                  ? "text-white bg-black"
                  : "text-black bg-white"
              }`
            }
          >
            <div
              className={
                " flex flex-row gap-4 py-4 z-30" +
                ` ${theme.theme === "dark" ? "bg-black" : "bg-white"}`
              }
            >
              {siteConfig.socials.map((social) => {
                return (
                  <div key={social.link}>
                    <Link href={social.link} isExternal>
                      <div className="px-4">
                        <social.icon
                          size={30}
                          className={` ${
                            theme.theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default Contact;
