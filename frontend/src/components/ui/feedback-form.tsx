import { useState } from "react";
import { BoxFooter } from "./box-footer";
import { BoxFrame } from "./box-frame";
import { BoxHeader } from "./box-header";
import { BoxMain } from "./box-main";
import { FORMSPREE_URL } from "../../lib/api";


export function FeedbackForm () {
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("")
        setSuccess(false);

        if (!feedback.trim()) {
            setError("Please enter your feedback before submitting.")
            return;
        }

        setLoading(true);
        try{
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: feedback}),
            });
            if (!response.ok) throw new Error("Failed to send feedback.")
                setSuccess(true);
                setFeedback("");
        } catch (err) {
            setError("An error occurred while submitting feedback.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <BoxFrame className="justify-self-center ">
            <BoxHeader title="FeedbackForm.md" />
                <BoxMain className="pt-20">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <label>C:\Feedback{'>'} </label>
                                <br/><span>{'[ '}</span>
                                <textarea
                                        className="w-full px-4 bg-transparent outline-none resize-none font-mono text-sm align-top"
                                        rows={6}
                                        placeholder="Your feedback helps us improve..."
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                    />
                                <span >{' ]'}</span>
                            </div>

                            {error && (
                                <p className="mt-2 text-red-400 text-sm">{error}</p>
                            )}
                            {success && (
                                <p className="mt-2 text-green-400 text-sm">
                                    {">> Feedback sent successfully! Thank you."}
                                </p>
                            )}

                            <div className="flex h-10 mt-6 mr-8 justify-end">
                                <button 
                                    className="p-2 btn-underline cursor-pointer" 
                                    type="submit"
                                    disabled={loading}

                                    >
                                        {loading ? ">> Submitting..." : ">>Submit feedback"}
                                </button>

                            </div>
                            
                        </form>
                    </div>
                    
                </BoxMain>
            
            <BoxFooter/>
        </BoxFrame>
    )
}