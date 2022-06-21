import React from 'react'
import PedalBikeRoundedIcon from '@mui/icons-material/PedalBikeRounded';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import TokenIcon from '@mui/icons-material/Token';
import Third from "./third.png"
const sidebarData = [
    {
        title : "Token Management" ,
        icon : <TokenIcon/>,
        link : "/#/token-management" ,
    } ,
    {

        title : "Apply for IDO" ,
        icon : <TokenIcon/> ,
        link : "/#/apply-for-ido" ,

    } ,
    {
        title : "NFT" ,
        icon : <TokenIcon/> ,
        link : "/#/nft" ,
    } ,
    {
        title : "Documentation" ,
        icon : <DocumentScannerIcon/>,
        link :  'https://docs.solminter.com' ,
    }
]

export default sidebarData