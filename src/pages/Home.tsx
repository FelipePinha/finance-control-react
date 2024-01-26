import { Link } from 'react-router-dom';
import HomeBanner from '../images/home-banner.jpg';

export const Home = () => {
    return (
        <div className="w-screen h-screen bg-zinc-800 flex justify-center items-center">
            <section className="flex w-full h-full mx-auto justify-center items-center gap-10">
                <div
                    className="w-[60%] h-full hidden md:block bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${HomeBanner})` }}
                >
                    {/* <img src={HomeBanner} alt="banner" /> */}
                </div>
                <div className="w-full md:w-[40%] flex flex-col gap-3 p-6 items-start justify-center">
                    <p className="text-white font-bold">
                        <span className="text-pink-800">Nu</span> Kenzie
                    </p>
                    <h1 className="text-white text-3xl font-bold">
                        Centralize o controle de suas finanças
                    </h1>
                    <p className="text-white">de forma rápida e segura</p>
                    <Link
                        className="text-white font-bold bg-pink-800 rounded-md w-full text-center p-3 hover:bg-pink-600 duration-200 shadow-sm"
                        to={'/finanças'}
                    >
                        Iniciar
                    </Link>
                </div>
            </section>
        </div>
    );
};
