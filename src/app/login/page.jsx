"use client"

import TextForm from "@/components/UI/Form/TextForm"
import { Button, Image } from "@heroui/react"

const Login = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
                <div className="flex justify-center w-full mb-10">
                    <Image src="/btx.svg" />
                </div>
                <h1 className="text-4xl font-bold text-center mb-5">
                    Панель администратора
                </h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    Войдите в систему для продолжения
                </p>
                <div className="space-y-4 mb-10 flex flex-col gap-5">
                    <TextForm label="Имя пользователя" text="email" />
                    <TextForm label="Пароль" text="password" />
                </div>
                <Button color="primary">Войти</Button>
            </div>

        </div>
    )
}

export default Login