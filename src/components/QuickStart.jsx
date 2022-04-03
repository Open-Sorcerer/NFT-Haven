import { Card, Typography } from "antd";
import React from "react";
import wizzie from "../assets/wizzie.png";
const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
    maxWidth: "40%",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart() {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <Card
        style={{ marginTop: "10px", ...styles.card }}
        title={
          <>
            📡 <Text strong> Open Sorceror </Text>
          </>
        }
      >
        <img src={wizzie} alt="wizzie" style={{ width: "100%" }} />
      </Card>
      <Card
        style={{ marginTop: "10px", ...styles.card }}
        title={
          <>
            🖌️ <Text strong> NFT Haven </Text>
          </>
        }
      >
        <Text style={styles.text}>
          <Text strong>A multichain Defi Dashboard</Text> which allows you to
          track your assets on multiple chains. It also allows users to create
          their own NFTs on Polygon with a very friendly user interface. Any
          media you hold, a video, an image, an audio file can be converted to
          an NFT. The gas fees for minting are minimal thanks to the Polygon
          Network. Currently the minter is on Polygon testnet.
        </Text>
      </Card>
    </div>
  );
}
