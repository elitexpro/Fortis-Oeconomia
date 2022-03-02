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

const CreateWork = () => {
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

    alreadyAirdropped,
    airdropAmount,
    airdropAmountDenom,
    merkleProof,

    getMyAirdropAmount,
    GetAlreadyAirdropped,
    executeAirdrop,
  } = useSigningClient();

  useEffect(() => {
    if (!signingClient || walletAddress.length === 0) {
      return;
    }
    getMyAirdropAmount();
    GetAlreadyAirdropped();
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

    if (alreadyAirdropped) {
      NotificationManager.warning("Already airdropped");
      return;
    }

    event.preventDefault();

    executeAirdrop();
  };

  return (
    <>
      <div className="trade-cryptocurrency-area ptb-100">
        <div className="container">
          <div className="trade-cryptocurrency-box-div">
            <div className="trade-cryptocurrency-content">
              <div className="trade-cryptocurrency-box">
                <div className="currency-selection">
                  <span>Votedrop Amount</span>
                  <label style={{ alignItems: "center",textAlign: "center",height: "fit-content" }}> {airdropAmountDenom}</label>
                </div>

                <button type="submit" onClick={handleSubmit}>
                  Claim
                </button>
                <div className="juno-load"></div>
                {walletAddress.length == 0 ?<></>:
                      <div className='banner-wrapper-content' style={{"marginLeft":"0"}}>
                        <span className="sub-title ms-2" style={{"marginBottom":"0px"}}>
                          {fotBalanceStr} 
                        </span>
                      </div>
                  }

              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CreateWork;
