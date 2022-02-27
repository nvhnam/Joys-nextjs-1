import { Button } from "../../Button/ButtonElement";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "../../../hooks/useToast";
import { useState } from "react";
import {
  Contact1Container,
  Contact1Wrapper,
  Contact1Title,
  Contact1Form,
  Contact1Label,
  Contact1Span,
  Contact1Message,
  Contact1Submit,
} from "./Contact1Element";

const Contact1 = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `../../../api/ContactContent`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          "Success",
          "Thank you for contacting us, we will be in touch soon."
        );
      }
    } catch (err) {}
  }

  return (
    // ------------ Contact Form --------------
    <>
      <Contact1Container>
        <Contact1Wrapper>
          <Contact1Title>Contact JoyS</Contact1Title>
          <Contact1Form onSubmit={handleSubmit(onSubmitForm)}>
            <Contact1Label
              placeholder="Full Name"
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your full name",
                },
              })}
            />
            <Contact1Span>{errors.name?.message}</Contact1Span>
            <Contact1Label
              placeholder="Email"
              type="text"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email address",
                },
                minLength: {
                  value: 8,
                  message: "This is not long enough to be an email address",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long to be an email address",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "This needs to be a valid email address",
                },
              })}
            />
            <Contact1Span>{errors.email?.message}</Contact1Span>
            <Contact1Label
              placeholder="Phone Number"
              type="number"
              name="phone"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Please enter your phone number",
                },
                minLength: {
                  value: 10,
                  message: "Please enter the correct phone number",
                },
                maxLength: {
                  value: 10,
                  message: "Please enter the correct phone number",
                },
              })}
            />
            <Contact1Span>{errors.phone?.message}</Contact1Span>
            <Contact1Message
              placeholder="Message"
              type="text"
              name="message"
              {...register("message", {
                required: {
                  value: true,
                  message: "Please enter your message",
                },
                minLength: {
                  value: 20,
                  message: "Please enter more then 20 characters",
                },
                maxLength: {
                  value: 1000,
                  message: "Please enter less than 1000 character",
                },
              })}
            />
            <Contact1Span>{errors.message?.message}</Contact1Span>
            <Contact1Submit>
              <Button isBig={true} bigFont={true} type="submit" value="submit">
                Submit
              </Button>
            </Contact1Submit>
          </Contact1Form>
        </Contact1Wrapper>
      </Contact1Container>
    </>
  );
};

export default Contact1;
