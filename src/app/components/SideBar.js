'use client';

import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { devLinks } from "../data/aboutMe";
import { GoHome } from "react-icons/go";



export default function Sidebar({ appSections, sideBarOpen, setSideBarOpen, isWide }) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSideBarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setSideBarOpen(false);
    };

    if (!isWide) {
        return (
            <div
                className="mobile-top-bar"
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 16px",
                    background: "linear-gradient(180deg, rgba(40,70,120,0.96) 0%, rgba(15,27,56,0.96) 100%)",
                    backdropFilter: "blur(6px)",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                    zIndex: 1100,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "100vw",
                        gap: "26px",
                        color: "rgba(255,255,255,0.78)",
                    }}
                >
                    {devLinks.map((dev) => {
                        const Icon = dev.icon;

                        return (
                            <Icon
                                key={dev.name}
                                className="icon-button"
                                onClick={() =>
                                    window.open(dev.url, "_blank", "noopener,noreferrer")
                                }
                            />
                        );
                    })}
                </div>
            </div>
        );
    }


    return (
        <aside
            id="heroBar"
            ref={sidebarRef}
            style={{
                zIndex: 1000,
                width: sideBarOpen ? "400px" : "60px",
                height: "100vh",
                color: "#e5e7eb",
                position: "fixed",
                left: 0,
                top: 0,
                overflow: "hidden",
                transition: "width 0.4s ease",
            }}
        >
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
            >
                <defs>
                    <linearGradient id="sidebarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(64, 102, 178, 0.96)" />
                        <stop offset="100%" stopColor="rgba(15, 27, 56, 0.96)" />
                    </linearGradient>
                </defs>

                <polygon
                    points={sideBarOpen ? "0,0 100,0 60,100 0,100" : "0,0 100,0 65,100 0,100"}
                    fill="url(#sidebarGradient)"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="0.6"
                />
            </svg>

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    padding: sideBarOpen ? "20px" : "20px 0 0 0",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: sideBarOpen ? "space-between" : "center",
                        alignItems: "center",
                        height: "60px",
                    }}
                >
                    {sideBarOpen && (
                        <h2
                            style={{
                                margin: 0,
                                whiteSpace: "nowrap",
                                color: "rgba(255,255,255,0.9)",
                                fontWeight: 600,
                            }}
                        >
                            Aubrie Woodbine
                        </h2>
                    )}

                    <div
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "40px",
                            height: "40px",
                            color: "rgba(255, 255, 255, 0.9)",
                        }}
                        onClick={() => setSideBarOpen((prev) => !prev)}
                    >
                        {sideBarOpen ? <RiArrowLeftDoubleFill className="icon-button" /> : <RiArrowRightDoubleFill className="icon-button" />}

                    </div>
                </div>

                {!sideBarOpen && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "60px",
                            marginTop: "40px",
                        }}
                    >
                        {devLinks.map((dev) => {
                            const Icon = dev.icon;

                            return (
                                <Icon
                                    key={dev.name}
                                    className="icon-button"
                                    onClick={() =>
                                        window.open(dev.url, "_blank", "noopener,noreferrer")
                                    }
                                />
                            );
                        })}
                    </div>
                )}

                {sideBarOpen && (
                    <div
                        style={{
                            opacity: 1,
                            pointerEvents: "auto",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                minWidth: "220px",
                                maxWidth: "280px",
                            }}
                        >
                            <h3
                                style={{
                                    color: "rgba(255,255,255,0.72)",
                                    fontSize: "1.2rem",
                                    marginBottom: "12px",
                                }}
                            >
                                Web Developer
                            </h3>

                            <div
                                style={{
                                    width: "80%",
                                    height: "1px",
                                    background: "rgba(255,255,255,0.18)",
                                    marginBottom: "20px",
                                }}
                            />

                            <nav>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        lineHeight: "2.2em",
                                    }}
                                >
                                    {appSections.map((section) => (
                                        <li
                                            key={section}
                                            className="nav-link"
                                            onClick={() => scrollToSection(section.toLowerCase())}
                                        >
                                            {section}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
                {sideBarOpen &&
                    <>
                        <h3 style={{
                            marginTop: "100px",
                            color: "rgba(255,255,255,0.72)",
                            fontSize: "1.2rem",
                            marginBottom: "12px",
                        }}>Dev Links</h3>
                        <div
                            style={{
                                width: "60%",
                                height: "1px",
                                background: "rgba(255,255,255,0.18)",
                                marginBottom: "20px",
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "30px",
                                marginLeft: "10px",
                            }}
                        >
                            {devLinks.map((dev) => {
                                const Icon = dev.icon;

                                return (
                                    <Icon
                                        key={dev.name}
                                        className="icon-button"
                                        onClick={() =>
                                            window.open(dev.url, "_blank", "noopener,noreferrer")
                                        }
                                    />
                                );
                            })}
                        </div>
                    </>}
            </div>
        </aside>
    );
    // );
}