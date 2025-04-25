import React, { useEffect } from 'react';
import './Table.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateAssetData } from '../Pages/CryptoSlice'; 

const CryptoTable = () => {
  const dispatch = useDispatch();


  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {

      const randomIndex = Math.floor(Math.random() * assets.length);
      const assetToUpdate = assets[randomIndex];
  
      dispatch(
        updateAssetData({
          id: assetToUpdate.id,
          price: Math.random() * 100000,
          percentChange1h: (Math.random() - 0.5) * 10,
          percentChange24h: (Math.random() - 0.5) * 50,
          percentChange7d: (Math.random() - 0.5) * 100,
          volume24h: Math.random() * 100000000,
        })
      );
    }, 2000); 
  
    return () => clearInterval(interval); 
  }, [dispatch, assets]);
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);
  
  
};

const formatCirculatingSupply = (supply) => {
  if (!supply || supply === 0) return '—';

  if (supply >= 1_000_000_000) {
    return `${(supply / 1_000_000_000).toFixed(2)} B`;
  } else if (supply >= 1_000_000) {
    return `${(supply / 1_000_000).toFixed(2)} M`;
  } else {
    return supply.toLocaleString();
  }
};



  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          
          <th>Name</th> 
          
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>Volume(24h)</th>
          <th>Circulating Supply</th>
          
          <th>Last 7 Days</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, index) => (
          <tr key={index}>
            <td>{index + 1}</td>


            <td className="asset-name-cell">
  <img src={asset.logo} alt={asset.name} width={24} height={24} />
  <span>{asset.name}</span>
</td>

            <td>{asset.symbol}</td>
            <td>{formatCurrency(asset.price.toFixed(2))}</td>
            <td style={{ color: asset.percentChange1h >= 0 ? 'green' : 'red' }}>
              {asset.percentChange1h.toFixed(2)}%
            </td>
            <td style={{ color: asset.percentChange24h >= 0 ? 'green' : 'red' }}>
              {asset.percentChange24h.toFixed(2)}%
            </td>
            <td style={{ color: asset.percentChange7d >= 0 ? 'green' : 'red' }}>
              {asset.percentChange7d.toFixed(2)}%
            </td>
            <td>{formatCurrency(asset.marketCap)}</td>
            <td>{formatCurrency(asset.volume24h)}</td>
            <td>{formatCirculatingSupply(asset.circulatingSupply)}</td>

            <td>
  {asset.graph && (
    <img
      src={asset.graph}
      alt={`${asset.name} 7 day trend`}
      style={{ width: '100px', height: '40px', objectFit: 'contain' }}
    />
  )}
</td>

            <td>
             
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default CryptoTable;
