import { createSlice } from '@reduxjs/toolkit';
import BitcoinLogo from '../assets/Bitcoin.svg.webp'
import greenline from '../assets/greenline.jpg'
import images from '../assets/images.png'
import Etherem from '../assets/Etherem.png'
import tether from '../assets/tether.png'
import XRP from '../assets/XRP.png'
import bnb from '../assets/bnb.png'
import solana from '../assets/solana.png'

const initialState = {
  assets: [
    {
      id: 1,
      logo: BitcoinLogo,
      name: 'Bitcoin BTC',
      price: 0,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      marketCap: 43874950947 ,
      volume24h: 0,
      circulatingSupply:19850000,
      graph:greenline
    },
    {
      id: 2,
      logo: Etherem,
      name: 'Ethereum ETH',
      price: 0,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      marketCap: 86052574789,
      volume24h: 0,
      circulatingSupply: 6743953278,
      graph:images
    },
    {
      id: 3,
      logo:tether ,
      name: 'Tether USDT',
      price: 0,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      marketCap: 4567324657,
      volume24h: 0,
      circulatingSupply: 67542487,
      graph:greenline
    },
    {
      id: 4,
      logo: XRP,
      name: 'XRP XRP',
      price: 0,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      marketCap: 564134868,
      volume24h: 0,
      circulatingSupply: 8652478,
      graph:images
    },
    {
      id: 5,
      logo:bnb ,
      name: 'BNB BNB',
      price: 0,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      marketCap: 5643209675,
      volume24h: 0,
      circulatingSupply: 87637553,
      graph:greenline
    },
    {
      id: 6,
      logo: solana,
      name: 'Solana SOL',
      price: 0,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      marketCap: 9823548767,
      volume24h: 0,
      circulatingSupply: 876408929876,
      graph:images
    },
   
  ],
};


const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
   
    updateAssetData: (state, action) => {
      const { id, price, percentChange1h, percentChange24h, percentChange7d, volume24h } = action.payload;
      const asset = state.assets.find((asset) => asset.id === id);
      if (asset) {
        asset.price = price;
        asset.percentChange1h = percentChange1h;
        asset.percentChange24h = percentChange24h;
        asset.percentChange7d = percentChange7d;
        asset.volume24h = volume24h;
      }
    },
  },
});

export const { updateAssetData } = cryptoSlice.actions;


export default cryptoSlice.reducer;
