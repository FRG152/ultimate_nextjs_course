import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolver/zod";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

const AuthForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return <form onSubmit={form.handleSubmit(onSubmit)}></form>;
};

export default AuthForm;
