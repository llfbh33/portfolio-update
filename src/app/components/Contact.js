'use client';

import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState("");

    let messageOptions = [
        "",
        "...sending",
        "Thank you for reaching out, I will be in touch soon!",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(messageOptions[1]);

        const form = e.target;
        const data = new FormData(form);

        await fetch("https://formspree.io/f/xlgobqog", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        setMessage(messageOptions[2]);
        form.reset();
    }

    return (
        <div style={{ maxWidth: "2000px" }}>
            <div style={{ width: "100%" }}>
                <p>
                    If you are interested in working together, what I have been working on
                    recently, or just want to chat, feel free to reach out! I am always
                    open to connecting with new people and exploring new opportunities.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "20px",
                }}
            >
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        gap: "12px",
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        style={{
                            width: "50%",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid rgba(255,255,255,0.2)",
                            background: "rgba(255,255,255,0.06)",
                            color: "#fff",
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        style={{
                            width: "50%",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid rgba(255,255,255,0.2)",
                            background: "rgba(255,255,255,0.06)",
                            color: "#fff",
                        }}
                    />
                    {/*honeypot field for spam bots, should be left empty */}
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        background: "rgba(255,255,255,0.06)",
                        color: "#fff",
                    }}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        background: "rgba(255,255,255,0.06)",
                        color: "#fff",
                    }}
                />

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: "10%",
                }}>
                    <p>
                        {message}
                    </p>
                    <button
                        type="submit"
                        className="button-style contact-button"
                    >
                        Say Hello
                    </button>
                </div>
            </form>
        </div>
    )
}
