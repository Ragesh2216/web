import React, { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.title = "404 — Page Not Found";
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: "#f7f7fb",
                color: "#111827",
                fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
            }}
        >
            <div style={{ textAlign: "center", maxWidth: 720 }}>
                <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", margin: 0, lineHeight: 1 }}>
                    404
                </h1>
                <p style={{ fontSize: "1.25rem", margin: "0.5rem 0 1.5rem", color: "#374151" }}>
                    Oops — the page you are looking for does not exist.
                </p>
                <a
                    href="/"
                    style={{
                        display: "inline-block",
                        padding: "0.6rem 1rem",
                        background: "#2563eb",
                        color: "#fff",
                        borderRadius: 8,
                        textDecoration: "none",
                        fontWeight: 600,
                        boxShadow: "0 4px 14px rgba(37,99,235,0.15)",
                    }}
                >
                    Go to Home
                </a>
            </div>
        </div>
    );
}