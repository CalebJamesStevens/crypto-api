import { useEffect, useState } from "react";

function Coin(props) {
    const [coinImage, setCoinImage] = useState('');
    const [coinName, setCoinName] = useState('');
    const [coinCurrentPrice, setCoinCurrentPrice] = useState('');
    const [coinPriceChange24hr, setCoinPriceChange24hr] = useState('');
    const [coinPriceChangePercentage, setCoinPriceChangePercentage] = useState('');
    const [coinLastUpdate, setCoinLastUpdate] = useState('');
    const [hovering, setHovering] = useState(false);
    useEffect (() => {
        const update = () => {
            setCoinImage(props.coin.image);
            setCoinName(props.coin.name);
            setCoinCurrentPrice(props.coin.current_price);
            setCoinPriceChange24hr(props.coin.price_change_24h);
            setCoinPriceChangePercentage(props.coin.price_change_percentage_24h);
            setCoinLastUpdate(props.coin.last_updated);
            console.log("Hey")
        }
        update();
        setInterval(() => {update()}, 60*1000)
    }, []);

    function hover (e) {
        setHovering(!hovering)
        if (hovering) {
            e.target.style.background = '#333333';

        } else {
            e.target.style.background = '#666666';
        }
    }

    return (
        <div className='coin-data-container'>                
            <div className='coin-img-container'><img className='coin-image' src={coinImage}/></div>
            <div className='coin-name'>{coinName}</div>
            <div className='coin-current-price'>{coinCurrentPrice}</div>
            <div className='coin-price-change-24hr'>{coinPriceChange24hr}</div>
            <div className='coin-price-change-percentage'>{coinPriceChangePercentage}</div>                   
            <div className='coin-last-updated'>{coinLastUpdate}</div>
        </div>
    )
}

export default Coin;