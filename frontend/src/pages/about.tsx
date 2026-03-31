import { AboutLayout } from "../components/layout/aboutLayout";
import { AboutContent } from "../components/ui/about-content";
import { FeedbackForm } from "../components/ui/feedback-form";

export default function AboutPage() {
    return (
        <AboutLayout>
            <AboutContent/>
            <FeedbackForm/>
        </AboutLayout>
    )
}