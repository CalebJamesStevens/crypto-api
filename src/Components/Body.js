import Axios from 'axios';
import { useEffect, useState } from 'react';
import Coin from './Coin'

function Body() {

    const [coins, setCoins] = useState([]);
    const [loadedCoins, setLoadedCoins] = useState([]);

    useEffect(() => {
        const getData = () => {
            Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((response) => {
                setCoins(response.data);
                coins.forEach(function(coin, index) {
                    console.log(coin)
                });
            })
            .catch(error => console.log(error));
        }

        getData()
        setInterval(() => {getData()}, 60*1000)
    }, []);

    //useEffect(() => {
    //    setLoadedCoins(coins.map(c => <Coin key={c.id} coin={c}></Coin>));
    //}, [coins])

    
    
    //const myCoinsList = coins && coins.map(coin => <Coin key={coins[0]?.id} coin={coin} />)
    const changeCoinList = (arr = []) => {
        if (coins == undefined) return;
        console.log(arr)
        let a = (coins && coins.filter(coin => arr.includes(coin.id)))
        return a.map(c => <Coin key={c.id} coin={c} />)
    }
    
    let myCoinsList = changeCoinList(['bitcoin', 'ethereum', 'ripple', 'dogecoin', 'litecoin']);

    return (
        <div>
            <h1>Minute Crypto Tracker</h1>

            <div className='coins-container'>
                <div className='coin-data-container coin-data-header'>
                    <div className='coin-img-container'></div>
                    <div className='coin-name'>Name</div>
                    <div className='coin-current-price'>Price</div>
                    <div className='coin-price-change-24hr'>24hr Change</div>
                    <div className='coin-price-change-percentage'>24hr% change</div>
                    <div className='coin-last-updated'>Updated</div>
                </div>

                {myCoinsList}
                
            </div>
        </div>
    );
}


export default Body;
/*<Coin key={coins[0]?.id} coin={coins[0]}></Coin>
<Coin key={coins[1]?.id} coin={coins[1]}></Coin>
<Coin key={coins[7]?.id} coin={coins[7]}></Coin>
<Coin key={coins[9]?.id} coin={coins[9]}></Coin>
<Coin key={coins[17]?.id} coin={coins[17]}></Coin>
*/
//0 1 7 9 17