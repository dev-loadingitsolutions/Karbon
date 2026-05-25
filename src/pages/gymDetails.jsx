import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ArrowLeft from '../assets/icons/left-arrow.svg'
import SharIcon from '../assets/icons/shareIcon.svg'
import GymHero from '../components/GymDetails/GymHero'
import GymAbout from '../components/GymDetails/GymAbout'
import GymRulesAmenities from '../components/GymDetails/GymRulesAmenities'
import GymLocation from '../components/GymDetails/GymLocation'

import GymReviews from '../components/GymDetails/GymReviews'

export default function GymDetails() {
    const navigate = useNavigate()
    const [liked, setLiked] = useState(false)

    const handleShare = async () => {
        const shareData = { title: 'Gym Details', text: 'Check this gym', url: window.location.href }
        if (navigator.share) {
            try { await navigator.share(shareData) } catch (e) { /* ignore */ }
        } else if (navigator.clipboard) {
            try { await navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard') } catch (e) { alert('Unable to copy') }
        } else {
            alert(window.location.href)
        }
    }

    return (
        <div className="px-6 pb-8 ">
            <div className="flex py-[17px] items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex h-10 w-10 items-center justify-center cursor-pointer"
                        aria-label="Back"
                    >
                        <img src={ArrowLeft} alt="Back" className="w-4 h-4" />
                    </button>

                    <h1 className="text-[18px] font-bold">Gym Details</h1>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleShare}
                        className="inline-flex h-10  items-center justify-center cursor-pointer"
                        aria-label="Share"
                    >
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 22C15.6667 22 14.9583 21.7083 14.375 21.125C13.7917 20.5417 13.5 19.8333 13.5 19C13.5 18.9 13.525 18.6667 13.575 18.3L6.55 14.2C6.28333 14.45 5.975 14.6458 5.625 14.7875C5.275 14.9292 4.9 15 4.5 15C3.66667 15 2.95833 14.7083 2.375 14.125C1.79167 13.5417 1.5 12.8333 1.5 12C1.5 11.1667 1.79167 10.4583 2.375 9.875C2.95833 9.29167 3.66667 9 4.5 9C4.9 9 5.275 9.07083 5.625 9.2125C5.975 9.35417 6.28333 9.55 6.55 9.8L13.575 5.7C13.5417 5.58333 13.5208 5.47083 13.5125 5.3625C13.5042 5.25417 13.5 5.13333 13.5 5C13.5 4.16667 13.7917 3.45833 14.375 2.875C14.9583 2.29167 15.6667 2 16.5 2C17.3333 2 18.0417 2.29167 18.625 2.875C19.2083 3.45833 19.5 4.16667 19.5 5C19.5 5.83333 19.2083 6.54167 18.625 7.125C18.0417 7.70833 17.3333 8 16.5 8C16.1 8 15.725 7.92917 15.375 7.7875C15.025 7.64583 14.7167 7.45 14.45 7.2L7.425 11.3C7.45833 11.4167 7.47917 11.5292 7.4875 11.6375C7.49583 11.7458 7.5 11.8667 7.5 12C7.5 12.1333 7.49583 12.2542 7.4875 12.3625C7.47917 12.4708 7.45833 12.5833 7.425 12.7L14.45 16.8C14.7167 16.55 15.025 16.3542 15.375 16.2125C15.725 16.0708 16.1 16 16.5 16C17.3333 16 18.0417 16.2917 18.625 16.875C19.2083 17.4583 19.5 18.1667 19.5 19C19.5 19.8333 19.2083 20.5417 18.625 21.125C18.0417 21.7083 17.3333 22 16.5 22ZM16.5 20C16.7833 20 17.0208 19.9042 17.2125 19.7125C17.4042 19.5208 17.5 19.2833 17.5 19C17.5 18.7167 17.4042 18.4792 17.2125 18.2875C17.0208 18.0958 16.7833 18 16.5 18C16.2167 18 15.9792 18.0958 15.7875 18.2875C15.5958 18.4792 15.5 18.7167 15.5 19C15.5 19.2833 15.5958 19.5208 15.7875 19.7125C15.9792 19.9042 16.2167 20 16.5 20ZM4.5 13C4.78333 13 5.02083 12.9042 5.2125 12.7125C5.40417 12.5208 5.5 12.2833 5.5 12C5.5 11.7167 5.40417 11.4792 5.2125 11.2875C5.02083 11.0958 4.78333 11 4.5 11C4.21667 11 3.97917 11.0958 3.7875 11.2875C3.59583 11.4792 3.5 11.7167 3.5 12C3.5 12.2833 3.59583 12.5208 3.7875 12.7125C3.97917 12.9042 4.21667 13 4.5 13ZM16.5 6C16.7833 6 17.0208 5.90417 17.2125 5.7125C17.4042 5.52083 17.5 5.28333 17.5 5C17.5 4.71667 17.4042 4.47917 17.2125 4.2875C17.0208 4.09583 16.7833 4 16.5 4C16.2167 4 15.9792 4.09583 15.7875 4.2875C15.5958 4.47917 15.5 4.71667 15.5 5C15.5 5.28333 15.5958 5.52083 15.7875 5.7125C15.9792 5.90417 16.2167 6 16.5 6Z" fill="#1C1917" />
                        </svg>

                    </button>

                    <button
                        onClick={() => setLiked((s) => !s)}
                        className="inline-flex h-10  items-center justify-center cursor-pointer"
                        aria-label="Like"
                    >
                        {liked ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        )}
                    </button>
                </div>
            </div>

           <GymHero gym={{}} />

           <GymAbout />   

           <GymRulesAmenities />     

           <GymLocation />    

           <GymReviews /> 


        </div>
    )
}
