import { auth } from "@/auth";
import style from "./dash.module.css";
import ButtonLogout from "@/components/button/buttonLogout/logout";
import Image from "next/image";

export default async function Dashboard() {
  const secao = await auth();

  if (secao) {
    return (
      <main className={style.container}>
        <h1 className={style.h1}>
          Bem vindo!, <span className={style.span}>{secao?.user?.name}</span>
        </h1>
        <div className={style.imgDiv}>
          <Image
            src={secao.user?.image ?? "/default-avatar.png"}
            alt="foto-git-hub"
            width={200}
            height={200}
          />
        </div>
        <ButtonLogout />
      </main>
    );
  }
}
