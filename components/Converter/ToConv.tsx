import styled from 'styled-components'

const WalletTitle = styled.label`
    align-items: center;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 32px;
    margin-top:0px !important;
<<<<<<< HEAD
    background-color: ${props => props.slot!=='gFOT' && 'white !important'}
=======
    background-color: ${props => props.slot!=='gFOT' && '#22053D !important'}
>>>>>>> 4c33a21d5b1d6786ea9595d54000bc3f970eb5b5
`

const ExpectedValWrapper = styled.label`
    background: rgba(255, 255, 255, 0.6) !important;
    width: 453px !important;
    height: 79px !important;
    border-radius: 20px !important;
    margin-bottom: 72px !important;
    display: flex !important;
`

const ExpectedVal = styled.span`
    color: #080451;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    font-size: 21px;
    line-height: 32px;
`

const ToConv = ({to, expectedAmount}) => {
    return (
        <div className="gFotCurrencyt-selection">
            <WalletTitle slot={to} className="wallet-title">
                {to}
            </WalletTitle>
            <ExpectedValWrapper className="wallet-label">
                <ExpectedVal>{expectedAmount}</ExpectedVal>
            </ExpectedValWrapper>
        </div>
    )
}

export default ToConv