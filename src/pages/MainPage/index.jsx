import './index.css'
import {PageContainer} from "../../ui-kit/PageContainer/PageContainer.jsx";
import {Link} from "react-router";





export const MainPage = () => {

    return (
        <PageContainer>
            <div className="w-full h-[calc(100vh-80px)] lg:h-[calc(100vh-160px)] flex flex-col justify-center items-center ">
                <h1 className='text-5xl'>Free To Game</h1>
                <div className='flex flex-col w-full p-4 gap-3'>
                    <Link to="/filter?platform=pc" className='border p-4 w-full text-center rounded'>PC GAMES</Link>
                    <Link to="/filter?platform=browser" className='border p-4 w-full text-center rounded'>Browser GAMES</Link>
                </div>
            </div>
        </PageContainer>
)
}