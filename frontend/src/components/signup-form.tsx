
import { useForm } from "react-hook-form";
//import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../styles/styles.css";

const Schema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be at most 20 characters"),
    // .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    // .regex(/[0-9]/, "Password must contain at least one number")
    // .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)"),
})

const Signup: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(Schema),
    });
    // const [formData, setFormData] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    // });

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...register, [name]: value });
    // };


    const onSubmit = (data: any) => {
        console.log("Signup Successful!", data);
        alert("Signup Successful!");
    };
    // const onSubmit = (data: any) => console.log("Signup Successful!", data);
    return (
        <div id="root">
            <h1> Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your username" {...register("username")} required></input>
                {errors.username && <span>{errors.username.message}</span>}
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter your email" {...register("email")} required></input>
                {errors.email && <span>{errors.email.message}</span>}
                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Enter Password" {...register("password")} required></input>
                {errors.password && <span>{errors.password.message}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup;