import Link from "next/link";
import { Box, Container, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
  pageName: string;
  description: string;
}
const Breadcrumb: React.FC<Props> = ({ pageName, description }) => {
  return (
    <Box
      sx={{
        paddingTop: {
          lg: "8rem",
          md: "8rem",
          xs: "5rem"
        }
      }}
    >
      <Container>
        <Stack flexDirection="column">
          <Box>
            <Typography
              sx={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: 700,
                marginBottom: "1.25rem"
              }}
            >
              {pageName}
            </Typography>
          </Box>
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ flexWrap: "wrap" }}
        >
          <Box
            sx={{
              width: {
                lg: "65%",
                md: "65%",
                xs: "100%"
              }
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "1.625",
                fontWeight: 500,
                marginBottom: "1.25rem",
                color: "#959CB1",
                opacity: 1
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
              eros eget sapien consectetur ultrices. Ut quis dapibus libero.
            </Typography>
          </Box>

          <Box
            sx={{
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                xs: "flex-start"
              },
              width: {
                lg: "35%",
                md: "35%",
                xs: "100%"
              }
            }}
          >
            <Link
              href="/"
              style={{
                color: "#959CB1",
                textDecoration: "none"
              }}
            >
              <Typography
                sx={{
                  "&:hover": {
                    color: "#06B7B7"
                  }
                }}
              >
                Home
              </Typography>
            </Link>
            <KeyboardArrowRightIcon sx={{ color: "#959CB1" }} />
            <Typography sx={{ color: "#06B7B7" }}>{pageName}</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Breadcrumb;

// <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
// <div className="container">
//   <div className="-mx-4 flex flex-wrap items-center">
//     <div className="w-full px-4 md:w-8/12 lg:w-7/12">
//       <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
//         <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
//           {pageName}
//         </h1>
//         <p className="text-base font-medium leading-relaxed text-body-color">
//           {description}
//         </p>
//       </div>
//     </div>
//     <div className="w-full px-4 md:w-4/12 lg:w-5/12">
//       <div className="text-end">
//         <ul className="flex items-center md:justify-end">
//           <li className="flex items-center">
//             <Link
//               href="/"
//               className="pr-1 text-base font-medium text-body-color hover:text-primary"
//             >
//               Home
//             </Link>
//             <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-body-color"></span>
//           </li>
//           <li className="text-base font-medium text-primary">
//             {pageName}
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>

// <div>
//   <span className="absolute top-0 left-0 z-[-1]">
//     <svg
//       width="287"
//       height="254"
//       viewBox="0 0 287 254"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         opacity="0.1"
//         d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
//         fill="url(#paint0_linear_111:578)"
//       />
//       <defs>
//         <linearGradient
//           id="paint0_linear_111:578"
//           x1="-40.5"
//           y1="117"
//           x2="301.926"
//           y2="-97.1485"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#4A6CF7" />
//           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//         </linearGradient>
//       </defs>
//     </svg>
//   </span>
//   <span className="absolute right-0 top-0 z-[-1]">
//     <svg
//       width="628"
//       height="258"
//       viewBox="0 0 628 258"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         opacity="0.1"
//         d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
//         fill="url(#paint0_linear_0:1)"
//       />
//       <path
//         opacity="0.1"
//         d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
//         fill="url(#paint1_linear_0:1)"
//       />
//       <defs>
//         <linearGradient
//           id="paint0_linear_0:1"
//           x1="644"
//           y1="221"
//           x2="429.946"
//           y2="37.0429"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#4A6CF7" />
//           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient
//           id="paint1_linear_0:1"
//           x1="18.3648"
//           y1="166.016"
//           x2="105.377"
//           y2="32.3398"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#4A6CF7" />
//           <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//         </linearGradient>
//       </defs>
//     </svg>
//   </span>
// </div>
// </section>

{
  /* <Box
          sx={{
            paddingTop: "4rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >

        <Box sx={{width:'75%', alignSelf:'center'}}>
          <Typography
            sx={{
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              fontWeight: 700,
              marginBottom: "1.25rem"
            }}
          >
            {pageName}
          </Typography>
          <Grid container sx={{ width: "80%" }}>
            <Grid item lg={8} md={8} xs={12}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.625",
                  fontWeight: 500,
                  marginBottom: "1.25rem",
                  color: "#959CB1",
                  opacity: 1
                }}
              >
                {description}
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {
                    lg: "flex-end",
                    md: "flex-end",
                    xs: "flex-start"
                  }
                }}
              >
                <Link
                  href="/"
                  style={{ color: "#959CB1", textDecoration: "none" }}
                >
                  Home
                </Link>
                <KeyboardArrowRightIcon sx={{ color: "#959CB1" }} />
                <Typography sx={{ color: "#06B7B7" }}>{pageName}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </Box> */
}

{
  /* 
        <Box sx={{
          display:'flex',
          alignItems:'center',
          width:{
            lg:'80%'
          }
        }} className="Box">
          <Box sx={{display:'flex', margin:'2rem', flexWrap:'wrap', alignItems:'center'}} 
          className="-mx-4 flex flex-wrap items-center">
            <Box sx={{width:'100%', padding:'2rem 0rem'}} className="w-full px-4 md:w-8/12 lg:w-7/12">
              <Box sx={{marginBottom:'4rem', maxWidth:'570px'}} className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <Typography variant='h3' mb='5' className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {pageName}
                </Typography>
                <Typography variant='h5' className="text-base font-medium leading-relaxed text-body-color">
                  {description}
                </Typography>
              </Box>
            </Box>
            <Box sx={{width:'100%'}} className="w-full px-4 md:w-4/12 lg:w-5/12">
              <Box sx={{textAlign:'end'}} className="text-end">
                <Box component='ul' sx={{display:'flex', alignItems:'center', justifyContent:{
                  md:'flex-end',
                  
                }}} className="flex items-center md:justify-end">
                  <Box component='li' sx={{display:'flex', alignItems:'center'}} className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      Home
                    </Link>
                    <Box component='span' sx={{marginRight:'1.5rem', display:'block', rotate:'45deg', borderRadius:'2px'}}
                     className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-body-color"></Box>
                  </Box>
                  <Box component='span' className="text-base font-medium text-primary">
                    {pageName}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box> */
}
