export default function WebinarPage() {
    return (
        <main className="webinar-container">
            <div className="webinar-content">

                <h1 className="webinar-title">
                    FreeStyle Libre 3 Plus Webinar - 16th September 7pm AEST
                </h1>

                <hr className="webinar-divider" />

                <p className="webinar-intro">
                    Join the Libre team for a free online session to learn more about the world's smallest CGM sensor.<sup className="sup-ref">85</sup>
                </p>

                <p className="webinar-subtitle">What's in store:</p>

                <ul className="webinar-list">
                    <li>Overview of the NEW Libre 3 Plus sensor</li>
                    <li>
                        How to use as a standalone sensor with the NEW Libre app<sup className="sup-ref">12</sup>
                    </li>
                    <li>Available automated insulin delivery (AID) integrations</li>
                    <li>How to access Libre 3 Plus through the NDSS</li>
                </ul>

                <div className="webinar-details">
                    <p>
                        <span className="detail-label"><strong>Who is this session for?</strong></span> This session is best suited for people living with type 1 diabetes.
                    </p>

                    <p>
                        <span className="detail-label"><strong>Date & Time:</strong></span> Wednesday 16 September, 7.00pm AEST.
                    </p>

                    <p>
                        <span className="detail-label"><strong>Where:</strong></span> Online; join from anywhere in Australia.
                    </p>

                    <p>
                        <span className="detail-label"><strong>Cost:</strong></span> Free
                    </p>
                </div>

            </div>
        </main>
    );
}