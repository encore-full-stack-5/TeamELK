import { Image } from 'antd';

const Skill = () => {
return (
        <div name='support' className='w-full mt-24 bg-zinc-200'>
            <div className='max-w-[1240px] mx-auto text-gray-900 relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-gray-900 uppercase text-center'>기능 구현 및 팀원 소개</h2>
                    <h3 className='text-4xl font-bold py-6 text-center'>기능 구현에 대한 ER 다이어그램과 Welon의 흐름도를 소개하겠습니다.</h3>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-6'>ER 다이어그램</h3>
                            <Image width={300} src="../../public/er.png" />
                        </div>  
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-6'>Welon 흐름도</h3>
                            <Image width={300} src="../../public/figma.png" />
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-6'>팀원 소개</h3>
                            <div className="flex items-center">
                                <img src="../../public/삐삐.jpg" className="w-10 h-10 rounded-full mx-10" />
                                <span className='text-gray-600 text-lg font-semibold mx-2'>
                                    김부자
                                </span>
                            </div>
                            <div className="flex items-center">
                                <img src="../../public/sehyon.png" className="w-10 h-10 rounded-full mx-10" />
                                <span className='text-gray-600 text-lg font-semibold mx-2'>
                                    김세현
                                </span>
                            </div>
                            <div className="flex items-center">
                                <img src="../../public/jammini.png" className="w-10 h-10 rounded-full mx-10" />
                                <span className='text-gray-600 text-lg font-semibold mx-2'>
                                    김재민
                                </span>
                            </div>
                            <div className="flex items-center">
                                <img src="../../public/boondo.png" className="w-10 h-10 rounded-full mx-10" />
                                <span className='text-gray-600 text-lg font-semibold mx-2'>
                                    박분도
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;