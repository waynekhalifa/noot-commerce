/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from "@mui/material";

interface Props {}

import Link from "next/link";
import { Pages, Routes } from "@/constants/enums";
import OptimizedImg from "../OptimizedImg";

const Featured: React.FC<Props> = ({}) => {
  return (
    <>
      {/* only on laptop */}
      <Box
        sx={{
          display: {
            lg: "block",
            md: "none",
            xs: "none",
            sm: "none"
          }
        }}
      >
        <OptimizedImg
          src="/images/landEffects/MainPath.png"
          width={1100}
          height={940}
          alt="shape"
          style={{
            objectFit: "contain",
            position: "absolute",
            top: "-43px"
          }}
        />
      </Box>
      {/* only on tablet */}

      <Box
        sx={{
          display: {
            lg: "none",
            md: "block",
            xs: "none",
            sm: "none"
          }
        }}
      >
        <OptimizedImg
          src="/images/landEffects/MainPath.png"
          width={940}
          height={940}
          alt="shape"
          style={{
            objectFit: "contain",
            position: "absolute",
            top: "-43px"
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          pt: {
            lg: 8,
            md: 8,
            xs: "4.5rem"
          },
          pb: 3,

          color: "common.white"
        }}
      >
        {/* effects start */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            background: {
              lg: "transparent",
              md: "transparent",
              xs: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)"
            },
            borderRadius: {
              lg: "none",
              md: "none",
              xs: "none"
            },
            display: {
              lg: "none",
              md: "none",
              xs: "block",
              sm: "block"
            },
            width: {
              lg: "60%",
              md: "80%",
              xs: "100%"
            },
            height: {
              lg: "100%",
              md: "100%",
              xs: "80%"
            },
            clipPath: {
              lg: "none",
              md: "none",
              xs: "polygon(0% 0%, 100% 0%, 100% 35%, 50% 92%, 0 35%)"
            },
            top: "4rem"
          }}
        />
        {/* effects end */}

        {/* only on phone */}
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              xs: "block"
            },
            position: "absolute",
            top: "8%",
            left: "0%",
            width: "19%",
            overflow: "hidden"
          }}
        >
          <OptimizedImg
            src="/images/landEffects/effect2.png"
            alt="noot"
            width={400}
            height={300}
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </Box>
        {/* only on laptop & tablet */}
        <Box
          sx={{
            display: {
              lg: "block",
              md: "block",
              xs: "none"
            },
            position: "absolute",
            top: "13%",
            left: "0%",
            width: "24%",
            overflow: "hidden"
          }}
        >
          <OptimizedImg
            src="/images/landEffects/effect2.png"
            alt="noot"
            width={400}
            height={300}
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </Box>
        {/* only on phone */}
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              xs: "block"
            },
            position: "absolute",
            top: "65%",
            left: "30%",
            overflow: "hidden",
            "@media(max-width:767px)": {
              top: "72%",
              left: "26%",
              img: {
                width: "180px",
                height: "fit-content"
              }
            }
          }}
        >
          <OptimizedImg
            src="/images/landEffects/effect1.svg"
            alt="noot"
            width={400}
            height={300}
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </Box>
        {/* only on laptop & tablet */}
        <Box
          sx={{
            display: {
              lg: "block",
              md: "block",
              xs: "none"
            },
            position: "absolute",
            top: "58%",
            left: "33%",
            overflow: "hidden",
            "@media(max-width:767px)": {
              top: "72%",
              left: "27%",
              img: {
                width: "180px",
                height: "fit-content"
              }
            }
          }}
        >
          <OptimizedImg
            src="/images/landEffects/effect1.svg"
            alt="noot"
            width={400}
            height={300}
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </Box>
        {/* --------------------------------------- */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                lg: "row",
                md: "row"
              },
              position: "relative",
              paddingTop: {
                xs: "3rem",
                md: "0",
                lg: "0"
              }
            }}
          >
            <Typography
              paragraph
              sx={{
                position: "absolute",
                top: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "18px",
                backgroundColor: "#06B7B7",
                filter: " drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "30px",
                textAlign: "center",
                margin: "0",
                lineHeight: "1.2",
                height: "55px",
                padding: {
                  xs: "0 1rem",
                  md: "0 3rem",
                  lg: "0 4rem"
                },
                "@media(max-width:992px)": {
                  top: "15px",
                  width: "75%"
                },
                "@media(max-width:768px)": {
                  width: "85%",
                  fontSize: "15px"
                }
              }}
            >
              Choose a website template and start your free 7 days trial today
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: "100vw",
                flexDirection: {
                  xs: "column",
                  lg: "row",
                  md: "row"
                },
                padding: {
                  xs: "0 1rem",
                  md: "0 15rem",
                  lg: "0 17rem"
                }
              }}
            >
              <Box
                flex={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: {
                    xs: "center",
                    md: "start",
                    le: "start"
                  },
                  flexDirection: "column",
                  "@media(max-width:767px)": {
                    marginTop: "30px"
                  }
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={400}
                  pt={1}
                  sx={{
                    textShadow: "-2px 3px #76bb6ab5",
                    textAlign: {
                      lg: "start",
                      xs: "center"
                    },
                    fontSize: {
                      lg: "3rem",
                      md: "2.125rem",
                      xs: "1.7rem"
                    },
                    marginBottom: {
                      lg: "1rem",
                      md: "1rem",
                      xs: "1rem"
                    },
                    fontWeight: {
                      lg: "700",
                      md: "700",
                      xs: "600"
                    }
                  }}
                >
                  NOOT A CHANCE
                  <br /> TO BE NOTICED
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: {
                      lg: "1.35rem",
                      md: "1.35rem",
                      xs: "1.2rem"
                    },
                    lineHeight: {
                      lg: "1.25",
                      md: "1.25",
                      xs: "1"
                    },
                    textAlign: {
                      lg: "start",
                      md: "start",
                      xs: "center"
                    }
                  }}
                  fontWeight={400}
                >
                  Create a customizable website or
                  <br /> online store with an all-in-one solution
                  <br /> with Noot platform.
                </Typography>

                <Link
                  href={`/${Routes.DASHBOARD}/${Pages.OVERVIEW}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "common.white",
                      borderRadius: "25px",
                      letterSpacing: "2px",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "common.white",
                        color: "primary.main"
                      },
                      marginTop: {
                        lg: "1.4rem",
                        md: "1rem",
                        xs: "1rem"
                      },
                      fontSize: "1.3rem"
                    }}
                  >
                    get started
                  </Button>
                </Link>
              </Box>
              {/* only on laptop or tablet */}
              <Box
                flex={2}
                sx={{
                  display: {
                    lg: "block",
                    md: "block",
                    xs: "none"
                  }
                }}
              >
                <OptimizedImg
                  src="/images/laptop-preview.webp"
                  width={900}
                  height={800}
                  alt="noot"
                  style={{ objectFit: "contain", maxWidth: "100%" }}
                />
              </Box>
              {/* only on phone */}
              <Box
                flex={1}
                sx={{
                  display: {
                    lg: "none",
                    md: "none",
                    xs: "block"
                  }
                }}
              >
                <OptimizedImg
                  src="/images/laptop-preview.webp"
                  width={360}
                  height={260}
                  alt="noot"
                  style={{ objectFit: "contain", maxWidth: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Featured;
