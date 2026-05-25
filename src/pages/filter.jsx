import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import emojiSmile from '../assets/icons/hugeicons_kid.png'
import StarRate from '../assets/icons/si_star-fill.svg'
import YogaIcon from '../assets/icons/yoga.png'

const timeFilters = ["Open Now", "24 Hours", "Morning", "Evening"];
const creditOptions = ["<40 JOD", "40–70 JOD", "70+ JOD"];
const ratingOptions = ["All", "5", "4", "3", "2", "1"];
const classTypes = [
    {
        label: "Yoga", icon: <svg width="11" height="10" viewBox="0 0 11 10" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.21667 9.33333C1.925 9.33333 1.67708 9.23125 1.47292 9.02708C1.26875 8.82292 1.16667 8.575 1.16667 8.28333C1.16667 8.07917 1.225 7.88715 1.34167 7.70729C1.45833 7.52743 1.61389 7.39861 1.80833 7.32083L4.08333 6.41667V5.10417C3.55833 5.71667 2.94826 6.18576 2.25312 6.51146C1.55799 6.83715 0.806944 7 0 7V5.83333C0.661111 5.83333 1.26146 5.69722 1.80104 5.425C2.34063 5.15278 2.82917 4.76389 3.26667 4.25833L4.05417 3.325C4.17083 3.18889 4.30694 3.08681 4.4625 3.01875C4.61806 2.95069 4.78333 2.91667 4.95833 2.91667H5.54167C5.71667 2.91667 5.88194 2.95069 6.0375 3.01875C6.19306 3.08681 6.32917 3.18889 6.44583 3.325L7.23333 4.25833C7.67083 4.76389 8.15938 5.15278 8.69896 5.425C9.23854 5.69722 9.83889 5.83333 10.5 5.83333V7C9.69306 7 8.94201 6.83715 8.24687 6.51146C7.55174 6.18576 6.94167 5.71667 6.41667 5.10417V6.41667L8.69167 7.32083C8.88611 7.39861 9.04167 7.52743 9.15833 7.70729C9.275 7.88715 9.33333 8.07917 9.33333 8.28333C9.33333 8.575 9.23125 8.82292 9.02708 9.02708C8.82292 9.23125 8.575 9.33333 8.28333 9.33333H4.08333V9.04167C4.08333 8.78889 4.16597 8.57986 4.33125 8.41458C4.49653 8.24931 4.70556 8.16667 4.95833 8.16667H6.70833C6.79583 8.16667 6.86632 8.13993 6.91979 8.08646C6.97326 8.03299 7 7.9625 7 7.875C7 7.7875 6.97326 7.71701 6.91979 7.66354C6.86632 7.61007 6.79583 7.58333 6.70833 7.58333H4.95833C4.55 7.58333 4.20486 7.72431 3.92292 8.00625C3.64097 8.28819 3.5 8.63333 3.5 9.04167V9.33333H2.21667ZM5.25 2.33333C4.92917 2.33333 4.65451 2.2191 4.42604 1.99063C4.19757 1.76215 4.08333 1.4875 4.08333 1.16667C4.08333 0.845833 4.19757 0.571181 4.42604 0.342708C4.65451 0.114236 4.92917 0 5.25 0C5.57083 0 5.84549 0.114236 6.07396 0.342708C6.30243 0.571181 6.41667 0.845833 6.41667 1.16667C6.41667 1.4875 6.30243 1.76215 6.07396 1.99063C5.84549 2.2191 5.57083 2.33333 5.25 2.33333Z" fill="#777777" />
        </svg>
    },
    {
        label: "HIIT", icon: <svg width="10" height="12" viewBox="0 0 10 12" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.82083 9.45L6.83958 5.83333H4.50625L4.92917 2.52292L2.23125 6.41667H4.25833L3.82083 9.45ZM2.33333 11.6667L2.91667 7.58333H0L5.25 0H6.41667L5.83333 4.66667H9.33333L3.5 11.6667H2.33333Z" fill="#E2E2E2" />
        </svg>
    },
    {
        label: "Pilates", icon: <svg width="18" height="20" viewBox="0 0 18 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6.50002C8.67917 6.50002 8.40451 6.38578 8.17604 6.15731C7.94757 5.92884 7.83333 5.65419 7.83333 5.33335C7.83333 5.01252 7.94757 4.73787 8.17604 4.5094C8.40451 4.28092 8.67917 4.16669 9 4.16669C9.32083 4.16669 9.59549 4.28092 9.82396 4.5094C10.0524 4.73787 10.1667 5.01252 10.1667 5.33335C10.1667 5.65419 10.0524 5.92884 9.82396 6.15731C9.59549 6.38578 9.32083 6.50002 9 6.50002ZM7.25 15.8334V8.25002C6.66667 8.20141 6.07361 8.12849 5.47083 8.03127C4.86806 7.93405 4.29444 7.81252 3.75 7.66669L4.04167 6.50002C4.8 6.70419 5.60694 6.85245 6.4625 6.94481C7.31806 7.03717 8.16389 7.08335 9 7.08335C9.83611 7.08335 10.6819 7.03717 11.5375 6.94481C12.3931 6.85245 13.2 6.70419 13.9583 6.50002L14.25 7.66669C13.7056 7.81252 13.1319 7.93405 12.5292 8.03127C11.9264 8.12849 11.3333 8.20141 10.75 8.25002V15.8334H9.58333V12.3334H8.41667V15.8334H7.25Z" fill="#777777" />
        </svg>
    },
    {
        label: "Boxing", icon: <svg width="11" height="13" viewBox="0 0 11 13" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.08333 12.25L3.79167 7L1.93958 5.93542L1.73542 6.69375L2.91667 8.75L1.91042 9.33333L0.466667 6.85417L1.16667 4.34583L4.52083 2.42083L2.91667 0.816667L3.73333 0L6.41667 2.66875L4.31667 3.87917L5.01667 4.49167L9.8 0.583333L10.5 1.4L5.54167 6.41667L5.25 12.25H4.08333ZM1.16667 3.5C0.845833 3.5 0.571181 3.38576 0.342708 3.15729C0.114236 2.92882 0 2.65417 0 2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667C1.4875 1.16667 1.76215 1.2809 1.99063 1.50937C2.2191 1.73785 2.33333 2.0125 2.33333 2.33333C2.33333 2.65417 2.2191 2.92882 1.99063 3.15729C1.76215 3.38576 1.4875 3.5 1.16667 3.5Z" fill="#777777" />
        </svg>
    },
    
];
const facilitiesList = ["Showers", "Pool", "Parking", "Cafe", "Sauna"];
const locations = ["Abdali, Amman", "Sweifieh, Amman", "Jabal Amman", "Zahran, Amman", "Downtown Amman"];

