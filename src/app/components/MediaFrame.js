'use client';

export default function MediaFrame({
    src,
    width = "100%",
    height = "100%",
    alt = "Image",
    borderRadius = "24px",
    objectFit = "cover",
    overlay = true,
    children,
}) {
    return (
        <div
            style={{
                // position: "absolute",
                width,
                height,
                inset: 0,
                borderRadius,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "linear-gradient(180deg, rgba(2,6,23,0.2), rgba(2,6,23,0.8))",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit,
                    display: "block",
                    // filter: "grayscale(30%) brightness(0.6) contrast(1.1)",
                    transform: "scale(1.02)",
                }}
            />

            {overlay && (
                <>
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(180deg, rgba(15,23,42,0.08) 0%, rgba(15,23,42,0.28) 55%, rgba(15,23,42,0.55) 100%)",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 35%)",
                            pointerEvents: "none",
                        }}
                    />
                </>
            )}

            {children && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "18px",
                        pointerEvents: "none",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
}