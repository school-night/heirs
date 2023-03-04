import Box from "../components/Box";
import Text from "../components/Text";

const Footer = () => {
  return (
    <Box css={{ textAlign: "center" }}>
      <Box marginTop={6} />
      <Text>
        © MADEBYHEIRS {new Date().getFullYear()}. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
