import React from "react";
import {
    Database,
    Users,
    Zap,
    BarChart3,
    MessageSquare,
    Mail,
    Phone,
    Video,
    Slack,
    MessageCircle
} from "lucide-react";

function Integration({ t }) {
    // סימולציה של hook האנימציה
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    // איקונים עבור CRM Systems
    const crmIcons = [
        { Icon: Database, delay: 0 },
        { Icon: Users, delay: 0.2 },
        { Icon: BarChart3, delay: 0.4 },
        { Icon: Zap, delay: 0.6 }
    ];

    // איקונים עבור Communication Platforms
    const commIcons = [
        { Icon: MessageSquare, delay: 0 },
        { Icon: Mail, delay: 0.2 },
        { Icon: Phone, delay: 0.4 },
        { Icon: MessageCircle, delay: 0.6 }
    ];

    const IconContainer = ({ icons, className }) => (
        <div className={`icons-group ${className}`}>
            {icons.map(({ Icon, delay }, index) => (
                <div
                    key={index}
                    className="floating-icon"
                    style={{
                        '--delay': `${delay}s`,
                        '--float-delay': `${delay * 2}s`
                    }}
                >
                    <Icon size={24} />
                </div>
            ))}
        </div>
    );

    return (
        <div className="hero-section">
            <h1 className="integration-title">
                {t?.integrationTitle || "Integration Solutions"}
            </h1>
            <p className="integration-description">
                {t?.integrationDescription || "Connect your favorite tools seamlessly"}
            </p>

            <div className={`animate-container ${isVisible ? 'animate' : ''}`}>
                <div className="integration-icons">
                    <div className="integration-icon">
                        <div className="icon-display">
                            <IconContainer icons={crmIcons} className="crm-icons" />
                        </div>
                        <h2>{t?.CRM_SystemsIntegrationTitle || "CRM Systems"}</h2>
                        <p>{t?.CRM_SystemsIntegrationDescription || "Integrate with leading CRM platforms"}</p>
                    </div>

                    <div className="integration-icon">
                        <div className="icon-display">
                            <IconContainer icons={commIcons} className="comm-icons" />
                        </div>
                        <h2>{t?.CommunicationPlatformsIntegrationTitle || "Communication Platforms"}</h2>
                        <p>{t?.CommunicationPlatformsIntegrationDescription || "Connect with communication tools"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Integration;