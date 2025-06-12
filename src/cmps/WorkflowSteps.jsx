import { useScrollAnimation } from './useScrollAnimation';

export default function WorkflowSteps({ t }) {

    const { elementRef, isVisible } = useScrollAnimation();
    const steps = t.steps;
    return (
        <div className="workflow-steps-container">
            {/* Header */}
            <div className="workflow-header">
                <h1 className="workflow-title">{t.stepsTitle}</h1>
                <p className="workflow-description">{t.stepsDescription}</p>
            </div>

            {/* Steps Container */}
            <div
                ref={elementRef}
                className={`steps-container animate-container ${isVisible ? 'animate' : ''}`}
            >
                {steps.map((item, index) =>
                    <div
                        key={index}
                        className="feature-item animate-item"
                        data-step={index + 1}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}