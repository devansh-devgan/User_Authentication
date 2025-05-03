// signup-form.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth_context";
import "../styles/styles.css";

const Schema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

const Signup: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(Schema),
  });
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

  const onSubmit = async (data: any) => {
    console.log("Signup Successful!", data);
    // Simulate an API call for signup and get the token
    const token = "fake-token"; // You will get this from your actual API
    login(data, token); // Login the user
    navigate("/home"); // Navigate to home after successful signup
  };

  return (
    <div id="root">
      <h1> Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your username" {...register("username")} required />
        {errors.username && <span>{errors.username.message}</span>}
        
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter your email" {...register("email")} required />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" {...register("password")} required />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
