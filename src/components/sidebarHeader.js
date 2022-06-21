import React from 'react'
import "../App.css";
import {

    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

function sidebarHeader() {

  return (
    <div className = "sidebarHeader">
        <h2>Solminter </h2>
        <WalletMultiButton/>
    </div>
  )
}

export default sidebarHeader