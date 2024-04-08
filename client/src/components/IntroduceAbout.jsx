const About = () => {
    return (
        <>
        <div className="w-full my-32 bg-white">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center text-gray-900">
                    <h2 className="text-5xl text-green-500 font-bold">Welon는 이런 기술을 써요</h2>
                    <hr />
                    <br></br>
                    <p>WaPT의 팀이 처음에 이 서비스를 개발하게 된 계기는 사슴 스택 일명 ELK Stack을 사용하기 위해 계획하였으나,</p>
                    <p>ELK Stack을 사용하기 위해서는 대용량의 데이터가 필요한 점에 한계를 느꼈습니다.</p>
                    <p>따라서, 적은 데이터로도 검색 엔진을 사용할 수 있는 음악 웹 애플리케이션을 주제로 선정하게 되었습니다.</p>
                    <p>저희팀은 ELK Stack 중에 Elasticsearch를 사용하였고 자연어 처리하기 위한 Tokenizer로는 nori를 사용하였습니다.</p>
                    <p>이제 저희 팀의 기술 스택을 소개하겠습니다.</p>
                    <br></br>
                </div>
                <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>Elasticsearch</p>
                        <p className='text-gray-400 mt-2'>분산형 검색 엔진</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>MySQL</p>
                        <p className='text-gray-400 mt-2'>데이터 베이스</p>
                    </div>
                    <div  className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>Nest.Js</p>
                        <p className='text-gray-400 mt-2'>서버 프레임워크</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-green-500'>React</p>
                        <p className='text-gray-400 mt-2'>클라이언트 서버 프레임워크</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-green-500'>Tailwind</p>
                        <p className='text-gray-400 mt-2'>CSS 프레임워크</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-green-500'>Ant Design</p>
                        <p className='text-gray-400 mt-2'>UI 프레임워크</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;