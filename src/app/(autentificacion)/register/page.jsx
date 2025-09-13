"use client"

import { register } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function Register(){
    const [state,action,isPending]=useActionState(register,
        undefined
    )

    console.log(isPending);
    
    return(
        <div className="container w-1/2">
            <h1 className="title">Register</h1>

            <form action={action} className="space-y-4">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>
                </div>

                <div>
                    <label htmlFor="password">COntraseña</label>
                    <input type="password" name="password"/>
                </div>

                <div className="flex items-end gap-4">
                    <button 
                        disabled={isPending}
                        className="btn-primary">
                            {isPending ? "Registrando...":"Registrar"}
                    </button>

                    <Link href="/" className="text-link">O inicia sesion aqui</Link>
                </div>
            </form>
        </div>
    )
}