import { useRouter } from 'next/router'
import styled from 'styled-components'
import React, { useContext } from 'react'
import { ToggleContext } from '../Layout/Layout'
import { convertToFixedDecimals, ConvertToNoExponents } from '../../util/conversion'

const Wrapper = styled.div`
  background: ${props => (props.slot === '/gFOTmodule' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(251, 252, 253, 0.3)')};
  box-shadow: ${props =>
    props.slot === '/gFOTmodule'
      ? '2.74846px 5.49692px 57.0305px rgba(161, 164, 176, 0.25)'
      : '4px 8px 83px rgba(34, 40, 95, 0.25)'};
  border-radius: ${props =>
    props.slot === '/gFOTmodule' ? '15.1165px' : props.slot === '/sFOTmodule' ? '27px' : '70px'};
  width: 100%;
  max-width: 610px;
  display: flex;
  position: relative;
  padding: ${props => (props.slot === '/sFOTmodule' ? '0 30px' : '30px')};
  align-self: flex-start;
  margin: auto;
  margin-left: ${props => (props.slot === '/sFOTmodule' ? '-45px' : '22px')};
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

const StatisticLabel = styled.span`
  font-weight: 600;
  font-size: ${props => (props.slot === '/gFOTmodule' || props.slot === '/sFOTmodule' ? '16.4907px' : '24px')};
  line-height: ${props => (props.slot === '/gFOTmodule' || props.slot === '/sFOTmodule' ? '25px' : '36px')};
  color: ${props => (props.slot === '/gFOTmodule' ? '#080451' : '#22053D')};
`

const StatisticValue = styled.span`
  font-weight: 600;
  font-size: ${props => (props.slot === '/gFOTmodule' || props.slot === '/sFOTmodule' ? '20.6134px' : '30px')};
  line-height: ${props => (props.slot === '/gFOTmodule' || props.slot === '/sFOTmodule' ? '31px' : '45px')};
  color: #22053d;
`

const StatisticItem = styled.label`
  width: 100%;
  max-width: 470px;
  padding: ${props => (props.datatype === '/gFOTmodule' || props.datatype === '/sFOTmodule' ? '36px' : '72px')} 0;
  transform: rotate(0.01deg);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Ellipse1 = styled.div`
  position: absolute;
  width: 289px;
  height: 286px;
  left: 93px;
  top: 51px;
  border-radius: 100%;
  background: #5f5bcd;
  filter: blur(132px);
`

const Ellipse2 = styled.div`
  position: absolute;
  left: 69px;
  bottom: 39px;
  border-radius: 100%;
  width: 245px;
  height: 231px;
  background: #8394dd;
  filter: blur(60px);
`

const Ellipse3 = styled.div`
  position: absolute;
  width: 294px;
  height: 290px;
  border-radius: 100%;
  right: 1px;
  top: 10px;
  background: #83b8dd;
  filter: blur(75px);
`

const Ellipse4 = styled.div`
  position: absolute;
  width: 297px;
  height: 231px;
  border-radius: 100%;
  right: 3px;
  bottom: 29px;
  background: #8394dd;
  filter: blur(90px);
`

const Ellipse5 = styled.div`
  position: absolute;
  width: 261px;
  height: 157px;
  border-radius: 100%;
  left: 676px;
  top: 630px;
  background: #89b9a0;
  filter: blur(141.846px);
`

const Ellipse6 = styled.div`
  position: absolute;
  width: 427px;
  height: 268px;
  border-radius: 100%;
  left: 1053px;
  top: 340px;
  background: #c4ddd0;
  filter: blur(207.22px);
`

const Ellipse7 = styled.div`
  position: absolute;
  width: 431px;
  height: 214px;
  border-radius: 100%;
  left: 1046px;
  top: 634px;
  background: #a7cbb8;
  filter: blur(202.166px);
`

const Ellipse8 = styled.div`
  position: absolute;
  width: 420px;
  height: 265px;
  border-radius: 100%;
  left: 715px;
  top: 378px;
  background: #ddece5;
  filter: blur(202.166px);
`

const Divider = styled.div`
  background: ${props =>
    props.slot === '/gFOTmodule' ? '#2E0752' : 'linear-gradient(270deg, #5F5BCD 0%, #83B8DD 100%)'};
  height: ${props => (props.slot === '/gFOTmodule' ? '1.71779px' : '2.5px')};
  width: 100%;
  transform: rotate(0.01deg);
`

const VirticalDivider = styled.div`
  background: ${props =>
    props.slot === '/gFOTmodule' ? '#2E0752' : 'linear-gradient(270deg, #5F5BCD 0%, #83B8DD 100%)'};
  width: ${props => (props.slot === '/gFOTmodule' ? '1.71779px' : '2.5px')};
  transform: rotate(0.01deg);
  margin-left: 20px;
  margin-right: 20px;
`

const StatisticBox = ({
  values = [],
  leftValues = [],
  page = 0,
  setPage = null,
  maxWidth = '661px',
  children = null,
}) => {
  console.log(values)
  const router = useRouter()
  const { pathname } = router
  const { toggle } = useContext(ToggleContext)
  return (
    <div style={{ paddingLeft: '27px', maxWidth, width: '100%' }}>
      {pathname === '/sFOTmodule' && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '50px',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <button
            className={`default-btn  ${!toggle && 'secondary-btn outlined'}`}
            style={{ flex: '1', minWidth: 'unset', borderRadius: '50px' }}
            onClick={() => setPage(page => (page === 0 ? 1 : 0))}
          >
            {page === 0 ? `Clearance Sale` : 'Stable Module (sFOT)'}
          </button>
          <button
            className={`default-btn  ${!toggle && 'secondary-btn outlined'}`}
            style={{ flex: '1', minWidth: 'unset', borderRadius: '50px' }}
            onClick={() => setPage(2)}
          >
            Stable Pools and Swaps
          </button>
        </div>
      )}
      {children}
      <Wrapper slot={pathname} defaultChecked={leftValues.length > 0}>
        {pathname !== '/gFOTmodule' && pathname !== '/sFOTmodule' && (
          <>
            <Ellipse1 />
            <Ellipse2 />
            <Ellipse3 />
            <Ellipse4 />
          </>
        )}
        {pathname == '/sFOTmodule' && (
          <>
            <Ellipse5 />
            <Ellipse6 />
            <Ellipse7 />
            <Ellipse8 />
          </>
        )}
        <ContentWrapper slot={pathname}>
          {values.map((v, idx) => {
            return (
              <React.Fragment key={idx}>
                <StatisticItem htmlFor={`${idx}`} slot={`${values.length}`} datatype={pathname}>
                  <StatisticLabel slot={pathname}>
                    {v.key.split('(').map((value, idx, self) =>
                      self.length === 1 ? (
                        v.key
                      ) : idx === self.length - 1 ? (
                        <React.Fragment key={idx}>
                          <br />
                          <span>({value}</span>
                        </React.Fragment>
                      ) : (
                        value
                      ),
                    )}
                  </StatisticLabel>
                  <StatisticValue slot={pathname}>
                    {convertToFixedDecimals(ConvertToNoExponents(v.value))}
                  </StatisticValue>
                </StatisticItem>
                {idx < values.length - 1 && <Divider slot={pathname} />}
              </React.Fragment>
            )
          })}
        </ContentWrapper>
        {leftValues.length > 0 ? <VirticalDivider slot={pathname} /> : <></>}
      </Wrapper>
    </div>
  )
}

export default StatisticBox
