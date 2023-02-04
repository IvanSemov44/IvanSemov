import { Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { pink, red } from '@mui/material/colors';
import Fingerprint from '@mui/icons-material/Fingerprint';
import BiotechIcon from '@mui/icons-material/Biotech';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import DescriptionIcon from '@mui/icons-material/Description';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

const Projects = () => {
    return (
        <Grid conteiter display="flex" >
            <Grid item xs={4} sx={{ m: 4, ml: 2 }}>
                <Typography sx={{ fontSize: 30, m: 3, ml: 3, mt: -5, textAlign: "center" }}>
                    Ultimate Movie
                </Typography>
                <img
                    src={process.env.PUBLIC_URL + '/UltimateMovie.jpg'}
                    alt="UltimateMovie.jpg"
                    style={{ height: 250, width: 400 }}
                />

                <Box conteinter sx={{ ml: 19, mt: 3 }}>
                    <Button color="secondary" size="large" variant="outlined" href="https://ultimatemovie-e0290.web.app/catalog" target="_blank" sx={{ p: 1 }}>
                        <Fingerprint />
                        Open Here
                    </Button>
                </Box>

                <Divider variant="middle" sx={{ mt: 3 }} />

                <Typography sx={{ fontSize: 30, m: 3, ml: 6, textAlign: "center" }}>
                    <FaceRetouchingNaturalIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: pink[500] }} color="disabled" />
                    Motivation
                </Typography>

                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    The project is created to protect the ReactJS course at SoftUni
                </Typography>

                <Divider variant="middle" sx={{ mt: 3 }} />

                <Typography sx={{ fontSize: 30, m: 3, ml: 6, textAlign: "center" }}>
                    <DescriptionIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: red[500] }} color="disabled" />
                    Description
                </Typography>

                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    Find Perfect Movie for you.
                </Typography>

                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    User can manipulate own Movies.
                </Typography>

                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    Try for User:
                </Typography>

                <Box display="flex" flexDirection="column">
                    <Chip color="success" label="User: Gosho99" sx={{ fontSize: 18, m: 0.5 }} />
                    <Chip color="success" label="Password: asdasd" sx={{ fontSize: 18, m: 0.5 }} />
                </Box>
                <Divider variant="middle" sx={{mt:5}} />

                <Typography sx={{ fontSize: 30, m: 3, ml: 3, mb: -3, textAlign: "center" }}>
                    <BiotechIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: "blue" }} />
                    Tech Stack
                </Typography>

                <Grid conteinter display="flex" sx={{ ml: 3 }}>
                    <Grid item>
                        <Typography sx={{ fontSize: 24, m: 3, display: "flex" }}>
                            <StorageIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: "dark" }} />
                            Backend
                        </Typography>
                        <Stack direction="column" spacing={1}>
                            <Chip color="primary" label="MSSQL" sx={{ fontSize: 18 }} />
                            <Chip color="primary" label="EF Core" sx={{ fontSize: 18 }} />
                            <Chip color="primary" label="ASP.NET Core" sx={{ fontSize: 18 }} />
                            <Chip color="primary" label="AutoMapper" sx={{ fontSize: 18 }} />
                            <Chip color="error" label="JWT Bearer" sx={{ fontSize: 18 }} />
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 24, m: 3, ml: 6, display: "flex" }}>
                            <WebIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: "dark" }} />
                            Fronend
                        </Typography>
                        <Stack direction="column" spacing={1} sx={{ ml: 4 }}>
                            <Chip color="success" label="React" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="React Router Dom" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="React Router Bootstrap" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="Bootstrap" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="Formik" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="Yup" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="Fontawesome" sx={{ fontSize: 18 }} />
                        </Stack>
                    </Grid>
                </Grid>

            </Grid>




            <Grid item xs={4} sx={{ m: 4, ml: 2 }} >
                <Typography sx={{ fontSize: 30, m: 3, ml: 6, mt: -5, textAlign: "center" }}>
                    Ivan Real Estate
                </Typography>

                <img
                    src={process.env.PUBLIC_URL + '/IvanRealEstate.PNG'}
                    alt="UltimateMovie.jpg"
                    style={{ height: 250, width: 400 }}
                />
                <Box conteinter sx={{ ml: 19, mt: 3 }}>
                    <Button color="secondary" size="large" variant="outlined" href="https://ivan-realestate.web.app/" target="_blank" sx={{ p: 1 }}>
                        <Fingerprint />
                        Open Here
                    </Button>
                </Box>

                <Divider variant="middle" sx={{ mt: 3, ml: -2 }} />

                <Typography sx={{ fontSize: 30, m: 3, ml: 4, textAlign: "center" }}>
                    <FaceRetouchingNaturalIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: pink[500] }} />
                    Motivation
                </Typography>

                <Typography sx={{ fontSize: 18, m: 3, ml: 4, textAlign: "center" }}>
                    The project was created during the internship at Amdaris.
                </Typography>

                <Divider variant="middle" sx={{ mt: 3 }} />

                <Typography sx={{ fontSize: 30, m: 3, ml: 6, textAlign: "center" }}>
                    <DescriptionIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: red[500] }} color="disabled" />
                    Description
                </Typography>

                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    Find Perfect Real Estate for you.
                    You can use:
                </Typography>
                <Chip color="primary" label="Search" sx={{ fontSize: 18, ml: 10, mt: -4 }} />
                <Chip color="primary" label="Filters" sx={{ fontSize: 18, ml: 2, mt: -4 }} />
                <Chip color="primary" label="Sort" sx={{ fontSize: 18, ml: 2, mt: -4 }} />
                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    You can ask the Broker.
                </Typography>
                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    But if your are the Broker:
                </Typography>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Chip color="error" label="You can Register" sx={{ fontSize: 18, m: 0.5 }} />
                    <Chip color="error" label="Create own Ad and Manipulate it" sx={{ fontSize: 18, m: 0.5 }} />
                    <Chip color="error" label="And Create own Company" sx={{ fontSize: 18, m: 0.5 }} />
                </Box>
                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    And Finally Admin Role Can manipulate everything
                </Typography>

                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    Try for User:
                </Typography>

                <Box display="flex" flexDirection="column">
                    <Chip color="success" label="User: Ivan" sx={{ fontSize: 18, m: 0.5 }} />
                    <Chip color="success" label="Password: password100" sx={{ fontSize: 18, m: 0.5 }} />
                </Box>
                <Typography sx={{ fontSize: 18, m: 3, ml: 3, textAlign: "center" }}>
                    Try for Admin:
                </Typography>

                <Box display="flex" flexDirection="column">
                    <Chip color="success" label="User: Admin1" sx={{ fontSize: 18, m: 0.5 }} />
                    <Chip color="success" label="Password: password100" sx={{ fontSize: 18, m: 0.5 }} />
                </Box>

                <Divider variant="middle" sx={{ ml: -2,mt:5 }} />

                <Typography sx={{ fontSize: 30, m: 3, ml: 4, mb: -3, textAlign: "center" }}>
                    <BiotechIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: "blue" }} />
                    Tech Stack
                </Typography>

                <Grid conteinter display="flex" sx={{ ml: 4 }}>
                    <Grid item>
                        <Typography sx={{ fontSize: 24, m: 3, display: "flex" }}>
                            <StorageIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: "dark" }} />
                            Backend
                        </Typography>
                        <Stack direction="column" spacing={1}>
                            <Chip color="primary" label="MSSQL" sx={{ fontSize: 18 }} />
                            <Chip color="primary" label="EF Core" sx={{ fontSize: 18 }} />
                            <Chip color="primary" label="ASP.NET Core" sx={{ fontSize: 18 }} />
                            <Chip color="primary" label="AutoMapper" sx={{ fontSize: 18 }} />
                            <Chip color="primary" label="CQRS (MediatR)" sx={{ fontSize: 18 }} />
                            <Chip color="error" label="JWT Bearer" sx={{ fontSize: 18 }} />
                            <Chip color="secondary" label="Moq" sx={{ fontSize: 18 }} />
                            <Chip color="secondary" label="Xunit" sx={{ fontSize: 18 }} />
                            <Chip color="secondary" label="MSTest" sx={{ fontSize: 18 }} />
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 24, m: 3, ml: 6, display: "flex" }}>
                            <WebIcon sx={{ fontSize: 32, mb: -0.3, mr: 1, color: "dark" }} />
                            Fronend
                        </Typography>
                        <Stack direction="column" spacing={1} sx={{ ml: 4 }}>
                            <Chip color="success" label="React" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="React Hook Form" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="React Router Dom" sx={{ fontSize: 18 }} />
                            <Chip color="success" label="Material UI" sx={{ fontSize: 18 }} />
                        </Stack>
                    </Grid>
                </Grid>

            </Grid>

        </Grid >
    )
}

export default Projects;