export function AiAgent({ t }) {
  const plans = ['starter', 'business', 'enterprise'];
  const headers = t.aiagentTableHeaders;
  const rows = t.aiagentTableData;

  return (
    <section className="postomatic">
      <h1>{t.aiagentH1}</h1>
      <h2>{t.aiagentH2}</h2>

      <p>{t.aiagentP1}</p>
      <p>{t.aiagentP2}</p>
      <p>{t.aiagentP3}</p>
      <p>{t.aiagentP4}</p>
      <p>{t.aiagentP5}</p>

      <div className="features-ai-list">
        {plans.map(planKey => {
          const plan = t.aiagentPlans[planKey];
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

      <div className="table-container">
        <h2 className="table-title">{t.aiagentPricingTitle}</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cell === '✔️' ? 'check' : cell === '❌' ? 'xmark' : ''}
                    data-label={headers[j]}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    // <div className="features-list">
    //     <div className="feature-item">
    //         <h3>Starter</h3>
    //         <h4>עצמאים ובעלי עסקים קטנים</h4>
    //         <p>החל מ<span>350 ש"ח</span>/בחודש</p>
    //         <button>התחל עכשיו ⬅️</button>
    //         <p>✅ סוכן AI בהתאמה אישית</p>
    //         <p>✅ ממשק ניהול אינטרקטיבי</p>
    //         <p>✅ תמיכה בסיסית</p>
    //         <p>✅ אינטגרציה עם WhatsApp ותבניות מוכנות</p>
    //     </div>

    //     <div className="feature-item">
    //         <h3>Business</h3>
    //         <h4>חברות בצמיחה עם פונקציות מתקדמות</h4>
    //         <p>החל מ<span>750 ש"ח</span>/בחודש</p>
    //         <button>התחל עכשיו ⬅️</button>
    //         <p>✅ סוכן AI בהתאמה אישית עם ליווי מקצועי</p>
    //         <p>✅ תמיכה VIP</p>
    //         <p>✅ אינטגרציה עם מערכות נוספות</p>
    //         <p>✅ תבניות מתקדמות</p>
    //         <p>✅ AI מתקדם</p>
    //     </div>

    //     <div className="feature-item">
    //         <h3>Enterprise</h3>
    //         <h4>מותגים וחברות גדולות</h4>
    //         <p><span>דברו איתנו</span></p>
    //         <button>התחל עכשיו ⬅️</button>
    //         <p>✅ מותאם אישית</p>
    //         <p>✅ תמיכה וייעוץ VIP</p>
    //         <p>✅ אינטגרציה מלאה עם מערכות מתקדמות</p>
    //         <p>✅ שימוש במודלי Reasoning מתקדמים לניתוח נתונים והסקת מסקנות</p>
    //         <p>✅ הקמה של אתרים ואפליקציות מתקדמות לצרכי העסק</p>
    //     </div>
    // </div>

    // <div className="table-container">
    //     <h2 className="table-title">השוואת חבילות מפורטת</h2>
    //     <table className="comparison-table" dir="rtl">
    //         <thead>
    //             <tr>
    //                 {headers.map((header, i) => (
    //                     <th key={i}>{header}</th>
    //                 ))}
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {features.map((row, i) => (
    //                 <tr key={i}>
    //                     {row.map((cell, j) => (
    //                         <td
    //                             key={j}
    //                             className={cell === '✔️' ? 'check' : cell === '❌' ? 'xmark' : ''}
    //                             data-label={headers[j]}
    //                         >
    //                             {cell}
    //                         </td>
    //                     ))}
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // </div>

  )
}