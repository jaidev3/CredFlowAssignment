import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function Checkout() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Link to="/">
        <button>Back to home</button>
      </Link>
      <h1>checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input
          type="number"
          {...register("phone", { minLength: 10, maxLength: 10 })}
        />
        <input type="submit" />
      </form>
      <button>Pay</button>
    </div>
  );
}

export default Checkout;
