import { Box, Link, Image, Text, Tooltip, Spacer } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import Apples from "../assets/yogesh.jpg";
import AmanClement from "../assets/rutvik.jpg";

function Dhabawale() {
  return (
    <Box
      id="Team"
      sx={{
        textAlign: "center",
        fontSize: "64px",
        color: "#262627",
      }}
      marginBottom="100px"
    >
      <Box
        display="flex"
        justifyContent="center"
        justifyItems="center"
      >
        <Box textAlign="center">
          <Heading
            textAlign="center"
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            maxW={{ base: "sm", md: "xl", lg: "4xl" }}
            paddingtop={6}
          >
            <br></br>
            Meet The Team -
          </Heading>
          <Text
            textAlign="center"
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            maxW={{ base: "sm", md: "xl", lg: "2xl" }}
            paddingtop={6}
            textDecoration="underline"
          >
            <b>YD Group</b>
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        className="collection"
        maxW={{ base: "sm", md: "xl", lg: "xl" }}
        margin="0 auto"
        width="75%"
      >
        <Box
          marginTop="50px"
          className="profile"
          position="relative"
          sx={{ transition: "all 0.3s" }}
          display="flex"
        >
          <Tooltip
            label="Yogesh Palave"
            bg="#FF9F1C"
            placement="top"
            arrowPadding={25}
            gutter={20}
          >
            <Link
              href="https://www.linkedin.com/in/yogesh-palve"
              boxSize={{ base: "100px", md: "150px" }}
              borderRadius="50%"
              border="5px solid #f7f7f7"
              sx={{ filter: "drop-shadow(-20px 0 10px rgba(0,0,0,0.1))" }}
              _hover={{ transform: "translateY(25px)" }}
              cursor="pointer"
            >
              <Image
                boxSize={{ base: "100px", md: "150px" }}
                borderRadius="50%"
                cursor="pointer"
                src={Apples}
                alt="Your"
              />
            </Link>
          </Tooltip>
          <Tooltip
            label="Rutvik Galande"
            bg="#FF9F1C"
            placement="top"
            arrowPadding={25}
            gutter={20}
          >
            <Link
              boxSize={{ base: "100px", md: "150px" }}
              borderRadius="50%"
              border="5px solid #f7f7f7"
              sx={{ filter: "drop-shadow(-20px 0 10px rgba(0,0,0,0.1))" }}
              _hover={{ transform: "translateY(25px)" }}
              cursor="pointer"
              href="https://www.linkedin.com/in/rutvik-galande-793928209"
            >
              <Image
                boxSize={{ base: "100px", md: "150px" }}
                borderRadius="50%"
                src={AmanClement}
                alt="mo"
              />
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default Dhabawale;
