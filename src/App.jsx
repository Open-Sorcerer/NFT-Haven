import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import MenuItems from "./components/MenuItems";
import CreateNFT from "components/CreateNFT/createNFT";
const { Header } = Layout;
import VideoPlayer from "react-background-video-player";
import diabloVideo from "./assets/Plexus.mp4";
import wizzie from "./assets/wizzie.png";
// import Background from "components/diabloBG.jpg";
const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <>
      <VideoPlayer
        className="video"
        src={
          // "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
          diabloVideo
        }
        autoPlay={true}
        muted={true}
      />
      <Layout
        style={{
          height: "100vh",
          overflow: "auto",
          // backgroundImage: `url(${Background}`,
          // backgroundSize: "cover",
        }}
      >
        <Router>
          <Header style={styles.header}>
            <Logo />
            <MenuItems />
            <div style={styles.headerRight}>
              <Chains />
              <TokenPrice
                address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
                chain="eth"
                image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
                size="40px"
              />
              <NativeBalance />
              <Account />
            </div>
          </Header>

          <div style={styles.content}>
            <Switch>
              <Route exact path="/quickstart">
                <QuickStart isServerInfo={isServerInfo} />
              </Route>
              <Route path="/wallet">
                <Wallet />
              </Route>
              <Route path="/nft">
                <CreateNFT />
              </Route>
              <Route path="/1inch">
                <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                  <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                    <DEX chain="eth" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                    <DEX chain="bsc" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                    <DEX chain="polygon" />
                  </Tabs.TabPane>
                </Tabs>
              </Route>
              <Route path="/erc20balance">
                <ERC20Balance />
              </Route>
              <Route path="/erc20transfers">
                <ERC20Transfers />
              </Route>
              <Route path="/nftBalance">
                <NFTBalance />
              </Route>
              <Route path="/">
                <Redirect to="/quickstart" />
              </Route>
              <Route path="/ethereum-boilerplate">
                <Redirect to="/quickstart" />
              </Route>
              <Route path="/nonauthenticated">
                <>Please login using the "Authenticate" button</>
              </Route>
            </Switch>
          </div>
        </Router>
      </Layout>
    </>
  );
};

export const Logo = () => (
  <div style={{ display: "flex", backgroundColor: "transparent" }}>
    <img src={wizzie} alt="logo" style={{ height: 50, width: 60 }} />
  </div>
);

export default App;
