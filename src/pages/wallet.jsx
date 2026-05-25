import { useState } from "react";

const transactions = [
  {
    id: 1,
    type: "credit",
    title: "Credits Added",
    date: "APR 28, 2024",
    time: "10:00 AM",
    amount: +600,
    label: "MANUAL TOP-UP",
  },
  {
    id: 2,
    type: "debit",
    title: "Iron Core Fitness",
    date: "APR 25, 2024",
    time: "06:30 PM",
    amount: -45,
    label: "POWER SESSION",
  },
  {
    id: 3,
    type: "debit",
    title: "Iron Core Fitness",
    date: "APR 22, 2024",
    time: "07:00 AM",
    amount: -45,
    label: "MORNING HIIT",
  },
  {
    id: 4,
    type: "debit",
    title: "Zenith Wellness",
    date: "APR 18, 2024",
    time: "08:15 AM",
    amount: -53,
    label: "YOGA SESSION",
  },
  {
    id: 5,
    type: "credit",
    title: "Credits Added",
    date: "APR 01, 2024",
    time: "12:00 PM",
    amount: +225,
    label: "MONTHLY TOP-UP",
  },
];

const totalCredits = 225;
const creditsLeft = 180;
const progressPct = Math.round((creditsLeft / totalCredits) * 100);

// Icons
const PlusCircleIcon = () => (
 <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.74998 14.2499H10.2499V10.2499H14.2499V8.74998H10.2499V4.74998H8.74998V8.74998H4.74998V10.2499H8.74998V14.2499ZM9.50164 18.9999C8.18771 18.9999 6.95267 18.7506 5.79653 18.2519C4.64039 17.7533 3.63471 17.0765 2.77948 16.2217C1.92426 15.3668 1.2472 14.3616 0.748323 13.206C0.249441 12.0503 0 10.8156 0 9.50164C0 8.18771 0.24933 6.95267 0.74799 5.79653C1.24665 4.64039 1.9234 3.63471 2.77825 2.77948C3.6331 1.92426 4.63833 1.24721 5.79396 0.748323C6.94958 0.249441 8.18436 0 9.49829 0C10.8122 0 12.0473 0.24933 13.2034 0.74799C14.3595 1.24665 15.3652 1.9234 16.2204 2.77825C17.0757 3.6331 17.7527 4.63833 18.2516 5.79396C18.7505 6.94958 18.9999 8.18436 18.9999 9.49829C18.9999 10.8122 18.7506 12.0473 18.2519 13.2034C17.7533 14.3595 17.0765 15.3652 16.2217 16.2204C15.3668 17.0757 14.3616 17.7527 13.206 18.2516C12.0503 18.7505 10.8156 18.9999 9.50164 18.9999ZM9.49996 17.5C11.7333 17.5 13.625 16.725 15.175 15.175C16.725 13.625 17.5 11.7333 17.5 9.49996C17.5 7.26663 16.725 5.37496 15.175 3.82496C13.625 2.27496 11.7333 1.49996 9.49996 1.49996C7.26663 1.49996 5.37496 2.27496 3.82496 3.82496C2.27496 5.37496 1.49996 7.26663 1.49996 9.49996C1.49996 11.7333 2.27496 13.625 3.82496 15.175C5.37496 16.725 7.26663 17.5 9.49996 17.5Z" fill="#1A1C1C"/>
</svg>

);

const ArrowsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1461 19.3L9.99616 18.15L13.5462 14.6L4.69998 5.7538L1.14998 9.3038L0 8.15382L1.41923 6.70382L0.26925 5.55384L2.36925 3.45384L0.969251 2.02307L2.02307 0.969251L3.45384 2.36925L5.55384 0.26925L6.70382 1.41923L8.15382 0L9.3038 1.14998L5.7538 4.69998L14.6 13.5462L18.15 9.99616L19.3 11.1461L17.8807 12.5961L19.0307 13.7461L16.9307 15.8461L18.3307 17.2769L17.2769 18.3307L15.8461 16.9307L13.7461 19.0307L12.5961 17.8807L11.1461 19.3Z" fill="#1A1C1C"/>
</svg>

);

