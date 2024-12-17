import './index.css'
import { CiImageOn } from "react-icons/ci";
export const GameCardSkeleton = () => {
    return (
        <div className="relative game-card-skeleton cursor-pointer active:scale-100 bg-neutral-700 overflow-hidden rounded shadow-md shadow-neutral-800 hover:scale-105 hover:shadow-2xl hover:shadow-neutral-800 transition-all duration-100">
            <div className='bg-neutral-600 h-40 flex items-center justify-center'>
                <CiImageOn size={40} className='text-neutral-500'/>
            </div>
            <div className='flex flex-col p-3 gap-3'>
                <div className='w-10/12 h-4 bg-neutral-600 rounded'></div>
                <div className='flex gap-2 flex-col'>
                    <div className='w-3/5 h-2 bg-neutral-600 rounded'></div>
                    <div className='w-3/5 h-2 bg-neutral-600 rounded'></div>
                    <div className='w-3/5 h-2 bg-neutral-600 rounded'></div>
                </div>
            </div>
                <div className='w-full absolute bottom-0'>
                    <div className='flex justify-between p-3'>
                        <div className='text-neutral-500'>+</div>
                        <div className='bg-neutral-600 w-16 rounded'></div>
                    </div>
                    <div className='h-5 bg-neutral-600'></div>
                </div>
        </div>
    )
}