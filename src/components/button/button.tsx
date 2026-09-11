import { signIn } from "@/auth";
import style from './button.module.css'

export default function ButtonLogin() {
  return (
    <form 
    className={style.containerForm}
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
        <h1>Login com GitHub</h1>
      <button  className={style.btn} type="submit">Login</button>
    </form>
  );
}
