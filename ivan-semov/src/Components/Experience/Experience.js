import Fingerprint from "@mui/icons-material/Fingerprint";
import TimelineIcon from '@mui/icons-material/Timeline';
import { Box, Button, Chip, Typography } from "@mui/material";

const Experience = () => {
    return (
        <Box
            conteiner
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
        >
            <Typography sx={{ fontSize: 54, mb: 10 }}>
                INTERSHIP
            </Typography>

            <Box container display="flex"
            >
                <img
                    src={process.env.PUBLIC_URL + '/Amdaris certificate_Ivan1024_1.jpg'}
                    alt="UltimateMovie.jpg"
                    style={{ height: 350, width: 500 }}
                />
                <Box conteiner alignItems="center" sx={{mt:-4}}>
                    <Typography sx={{ fontSize: 32, ml: 10, textAlign: "center", mb: 2 }}>
                        Amdaris Bulgaria
                    </Typography>
                    <Typography sx={{ fontSize: 18, ml: 10, textAlign: "center", mb: 2 }}>
                        <TimelineIcon sx={{fontSize:24 ,mr:1,mb:-0.4}}/>
                        From 01.11.2022 To 31.01.2023
                    </Typography>
                    <Typography sx={{ fontSize: 18, ml: 10, textAlign: "center" }}>
                        During the internship,
                        I gained a deep understanding of the individual components in an end-to-end project.
                        I had lectures on
                        <Chip color="success" variant="outlined" label="C# Basic" sx={{ fontSize: 18, ml: 1 }} />
                        <Chip color="success" variant="outlined" label="OPP" sx={{ fontSize: 18, ml: 1 }} />
                        <Chip color="success" variant="outlined" label="Design Patterns" sx={{ fontSize: 18, ml: 1 }} />
                        <Chip color="success" variant="outlined" label="EF Core" sx={{ fontSize: 18, m: 1 }} />
                        <Chip color="success" variant="outlined" label="ASP.Net Core" sx={{ fontSize: 18, m: 1 }} />
                        <Chip color="success" variant="outlined" label="CQRS(MediatR)" sx={{ fontSize: 18, m: 1 }} />
                        <br/>
                        <Chip color="success" variant="outlined" label="HTML" sx={{ fontSize: 18, ml: 1 }} />
                        <Chip color="success" variant="outlined" label="CSS" sx={{ fontSize: 18, ml: 1 }} />
                        <Chip color="success" variant="outlined" label="JS" sx={{ fontSize: 18, ml: 1 }} />
                        <br/>
                        <Chip color="success" variant="outlined" label="TS" sx={{ fontSize: 18, ml: 1,mt:1 }} />
                        <Chip color="success" variant="outlined" label="React" sx={{ fontSize: 18, ml: 1, mt: 1 }} />
                        <Chip color="success" variant="outlined" label="MUI" sx={{ fontSize: 18, ml: 1, mr: 1, mt: 1 }} />
                        <br/>
                        At the same time I was tasked with making a project with the same components.
                    </Typography>
                    <Button sx={{ alignItems: "center", p: 1, ml: "37%", mt: 2 }} color="secondary" size="large" variant="outlined" href="https://ivan-realestate.web.app/" target="_blank" >
                        <Fingerprint />
                        This is the result.
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Experience;