import logoimg from '../../assets/duckchat.png'

export default function WelcomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img className="py-2"
                width={200}
                src={logoimg}
                alt=""
            />
            <h1 className="text-4xl font-bold mb-4">鸭鸭聊天</h1>
        </div>
    );
}
