import { useState } from "react";
import GymInterior from "../../assets/images/gym-Interior.png";
import KarbonIcon from "../../assets/icons/K-vector.png";

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.9125 9.5L2.725 5.9875L0 3.625L3.6 3.3125L5 0L6.4 3.3125L10 3.625L7.275 5.9875L8.0875 9.5L5 7.6375L1.9125 9.5Z" fill="#E2E2E2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.30008 10.3667L11.0667 6.60001L10.1167 5.65001L7.30008 8.46668L5.90008 7.06668L4.95008 8.01668L7.30008 10.3667ZM8.00008 14.6667C6.45564 14.2778 5.18075 13.3916 4.17541 12.008C3.17008 10.6245 2.66719 9.08845 2.66675 7.40001V3.33334L8.00008 1.33334L13.3334 3.33334V7.40001C13.3334 9.0889 12.8307 10.6251 11.8254 12.0087C10.8201 13.3922 9.54497 14.2782 8.00008 14.6667Z" fill="#1A1C1C" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_122_397)">
      <path d="M20.0001 10.0613C20.0001 4.50378 15.5226 -0.0012207 10.0001 -0.0012207C4.47506 2.9297e-05 -0.00244141 4.50378 -0.00244141 10.0625C-0.00244141 15.0838 3.65506 19.2463 8.43506 20.0013V12.97H5.89756V10.0625H8.43756V7.84378C8.43756 5.32253 9.93131 3.93003 12.2151 3.93003C13.3101 3.93003 14.4538 4.12628 14.4538 4.12628V6.60128H13.1926C11.9513 6.60128 11.5638 7.37753 11.5638 8.17378V10.0613H14.3363L13.8938 12.9688H11.5626V20C16.3426 19.245 20.0001 15.0825 20.0001 10.0613Z" fill="#1A1C1C" />
    </g>
    <defs>
      <clipPath id="clip0_122_397">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8567 1.66669C11.7942 1.66919 12.2701 1.67419 12.6809 1.68585L12.8426 1.69169C13.0292 1.69835 13.2134 1.70669 13.4359 1.71669C14.3226 1.75835 14.9276 1.89835 15.4584 2.10419C16.0084 2.31585 16.4717 2.60252 16.9351 3.06502C17.359 3.48146 17.6869 3.98541 17.8959 4.54169C18.1017 5.07252 18.2417 5.67752 18.2834 6.56502C18.2934 6.78669 18.3017 6.97085 18.3084 7.15835L18.3134 7.32002C18.3259 7.73002 18.3309 8.20585 18.3326 9.14335L18.3334 9.76502V10.8567C18.3354 11.4645 18.329 12.0724 18.3142 12.68L18.3092 12.8417C18.3026 13.0292 18.2942 13.2134 18.2842 13.435C18.2426 14.3225 18.1009 14.9267 17.8959 15.4584C17.6869 16.0146 17.359 16.5186 16.9351 16.935C16.5186 17.3589 16.0147 17.6868 15.4584 17.8959C14.9276 18.1017 14.3226 18.2417 13.4359 18.2834L12.8426 18.3084L12.6809 18.3134C12.2701 18.325 11.7942 18.3309 10.8567 18.3325L10.2351 18.3334H9.14423C8.53612 18.3355 7.928 18.3291 7.32007 18.3142L7.1584 18.3092C6.96058 18.3017 6.76279 18.2931 6.56507 18.2834C5.6784 18.2417 5.0734 18.1017 4.54173 17.8959C3.98576 17.6867 3.4821 17.3588 3.0659 16.935C2.64169 16.5187 2.31349 16.0147 2.10423 15.4584C1.8984 14.9275 1.7584 14.3225 1.71673 13.435L1.69173 12.8417L1.68757 12.68C1.67221 12.0724 1.66526 11.4645 1.66673 10.8567V9.14335C1.66443 8.53552 1.67054 7.92768 1.68507 7.32002L1.6909 7.15835C1.69757 6.97085 1.7059 6.78669 1.7159 6.56502C1.75757 5.67752 1.89757 5.07335 2.1034 4.54169C2.31315 3.98519 2.64192 3.48122 3.06673 3.06502C3.48269 2.64131 3.98606 2.31341 4.54173 2.10419C5.0734 1.89835 5.67757 1.75835 6.56507 1.71669C6.78673 1.70669 6.97173 1.69835 7.1584 1.69169L7.32007 1.68669C7.92773 1.67188 8.53556 1.66549 9.1434 1.66752L10.8567 1.66669ZM10.0001 5.83335C8.895 5.83335 7.83519 6.27234 7.05379 7.05374C6.27239 7.83514 5.8334 8.89495 5.8334 10C5.8334 11.1051 6.27239 12.1649 7.05379 12.9463C7.83519 13.7277 8.895 14.1667 10.0001 14.1667C11.1051 14.1667 12.1649 13.7277 12.9463 12.9463C13.7277 12.1649 14.1667 11.1051 14.1667 10C14.1667 8.89495 13.7277 7.83514 12.9463 7.05374C12.1649 6.27234 11.1051 5.83335 10.0001 5.83335ZM10.0001 7.50002C10.3284 7.49997 10.6535 7.56458 10.9568 7.69016C11.2601 7.81575 11.5358 7.99985 11.768 8.23196C12.0001 8.46407 12.1843 8.73963 12.31 9.04293C12.4357 9.34622 12.5004 9.6713 12.5005 9.9996C12.5005 10.3279 12.4359 10.653 12.3103 10.9563C12.1848 11.2597 12.0007 11.5353 11.7685 11.7675C11.5364 11.9997 11.2609 12.1839 10.9576 12.3096C10.6543 12.4352 10.3292 12.5 10.0009 12.5C9.33786 12.5 8.70197 12.2366 8.23313 11.7678C7.76429 11.2989 7.5009 10.6631 7.5009 10C7.5009 9.33698 7.76429 8.70109 8.23313 8.23225C8.70197 7.76341 9.33786 7.50002 10.0009 7.50002M14.3759 4.58335C14.0996 4.58335 13.8347 4.6931 13.6393 4.88845C13.444 5.0838 13.3342 5.34875 13.3342 5.62502C13.3342 5.90129 13.444 6.16624 13.6393 6.36159C13.8347 6.55694 14.0996 6.66669 14.3759 6.66669C14.6522 6.66669 14.9171 6.55694 15.1125 6.36159C15.3078 6.16624 15.4176 5.90129 15.4176 5.62502C15.4176 5.34875 15.3078 5.0838 15.1125 4.88845C14.9171 4.6931 14.6522 4.58335 14.3759 4.58335Z" fill="#1A1C1C"/>
</svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1667 8.09167C19.2079 6.89888 18.947 5.71502 18.4083 4.65C18.0428 4.213 17.5356 3.9181 16.975 3.81667C14.6563 3.6057 12.328 3.51947 10 3.55834C7.68055 3.51916 5.36065 3.60261 3.05 3.80834C2.59319 3.89144 2.17043 4.10571 1.83334 4.425C1.08334 5.11667 1 6.3 0.916668 7.3C0.79503 9.09795 0.79503 10.9021 0.916668 12.7C0.941088 13.2628 1.02489 13.8215 1.16667 14.3667C1.26715 14.7876 1.47044 15.177 1.75834 15.5C2.09773 15.8362 2.53032 16.0627 3 16.15C4.79655 16.3723 6.60684 16.4642 8.41667 16.425C11.3333 16.4667 13.8917 16.425 16.9167 16.1917C17.3975 16.1087 17.842 15.8821 18.1917 15.5417C18.4247 15.3081 18.5989 15.0225 18.7 14.7083C18.9977 13.7938 19.1441 12.8367 19.1333 11.875C19.1667 11.4083 19.1667 8.59167 19.1667 8.09167ZM8.11667 12.375V7.21667L13.05 9.80834C11.6667 10.575 9.84167 11.4417 8.11667 12.375Z" fill="#1A1C1C"/>
</svg>
);

const socials = [
  { label: "FACEBOOK", icon: <FacebookIcon />, href: "#" },
  { label: "INSTAGRAM", icon: <InstagramIcon />, href: "#" },
  { label: "TWITTER", icon: <XIcon />, href: "#" },
  { label: "YOUTUBE", icon: <YoutubeIcon />, href: "#" },
];

export default function GymHero({ gym = {} }) {
  const {
    name = "Iron Core Fitness",
    status = "OPEN",
    type = "MIXED",
    rating = 4.6,
    distance = "1.2 km away",
    credits = 53,
    hoursFrom = "6 AM",
    hoursTo = "11 PM",
    image = GymInterior,
    verified = true,
  } = gym;

  return (
    <div className=" w-full px-[12px] max-w-md mx-auto">

      {/* Hero image */}
      <div className="relative overflow-hidden" style={{ borderRadius: "8px" }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(20%) brightness(0.88)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 60%)" }} />

        {/* Status badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white text-gray-900 text-[10px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full shadow-sm">
            {status}
          </span>
          <span className="bg-white text-gray-900 text-[10px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full shadow-sm">
            {type}
          </span>
        </div>
      </div>



      {/* Name + verified + rating */}
      <div className="px-2 pt-5 pb-4">
        <div className="flex items-center gap-3 flex-wrap mb-2">
          <h1 className="text-[30px] font-semibold text-gray-900 tracking-tight leading-tight">
            {name}
          </h1>
          {verified && (
            <span className="flex items-center gap-1 border border-black text-[#1A1C1C] text-[12px] font-bold px-[10px] py-1 rounded-[5px]">
              <ShieldIcon />
              Verified
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 bg-black text-white text-[10px] font-medium px-2 py-0.5 rounded-[2px]">
            <StarIcon />
            {rating}
          </span>
          <span className="text-[12px] font-medium text-[#474747]">{distance}</span>
        </div>
      </div>

      {/* Divider */}


      {/* Visit price + Working hours */}
      <div className="grid grid-cols-2  gap-4">
        <div className="bg-[#F3F3F3] rounded-[8px] px-4 py-[20px]">
          <p className="text-[10px] font-medium tracking-widest text-[#777777] uppercase mb-2">
            Visit Price
          </p>
          <div className="flex items-center gap-1.5">
            <img src={KarbonIcon} alt="Karbon Icon" className="w-4 h-4" />
            <span className="text-[18px] font-bold text-[#1A1C1C]">{credits} credits</span>
            <span className="text-[12px] font-normal text-gray-400">/visit</span>
          </div>
        </div>

        <div className="bg-[#F3F3F3] rounded-[8px] px-4 py-[20px]">
          <p className="text-[10px] font-medium tracking-widest text-[#777777] uppercase mb-2">
            Working Hours
          </p>
          <p className="text-[20px] font-normal text-[#1A1C1C] leading-tight">
            {hoursFrom} - {hoursTo}
          </p>
        </div>
      </div>



      {/* Social links */}
      <div className="grid grid-cols-4 px-2 py-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            onClick={(e) => e.preventDefault()}
            className="flex flex-col items-center gap-4 py-2 rounded-2xl transition-all duration-150 hover:bg-gray-50 active:scale-95"
          >
            <span className=" bg-[#F3F3F3] rounded-[8px] p-[14px] text-gray-800">{s.icon}</span>
            <span className="text-[10px] font-semibold tracking-widest text-[#474747] uppercase">
              {s.label}
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}
