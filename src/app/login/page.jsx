import UniButton from "@/components/UI/Button/UniButton"
import TextForm from "@/components/UI/Form/TextForm"

const Login = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96 flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Панель администратора
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Войдите в систему для продолжения
                </p>
                
                <div className="space-y-4">
                    <TextForm label="Имя пользователя" text="email"/>
                    <TextForm label="Пароль" text="password"/>
                </div>
            <UniButton text='Войти'/>
            </div>
            
        </div>
    )
}

export default Login