// ── Icons ──
const StarIcon = ({ filled }) => (
    <svg width="11" height="11" viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const ChevronIcon = ({ open }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round"
        style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const PinIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);



// ── Toggle switch ──
const Toggle = ({ on, onToggle }) => (
    <button
        onClick={onToggle}
        className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${on ? "bg-gray-900" : "bg-gray-300"}`}
    >
        <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${on ? "translate-x-6" : "translate-x-0"}`}
        />
    </button>
);

// ── Range slider ──
const RangeSlider = ({ value, onChange, min, max }) => {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <div className="relative w-full">
            <div className="relative h-[4px] bg-[#777777] ">
                <div className="absolute h-full bg-[gray-900] " style={{ width: `${pct}%` }} />
            </div>
            <input
                type="range" min={min} max={max} value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
                style={{ height: "24px", top: "-6px" }}
            />
            <div
                className="absolute w-5 h-5 bg-gray-900 rounded-full border-2  shadow-md -top-[7px]"
                style={{ left: `calc(${pct}% - 10px)`, pointerEvents: "none" }}
            />
        </div>
    );
};

// ── Section wrapper ──
function Section({ label, right, children }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2 px-0.5">
                <p className="text-[10px] font-bold tracking-widest text-[#777777] uppercase">{label}</p>
                {right}
            </div>
            {children}
        </div>
    );
}

