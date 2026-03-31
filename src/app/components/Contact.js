

export default function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        // await fetch("https://formspree.io/f/xlgobqog", {
        //     method: "POST",
        //     body: data,
        //     headers: {
        //         Accept: "application/json",
        //     },
        // });


        alert("Message sent! Thank you for reaching out.");
        form.reset();
    }

    return (
        <div style={{ maxWidth: "2000px" }}>
            <div style={{ width: "60%" }}>
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
                        type="text"
                        name="subject"
                        placeholder="Subject"
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

                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: "none",
                        background: "rgba(255,255,255,0.1)",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </form>
        </div>
    )
}