export default function Wallet() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? transactions : transactions.slice(0, 3);

  return (
    <div className="  flex justify-center">
      <div className="w-full max-w-md   pb-12">

        {/* ── Header ── */}
        <div className=" px-5 pt-8 pb-5">
          <p className="text-[10px] font-medium tracking-widest text-[#777777] uppercase mb-1">
            Account Balance
          </p>
          <h1 className="text-[48px] font-normal text-black tracking-tight leading-none mb-5">
            Wallet
          </h1>

          {/* Membership card */}
          <div
            className="rounded-[8px] border-l-[4px] border-[#000] px-[32px] py-[20px] bg-white"
            
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <p className="text-[24px] font-normal text-[#1A1C1C] leading-tight">1-Month</p>
                <p className="text-[24px] font-normal text-[#1A1C1C] leading-tight">Membership</p>
                <p className="text-[14px] text-[#777777] font-medium mt-1">225 credits / month</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="bg-[#E8E8E8] text-[#1A1C1C] text-[10px] font-normal tracking-widest uppercase px-[12px] py-1 rounded-full">
                  ACTIVE
                </span>
                
              </div>
            </div>

            {/* Credits left */}
            <div className="mt-4 mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-[60px] font-bold text-[#1A1C1C] leading-none tracking-tight">
                  {creditsLeft}
                </span>
                <span className="text-[18px] font-normal text-[#777777]">credits left</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full  bg-gray-900 transition-all duration-700"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-4 mt-4">

          {/* ── Next Renewal ── */}
          <div
            className="bg-[#F3F3F3] rounded-[8px] p-[24px]"
           
          >
            <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">
              Next Renewal
            </p>
            <p className="text-[20px] font-black text-[#1A1C1C] leading-tight">May 10</p>
            <p className="text-[12px] text-[#777777] font-normal italic mt-0.5">
              Automatic top-up enabled
            </p>
          </div>

          {/* ── Your Plan ── */}
          <div
            className="bg-[#F3F3F3] rounded-[8px] p-[24px]"
            
          >
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
              Your Plan
            </p>
            <p className="text-[20px] font-semibold text-[#1A1C1C] mb-4">1-Month Membership</p>
            <button className="w-full bg-[#000] text-[#E2E2E2] text-[12px] font-normal tracking-[0.12em] uppercase py-3.5 rounded-[2px] transition-all duration-150 hover:bg-gray-700 active:scale-[0.98]">
              Manage Plan
            </button>
          </div>

          {/* ── Recent Transactions ── */}
          <div className="mt-1">
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-[24px] font-medium text-[#1A1C1C] tracking-tight">
                Recent Transactions
              </h2>
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[12px] font-medium text-[#777777] border-b border-[#777] hover:text-gray-900 transition-colors"
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>

            <div
              className="  overflow-hidden "
              
            >
              {visible.map((tx, i) => (
                <div
                  key={tx.id}
                  className="flex items-center gap-3  py-3"
                  style={{ animation: `fadeUp 0.3s ease both`, animationDelay: `${i * 0.05}s` }}
                >
                  {/* Icon */}
                  <div className="w-9 h-9  rounded-[2px] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                    {tx.type === "credit" ? <PlusCircleIcon /> : <ArrowsIcon />}
                  </div>

                  {/* Title + date */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[16px] font-normal text-[#1A1C1C] truncate">{tx.title}</p>
                    <p className="text-[12px] text-[#777777] font-normal">
                      {tx.date} • {tx.time}
                    </p>
                  </div>

                  {/* Amount + label */}
                  <div className="text-right flex-shrink-0">
                    <p
                      className={`text-[16px] font-bold text-[#000000] ${
                        tx.amount > 0 ? "text-[#000]" : "text-gray-900"
                      }`}
                    >
                      {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
                    </p>
                    <p className="text-[10px] font-bold tracking-widest text-[#777777] uppercase">
                      {tx.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
