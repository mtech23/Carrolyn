import { React, useEffect, useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState();
    const counterIncreament = () => {
        fetch('https://custom.mystagingserver.site/parcel_safe_app/public/api/increasecount', {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // Update the counter state with the new count from the response
                setCounter(data?.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        counterIncreament()
    }, [])

    return (
        <div className='counterBox'>
            <div className='counterText'>
                <div className='counterTitle'>
                    <h6>Total no of visitor: </h6>
                </div>
                {
                    counter && (
                        <div className='counterValue'>
                            <h6>{counter}</h6>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
