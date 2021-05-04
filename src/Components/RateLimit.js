import React, { useState, useEffect } from "react";
import getRateLimit from '../Functions/getRateLimit'

const RateLimit = () => {
    const [remainingRequests, setRemainingRequests] = useState(null);
    const [resetTime, setResetTime] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null);
    const [showRequests, setShowRequests] = useState(false);


    useEffect(() => {
        getRateLimit().then(response => setResetTime(response.reset))
    }, [])

    useEffect(() => {
        getRateLimit().then(response => setRemainingRequests(response.remaining))
    }, [])


    useEffect(() => {
        let d = new Date(0);
        d.setUTCSeconds(resetTime);
        setInterval(() => {
            if (resetTime)
                setRemainingTime(new Date(d - new Date()).toISOString().substr(14, 5));
        }, 1000);
    }, [showRequests, resetTime]);
    

    return (
        <div className="rate-limit" id="remaining">
           

            <div>
                {showRequests &&
                    <h2 className="remaining">{remainingRequests}</h2>
                }
                {showRequests ? <p className="renew-time">Renew in {remainingTime}</p> : null}
            </div>


            <div onClick={() => setShowRequests(!showRequests)}>
                <p className={`${remainingRequests !== 0 ? "requests-button" : "requests-button red"}`}>
                    Requests
                </p>
            </div>


        </div>
    );
};
export default RateLimit;