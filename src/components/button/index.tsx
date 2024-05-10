import React, { ReactNode } from "react";
import style from'./Button.module.scss';

interface BotaoProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

function Botao({onClick, type, children} : BotaoProps){
  return (
    <button
    onClick={onClick}
    type={type}
    className={style.botao}>
      {children}
    </button>
  )
}

export default Botao;