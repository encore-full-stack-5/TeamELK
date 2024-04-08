const Hero = () => {
    return (
        <>
        <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="text-gray-900 flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl text-green-500">Welon는 </p>
                    <h1 className="text-5xl py-3 md:text-6xl font-bord text-green-500">음악 검색 어플입니다.</h1>
                    <p className="text-2xl py-3 md:text-2xl text-green-500">플레이리스트를 통해 나만의 음악 장르를 저장하세요!</p>
                    <h1 className="text-5xl py-3 md:text-5xl font-bord text-green-500">음악 추천은 내가 모르는 새로운 장르를 경험해요!</h1>
                    <button className="bg-gray-900 text-green-500 py-3 px-6 my-4">
                        <a href="/login" className="text-sm font-semibold leading-6">
                            Get Started
                        </a>
                    </button>
                </div>
                <div>
                    <img src="../../public/image.png" alt="/"/>
                </div>
                <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-6%]
                                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100
                                border border-slate-300 rounded-xl text-center shadow-xl">
                    <h1 className="text-green-500 font-bord">Introduce</h1>
                    <hr></hr>
                    <br></br>
                    <div className="">
                        <p className="text-gray-800">Welon는 음악 재생 웹 애플리케이션입니다.</p>
                        <p className="text-gray-800">Welon는 사용자에게 노래 추천 기능 및 검색하는 서비스를 구현하였습니다.</p>
                        <p className="text-gray-800">또한, 사용자가 본인만의 음악을 모아들을 수 있도록 플레이리스트 서비스를 제공합니다.</p>
                        <p className="text-gray-800">Welon는 어떤 음악을 들을지 고민하는 사용자를 위해 노래 추천 서비스를 제공합니다.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;