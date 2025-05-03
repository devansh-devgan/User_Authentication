import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Schema = z.object({
  email: z.string().email(),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
});

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(Schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("Login Successful!", data);
    alert("Login Successful!");
    navigate("/home");
  };

  return (
    <div id="root">
      <h1> Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          {...register("email")}
          required
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          {...register("password")}
          required
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
