export function Hero({ t }) {
    return (
        <section className="hero">
            {/* <video
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
                src="https://res.cloudinary.com/dv2brrhll/video/upload/v1748124274/20250525_0052_Touching_Innovation_remix_01jw24gbn0eabae8tbbaz23xvv_vjwocu.mp4"
            /> */}
            <div className="hero-content">
                <h1>{t.heroTitle}</h1>
                <h2>{t.heroSubtitle}</h2>
                <button className="theme-button">{t.heroButton}</button>
            </div>
        </section>
    )
}