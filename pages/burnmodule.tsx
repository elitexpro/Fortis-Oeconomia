import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import { useSigningClient } from "../contexts/cosmwasm";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import {
  convertMicroDenomToDenom, 
  convertDenomToMicroDenom,
  convertMicroDenomToDenom2,
  convertDenomToMicroDenom2,
  convertFromMicroDenom
} from '../util/conversion'

const burnmodule = () => {
  const {
    walletAddress,
    signingClient,
    loading,
    error,
    connectWallet,
    disconnect,
    client,

    getBalances,
    nativeBalanceStr,
    nativeBalance,
    fotBalance,
    fotBalanceStr,
    fotTokenInfo,

    alreadyAirdropped,
    airdropAmount,
    airdropAmountDenom,
    merkleProof,

    getMyAirdropAmount,
    GetAlreadyAirdropped,
    executeAirdrop,

    bfotBalance,
    bfotBalanceStr,
    bfotTokenInfo,
    fotBurnContractInfo,
    fotBurnAmount,
    setFotBurnAmount,
    expectedBfotAmount,

    handleFotChange,
    executeFotBurn
  } = useSigningClient();

  // const [fotAmount, setFotAmount] = useState(0)

  useEffect(() => {
    if (!signingClient || walletAddress.length === 0) {
      return;
    }

  }, [signingClient, walletAddress]);

  useEffect(() => {
    if (!signingClient || walletAddress.length === 0) {
      return;
    }
  }, [airdropAmount]);

  const handleSubmit = async (event: MouseEvent<HTMLElement>) => {
    if (!signingClient || walletAddress.length === 0) {
      NotificationManager.error("Please connect wallet first");
      return;
    }

    event.preventDefault();
    executeFotBurn();
  };

  const onFotBurnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    handleFotChange(Number(value))
    
  }
  const handleFotBurnPlus = () => {
    handleFotChange((Number(fotBurnAmount) + 1))
  }
  const handleFotBurnMinus = () => {
    if (Number(fotBurnAmount) == 1)
      return
    handleFotChange((Number(fotBurnAmount) - 1))
}

  return (
    <>
      <div style={{ 
        position: "relative", 
        display: "flex", 
        flexDirection: "row" }}>
        <div style={{ width: "50%" }}>
          <div className="container">
            <div className="currencyt-box" style={{ 
              height: "681px", 
              width: "600px", 
              background: "transparent", 
              boxShadow: "none" }}>
              <div className="currencyt-selection" style={{ width: "453px" }}>
                <label className="wallet-title"
                  style={{
                    alignItems: "center",
                    fontWeight: "600",
                    fontSize: "32px",
                    lineHeight: "48px",
                    marginBottom: "32px",
                  }}
                >
                  FOT
                </label>
                <label className="wallet-label" style={{ 
                  background: "rgba(255, 255, 255, 0.6)", 
                  width: "453px", height: "79px", 
                  borderRadius: "20px", 
                  marginBottom: "58px", 
                  display: "flex", 
                  flexDirection: "row" }}>
                  <button className="fa fa-minus" style={{ 
                    width: "fit-content", 
                    height: "48px", border: "2px solid #00000", 
                    background: "transparent", 
                    boxShadow: "none", 
                    color: "#080451", 
                    marginLeft: "16px", 
                    marginTop: "16px", 
                    marginBottom: "15px" }} 
                  onClick={handleFotBurnMinus}
                  />
                  <input type="number" style={{ 
                    color: "#080451", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    background:"transparent", 
                    border:"none", 
                    textAlign:"center" }}
                    value={fotBurnAmount}
                    onChange={onFotBurnChange}
                    step="1"
                    min="1"
                  />
                  
                  <button className="fa fa-plus" style={{ 
                    width: "fit-content", 
                    height: "48px", 
                    border: "2px solid #00000", 
                    background: "transparent", 
                    boxShadow: "none", 
                    color: "#080451", 
                    marginRight: "16px", 
                    marginTop: "16px", 
                    marginBottom: "15px" }} 
                  onClick={handleFotBurnPlus}
                  />
                </label>
                <div><img src="../images/fire.png" style={{ marginBottom: "57.79" }}></img></div>
                <label className="wallet-title"
                  style={{
                    alignItems: "center",
                    fontWeight: "600",
                    fontSize: "32px",
                    lineHeight: "48px",
                    marginBottom: "32px",
                  }}
                >
                  bFOT
                </label>
                <label className="wallet-label" style={{ 
                  background: "rgba(255, 255, 255, 0.6)", 
                  width: "453px", height: "79px", 
                  borderRadius: "20px", 
                  marginBottom: "72px", 
                  display:"flex" }}>
                  <span style={{ 
                    color: "#080451", 
                    marginLeft: "auto", 
                    marginRight: "auto"
                  }}>{expectedBfotAmount}</span>
                </label>
                <button onClick={handleSubmit}
                >Burn</button>
              </div>


            </div>
          </div>


        </div>
        <div style={{ width: "50%" }}>
          <div className="currencyt-box" style={{ 
            height: "631px", 
            marginTop: "50px", 
            marginLeft: "100px", 
            width: "621px" }}>
            <div className="currencyt-selection" style={{}}>
              {/* <div className="wallet-text" style={{ textAlign: "left" }}>
                <label className="wallet-label" style={{display:"block", fontSize: "27px", marginLeft: "20px", width: "486px",color:"black",paddingBottom:"89px" }}>
                  My FOT Amount
                  <span style={{
                    fontSize: "27px",
                    display: "block",
                    float: "right",
                  }}> {fotBalanceStr}
                  </span>
                </label>
              </div> */}
              <div className="wallet-text" style={{ textAlign: "left" }}>
                <label className="wallet-label" style={{ 
                  display:"block", 
                  fontSize: "27px", 
                  marginLeft: "20px", 
                  width: "486px", 
                  color:"black", 
                  paddingBottom:"89px" 
                }}>
                  Current FOT Supply
                  <span style={{
                    fontSize: "27px",
                    display: "block",
                    float: "right",
                  }}> {convertMicroDenomToDenom2(fotTokenInfo.total_supply, fotTokenInfo.decimals)}
                  </span>
                </label>
              </div>
              <div className="wallet-text" style={{ textAlign: "left" }}>
                <label className="wallet-label" style={{
                  marginTop:"89px",
                  display:"block",
                  fontSize: "27px",
                  marginLeft: "20px",
                  width: "486px",
                  color:"black",
                  paddingBottom:"89px" }}>
                  Total Burned FOT
                  <span style={{
                    fontSize: "27px",
                    display: "block",
                    float: "right",
                  }}> {convertMicroDenomToDenom2(fotBurnContractInfo.fot_burn_amount, bfotTokenInfo.decimals)}
                  </span>
                </label>
              </div>
              <div className="wallet-text" style={{ textAlign: "left" }}>
                <label className="wallet-label" style={{
                  marginTop:"89px",
                  fontSize: "27px",
                  marginLeft: "20px",
                  width: "486px",
                  color:"black",
                  borderBottom:"none" }}>
                  Current bFOT Supply
                  <span style={{
                    fontSize: "27px",
                    display: "block",
                    float: "right",
                  }}> {convertMicroDenomToDenom2(fotBurnContractInfo.bfot_sent_amount, bfotTokenInfo.decimals)}
                  </span>
                </label>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default burnmodule