// ── Chip ──
function Chip({ label, active, onClick, flex }) {
    return (
        <button
            onClick={onClick}
            className={`${flex ? "flex-1" : ""} px-[12px] py-2.5 rounded-[8px] border text-[17px] font-normal tracking-wide transition-all duration-150 active:scale-95 whitespace-nowrap
        ${active
                    ? "bg-black  text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
        >
            {label}
        </button>
    );
}

// ── Main component ──
export default function Filter() {
    const navigate = useNavigate();

    const [selectedTime, setSelectedTime] = useState("Open Now");
    const [selectedGender, setSelectedGender] = useState("Both");
    const [location, setLocation] = useState("Abdali, Amman");
    const [locationOpen, setLocationOpen] = useState(false);
    const [kidsOnly, setKidsOnly] = useState(true);
    const [distance, setDistance] = useState(15);
    const [selectedCredit, setSelectedCredit] = useState("40–70 JOD");
    const [selectedRating, setSelectedRating] = useState("All");
    const [selectedClasses, setSelectedClasses] = useState(["HIIT"]);
    const [facilities, setFacilities] = useState({
        Showers: true, Pool: false, Parking: true, Cafe: false, Sauna: false,
    });

    const toggleClass = (label) =>
        setSelectedClasses((prev) =>
            prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
        );

    const toggleFacility = (f) =>
        setFacilities((prev) => ({ ...prev, [f]: !prev[f] }));

    const clearAll = () => {
        setSelectedTime("Open Now");
        setSelectedGender("Both");
        setLocation("Abdali, Amman");
        setLocationOpen(false);
        setKidsOnly(false);
        setDistance(15);
        setSelectedCredit("40–70 JOD");
        setSelectedRating("All");
        setSelectedClasses([]);
        setFacilities({ Showers: false, Pool: false, Parking: false, Cafe: false, Sauna: false });
    };

    return (
        <div className=" bg-gray-50 flex justify-center">
            <div className="w-full max-w-md bg-gray-50  flex flex-col pb-28">

                {/* ── Header ── */}
                <div className="flex items-center justify-between gap-4 px-4 pt-6 pb-2">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="inline-flex h-10 w-10 items-center justify-center cursor-pointer text-slate-900 transition hover:bg-slate-100 rounded-full"
                            aria-label="Close filter"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <h1 className="text-[20px] font-bold tracking-[0.24em] text-slate-900">
                            Filter
                        </h1>
                    </div>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); clearAll(); }}
                        className="text-[14px] font-normal uppercase text-[#737373] hover:text-gray-900 transition-colors"
                    >
                        Clear all
                    </a>
                </div>

                {/* ── Scrollable content ── */}
                <div className="flex-1 mt-4 overflow-y-auto px-4 pt-4 flex flex-col gap-5">

                    {/* GENDER */}
                    <Section label="Gender">
                        <div className="flex  gap-2">
                            {["Male", "Female", "Both"].map((gender) => (
                                <button
                                    key={gender}
                                    onClick={() => setSelectedGender(gender)}
                                    className={`flex-1 px-[38px] py-3 cursor-pointer rounded-[4px] text-[14px] font-medium tracking-wide transition-all duration-150 active:scale-95 ${selectedGender === gender
                                        ? "bg-[#000] text-white"
                                        : "bg-[#E8E8E8] text-[#1A1C1C]"
                                        }`}
                                >
                                    {gender}
                                </button>
                            ))}
                        </div>
                    </Section>

                    {/* RATING / TIME */}
                    <Section label="Rating">
                        <div className="flex flex-wrap gap-2">
                            {timeFilters.map((t) => (
                                <Chip key={t} label={t} active={selectedTime === t} onClick={() => setSelectedTime(t)} />
                            ))}
                        </div>
                    </Section>

                    {/* LOCATION */}
                    <Section label="Location">
                        <div className="relative">
                            <button
                                onClick={() => setLocationOpen(!locationOpen)}
                                className="w-full bg-white border border-gray-200 rounded-[10px] px-4 py-4 flex items-center gap-2 text-left transition hover:border-gray-300"
                            >
                                <PinIcon />
                                <span className="flex-1 text-[14px] font-semibold text-gray-800">{location}</span>
                                <ChevronIcon open={locationOpen} />
                            </button>
                            {locationOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-[10px] overflow-hidden z-10 shadow-lg">
                                    {locations.map((loc) => (
                                        <button
                                            key={loc}
                                            onClick={() => { setLocation(loc); setLocationOpen(false); }}
                                            className={`w-full text-left px-4 py-3 text-[14px] font-medium transition hover:bg-gray-50 ${loc === location ? "text-gray-900 font-bold" : "text-gray-600"}`}
                                        >
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Section>

                    {/* KIDS FRIENDLY */}
                    <Section label="Kids Friendly Gyms">
                        <div className="bg-white border border-gray-200 rounded-[10px] px-4 py-3.5 flex items-center gap-3">
                            <img src={emojiSmile} alt="Kids Friendly" />
                            <span className="flex-1 text-[14px] font-semibold text-gray-800">Kids Friendly</span>
                            <Toggle on={kidsOnly} onToggle={() => setKidsOnly(!kidsOnly)} />
                        </div>
                    </Section>

                    {/* DISTANCE */}
                    <Section label="Distance" right={<span className="text-[14px] font-bold text-gray-900">{distance} km</span>}>
                        <div className=" rounded-[10px] px-4 pt-4 pb-5">
                            <RangeSlider value={distance} onChange={setDistance} min={1} max={50} />
                            <div className="flex justify-between mt-3">
                                <span className="text-[10px] font-medium tracking-widest text-[#777777] uppercase">1 KM</span>
                                <span className="text-[10px] font-medium tracking-widest text-[#777777] uppercase">50 KM</span>
                            </div>
                        </div>
                    </Section>

                    {/* CREDIT RANGE */}
                    <Section label="Credit Range">
                        <div className="flex gap-2">
                            {creditOptions.map((c) => (
                                <Chip key={c} label={c} active={selectedCredit === c} onClick={() => setSelectedCredit(c)} flex />
                            ))}
                        </div>
                    </Section>

                    {/* RATING STARS */}
                    <Section label="Rating">
                        <div className="flex gap-2 flex-wrap">
                            {ratingOptions.map((r) => (
                                <button
                                    key={r}
                                    onClick={() => setSelectedRating(r)}
                                    className={`flex items-center gap-1 px-3 py-2 rounded-[8px] border text-[16px] font-medium transition-all duration-150 active:scale-95
                    ${selectedRating === r
                                            ? "bg-[#000] text-white border-gray-900"
                                            : "bg-white text-[#1A1C1C] border-gray-200 hover:border-gray-400"
                                        }`}
                                >
                                    {r === "All" ? "All" : (
                                        <>
                                            {r}
                                            <span className={selectedRating === r ? "text-[#9D9D9D]" : "text-[#9D9D9D]"}>
                                                <img src={StarRate} alt={`${r} stars`} className="w-4 h-4" />
                                            </span>
                                        </>
                                    )}
                                </button>
                            ))}
                        </div>
                    </Section>

                    {/* CLASS TYPE */}
                    <Section label="Class Type">
                        <div className="grid grid-cols-2 gap-2">
                            {classTypes.map((c) => {
                                const active = selectedClasses.includes(c.label);
                                return (
                                    <button
                                        key={c.label}
                                        onClick={() => toggleClass(c.label, c.icon)}
                                        className={`flex items-center justify-between px-4 py-[16px] rounded-[8px] border text-[14px] font-bold transition-all duration-150 active:scale-95
                      ${active
                                                ? "bg-[#000] text-white border-gray-900"
                                                : "bg-white text-[#1A1C1C] border-gray-200 hover:border-gray-400"
                                            }`}
                                    >
                                        <span>{c.label}</span>
                                        <span className="text-white">{c.icon}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </Section>

                    {/* FACILITIES */}
                    <Section label="Facilities">
                        <div className="flex flex-wrap gap-2">
                            {facilitiesList.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => toggleFacility(f)}
                                    className={`flex items-center gap-[12px] px-[16px] py-[8px] rounded-[8px] border text-[14px] font-medium transition-all duration-150 active:scale-95
                    ${facilities[f]
                                            ? ""
                                            : "border border-gray-200 hover:border-gray-400"
                                        }`}
                                >
                                    <span className={`w-[18px] h-[18px] rounded flex items-center justify-center border flex-shrink-0 ${facilities[f] ? "bg-[#000] text-white border-white" : "border-gray-300"}`}>
                                        {facilities[f] && (
                                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="2 6 5 9 10 3" />
                                            </svg>
                                        )}
                                    </span>
                                    {f}
                                </button>
                            ))}
                        </div>
                    </Section>

                </div>

                {/* ── Fixed bottom CTA ── */}
                <div className="fixed bottom-0 left-0 right-0 flex justify-center pointer-events-none">
                    <div className="w-full max-w-md px-4 pb-6 pt-3 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pointer-events-auto">
                        <button className="w-full bg-[#000] text-white text-[14px] font-bold tracking-[0.1em] uppercase py-[16px] rounded-[4px] transition-all duration-150 hover:bg-[#1A1C1C] active:scale-[0.98] ">
                            Show 142 Results
                        </button>
                    </div>
                </div>

            </div>

            <style>{`
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; }
        input[type=range]::-moz-range-thumb { appearance: none; }
      `}</style>
        </div>
    );
}
