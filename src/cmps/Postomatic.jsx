export function Postomatic({t}) {
      const plans = ['free','starter', 'professional', 'enterprise'];
console.log('t.poatomaticPlans:', t.poatomaticPlans);

 return (
    <section className="postomatic">

        <h1>{t.postomaticH1}</h1>
        <h2>{t.postomaticH2}</h2>

        <p>{t.postomaticP1}</p>
        <p>{t.postomaticP2}</p>
        <p>{t.postomaticP3}</p>
        <p>{t.postomaticP4}</p>
        <p>{t.postomaticP5}</p>


          <div className="features-ai-list">
        {plans.map(planKey => {
          const plan = t.poatomaticPlans[planKey];
          return (
            <div className="feature-ai-item" key={planKey}>
              <h3>{plan.title}</h3>
              <h4>{plan.subtitle}</h4>
              <p>{plan.priceTextBefore} <span>{plan.priceAmount}</span> {plan.priceTextAfter}</p>
              <button className="theme-button">{plan.button}</button>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

        <video
            controls             // מציג פקדי פעלה (Play/Pause וכו')
            loop                 // אם תרצי חזרה אוטומטית
            muted                // להתחלה מ-muted (לדפדפנים גדולים דורשים זאת לאוטופליי)
            src="https://res.cloudinary.com/dv2brrhll/video/upload/v1747729630/FDownloader.Net_AQNqB9zTKmP9dtWOFpFyJJFcmrA2Tu_5bEcYo-6_RQEp6a3uuZk6tDS99Ixi1L8Z00Bon9tRJmwtl-s4r7zARA3w_720p__HD_xwlf9x.mp4"
        >
            הדפדפן שלך לא תומך בתג הווידאו.
        </video>

    </section>
 )
}