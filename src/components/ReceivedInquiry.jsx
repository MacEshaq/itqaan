import React, { useState } from "react";

const SAMPLE_DATA = [
  {
    id: "INQ-101",
    name: "Tariq Al-Mansoor",
    email: "t.almansoor@gulfdev.com",
    subject: "Commercial Architecture / Mixed-Use",
    message:
      "Planning a 14-story commercial office complex. Looking for structural engineering consultation and blueprint review.",
    date: "10:15 AM",
    unread: true,
  },
  {
    id: "INQ-100",
    name: "Maria Santos",
    email: "+63 917 555 0192",
    subject: "Residential / Modern Villa",
    message:
      "We have a 650 sqm sloped lot and want to build a 2-story contemporary residence. Would love to schedule a site visit.",
    date: "Yesterday",
    unread: false,
  },
];

export default function InquiryInbox({ initialInquiries = SAMPLE_DATA }) {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [selectedId, setSelectedId] = useState(initialInquiries[0]?.id || null);
  const [reply, setReply] = useState("");
  const [sent, setSent] = useState(false);

  const active = inquiries.find((item) => item.id === selectedId);

  const selectMail = (id) => {
    setSelectedId(id);
    setReply("");
    setSent(false);
    setInquiries((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: false } : m)),
    );
  };

  const deleteMail = (id) => {
    const rest = inquiries.filter((m) => m.id !== id);
    setInquiries(rest);
    if (selectedId === id) setSelectedId(rest[0]?.id || null);
  };

  const sendReply = (e) => {
    e.preventDefault();
    if (!reply.trim()) return;
    setSent(true);
    setReply("");
  };

  return (
    <div className="w-full bg-white border border-zinc-200 grid grid-cols-1 md:grid-cols-12 min-h-125 text-[#1a1a1d]">
      {/* Left: Email List */}
      <div className="md:col-span-5 border-r border-zinc-200 divide-y divide-zinc-200 overflow-y-auto max-h-125">
        {inquiries.length === 0 && (
          <p className="p-6 text-xs uppercase tracking-widest text-zinc-400 text-center">
            Inbox Empty
          </p>
        )}
        {inquiries.map((item) => (
          <div
            key={item.id}
            onClick={() => selectMail(item.id)}
            className={`p-4 cursor-pointer transition-colors border-l-4 ${
              item.id === selectedId
                ? "bg-[#fbc02d]/10 border-l-[#fbc02d]"
                : "hover:bg-zinc-50 border-l-transparent"
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span
                className={`text-sm truncate ${item.unread ? "font-bold" : "font-medium"}`}
              >
                {item.unread && (
                  <span className="inline-block w-2 h-2 bg-[#fbc02d] rounded-full mr-2" />
                )}
                {item.name}
              </span>
              <span className="text-[0.7rem] text-zinc-400 shrink-0">
                {item.date}
              </span>
            </div>
            <p className="text-xs font-semibold text-zinc-700 truncate">
              {item.subject}
            </p>
            <p className="text-xs text-zinc-400 truncate font-light mt-0.5">
              {item.message}
            </p>
          </div>
        ))}
      </div>

      {/* Right: Email Viewer */}
      <div className="md:col-span-7 flex flex-col justify-between p-6 bg-zinc-50/40">
        {active ? (
          <>
            <div>
              <div className="flex justify-between items-center border-b border-zinc-200 pb-3 mb-4">
                <span className="text-[0.7rem] uppercase tracking-widest text-zinc-400 font-bold">
                  {active.id} • {active.date}
                </span>
                <button
                  onClick={() => deleteMail(active.id)}
                  className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>

              <h3 className="text-lg font-bold mb-1">{active.subject}</h3>
              <p className="text-xs text-zinc-500 mb-6">
                From:{" "}
                <span className="font-semibold text-[#1a1a1d]">
                  {active.name}
                </span>{" "}
                ({active.email})
              </p>

              <p className="text-sm leading-relaxed text-zinc-700 font-light whitespace-pre-line">
                {active.message}
              </p>
            </div>

            {/* Quick Reply
            <form
              onSubmit={sendReply}
              className="mt-6 pt-4 border-t border-zinc-200"
            >
              {sent ? (
                <p className="text-xs font-bold uppercase tracking-wider text-[#1a1a1d] bg-[#fbc02d]/20 p-3 border-l-4 border-[#fbc02d]">
                  Reply sent to {active.name}
                </p>
              ) : (
                <div className="space-y-2">
                  <textarea
                    rows="2"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder={`Reply to ${active.name}...`}
                    className="w-full bg-white border border-zinc-300 p-2.5 text-sm focus:outline-none focus:border-[#fbc02d] resize-none font-light"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#fbc02d] text-[#1a1a1d] hover:bg-[#1a1a1d] hover:text-[#fbc02d] transition-colors"
                  >
                    Send Reply
                  </button>
                </div>
              )}
            </form> */}
          </>
        ) : (
          <div className="m-auto text-xs uppercase tracking-widest text-zinc-400">
            Select an inquiry to read
          </div>
        )}
      </div>
    </div>
  );
}
